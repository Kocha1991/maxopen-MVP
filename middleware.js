import { NextResponse } from 'next/server';
import { LOCALS } from './public/locales/locales';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Пропускаємо статичні файли та API routes
  if (pathname.match(/\.(ico|jpg|jpeg|png|gif|svg|css|js)$/) || 
      pathname.startsWith('/_next') || 
      pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Отримуємо першу частину шляху
  const firstSegment = pathname.split('/')[1];

  // Якщо шлях вже містить валідний мовний код, пропускаємо
  if (Object.values(LOCALS).includes(firstSegment)) {
    return NextResponse.next();
  }

  // В іншому випадку додаємо мовний код за замовчуванням
  const defaultLocale = LOCALS.EN;
  const newUrl = new URL(
    `/${defaultLocale}${pathname}`,
    request.url
  );
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  // Оновлюємо matcher, щоб виключити кореневий маршрут
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|$).*)'
  ]
}; 