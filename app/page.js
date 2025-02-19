import { redirect } from 'next/navigation';
import { LOCALS } from '@/public/locales/locales';
import { cookies } from 'next/headers';

// Редирект з кореневого URL на URL з мовою за замовчуванням
export default function Page() {
  const cookieStore = cookies();
  const savedLang = cookieStore.get('i18nextLng');
  let currentLang = savedLang?.value || LOCALS.EN; // Змінюємо дефолтну мову на UK
  
  // Конвертуємо 'ru' в 'ru_UA' для URL
  if (currentLang === 'ru') {
    currentLang = 'ru_UA';
  }

  redirect(`/${currentLang}`);
}
