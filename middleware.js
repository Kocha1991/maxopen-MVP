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

  // Спеціальна обробка для ru_UA
  if (firstSegment === 'ru_UA') {
    return NextResponse.next();
  }

  // Якщо шлях містить невалідний мовний код, перенаправляємо на дефолтну мову
  if (firstSegment && !Object.values(LOCALS).includes(firstSegment) && firstSegment !== 'ru_UA') {
    const defaultLocale = LOCALS.EN;
    const pathWithoutLang = pathname.split('/').slice(2).join('/');
    const newUrl = new URL(
      `/${defaultLocale}${pathWithoutLang ? '/' + pathWithoutLang : ''}`,
      request.url
    );
    return NextResponse.redirect(newUrl);
  }

  // Якщо шлях вже містить валідний мовний код, пропускаємо
  if (Object.values(LOCALS).includes(firstSegment) || firstSegment === 'ru_UA') {
    return NextResponse.next();
  }

  // В іншому випадку додаємо мовний код за замовчуванням
  const defaultLocale = LOCALS.EN;
  const newUrl = new URL(
    `/${defaultLocale}${pathname === '/' ? '' : pathname}`,
    request.url
  );
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}; 