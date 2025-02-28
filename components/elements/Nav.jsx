import React from "react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const Nav = ({
  onLinkClick,
}) => {
  const { t } = useTranslation();

  return (
    <nav className="custom-nav">
      <ul className="main-menu">
        <li className="has-children"><Link className="active" href="/" onClick={onLinkClick}>{t("Home")}</Link></li>
        <li className="has-children"><Link href="/services" onClick={onLinkClick}>{t("Services")}</Link></li>
        <li className="has-children"><Link href="/about-us" onClick={onLinkClick}>{t("AboutUs")}</Link></li>
        <li className="has-children"><Link href="/solutions" onClick={onLinkClick}>{t("Solutions")}</Link></li>
        <li className="has-children"><Link href="/portfolio" onClick={onLinkClick}>{t("Portfolio")}</Link></li>
        <li className="has-children"><Link href="/blog" onClick={onLinkClick}>{t("Blog")}</Link></li>
      </ul>
    </nav>
  );
};

// import React from "react";
// import Link from 'next/link';
// import Loading from '@/components/elements/Loading';
// import { useTranslation } from 'react-i18next';
// import { useFetchData } from '../customHooks/useFetchData';

// export const Nav = () => {
//   const { t, i18n } = useTranslation();
//   const { language } = i18n;

//   const { data: navigations, loading, error } = useFetchData("navigation", language);

//   if (loading) return <Loading />;
//   if (error) return <div className="error-message">{t("Error loading navigation")}: {error}</div>;

//   return (
//     <nav className="custom-nav">
//       <ul className="main-menu">
//         {navigations.map((item) => (
//           <li key={item.id} className="has-children">
//             <Link href={`/${item.name.toLowerCase()}`}>{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };
