import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const LangPage = () => {
  const { i18n } = useTranslation();  // Доступ до i18n для зміни мови
  const router = useRouter();
  const { lang } = router.query;      // Отримуємо параметр lang з URL

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);  // Зміна мови через i18next
      localStorage.setItem('language', lang);  // Збереження мови в localStorage
    }
  }, [lang, i18n]);

  return null;
};

export default LangPage;
