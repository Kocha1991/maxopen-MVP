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

  // Якщо це кореневий URL, перевіряємо мову в cookie
  if (pathname === '/') {
    const savedLang = request.cookies.get('i18nextLng')?.value;
    let defaultLang = savedLang || LOCALS.UK; // Змінюємо дефолтну мову на UK
    
    // Конвертуємо 'ru' в 'ru_UA' для URL
    if (defaultLang === 'ru') {
      defaultLang = 'ru_UA';
    }

    return NextResponse.redirect(new URL(`/${defaultLang}`, request.url));
  }

  // Спеціальна обробка для ru_UA
  if (firstSegment === 'ru_UA') {
    return NextResponse.next();
  }

  // Якщо шлях вже містить валідний мовний код, пропускаємо
  if (Object.values(LOCALS).includes(firstSegment) || firstSegment === 'ru_UA') {
    return NextResponse.next();
  }

  // В іншому випадку перевіряємо збережену мову
  const savedLang = request.cookies.get('i18nextLng')?.value;
  let defaultLang = savedLang || LOCALS.UK;
  
  // Конвертуємо 'ru' в 'ru_UA' для URL
  if (defaultLang === 'ru') {
    defaultLang = 'ru_UA';
  }

  const newUrl = new URL(
    `/${defaultLang}${pathname === '/' ? '' : pathname}`,
    request.url
  );
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}; 