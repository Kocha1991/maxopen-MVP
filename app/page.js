import { redirect } from 'next/navigation';
import { LOCALS } from '@/public/locales/locales';

// Редирект з кореневого URL на URL з мовою за замовчуванням
export default function Page() {
  redirect(`/${LOCALS.EN}`);
}
