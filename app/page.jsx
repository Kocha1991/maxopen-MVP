import { redirect } from 'next/navigation';
import { LOCALS } from '@/public/locales/locales';
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  const savedLang = cookieStore.get('i18nextLng');
  let currentLang = savedLang?.value || LOCALS.EN;

  if (currentLang === 'ru') {
    currentLang = 'ru_UA';
  }

  redirect(`/${currentLang}`);
}
