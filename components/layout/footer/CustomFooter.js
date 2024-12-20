import { SocialNetworks } from '@/components/elements/SocialNetworks';
import Link from 'next/link';
import { useLanguage } from '@/components/customHooks/LanguageContext';
import { Nav } from '@/components/elements/Nav';

export default function CustomFooter() {
    const { language } = useLanguage();
    const translations = {
      en: {
        follow:"Follow us",
      },
      uk: {
        follow: "Підпишіться на нас"
      },
      ru_UA: {
        follow: "Подпишитесь на нас"
      },
    };
    const { follow } = translations[language] || translations.en;
  
    return (
        <>
            <footer className="footer custom-footer">
                <div className="container">
                  <div className="custom-footer__wrapper">
                    <Link href="/" className="maxOpen-logo">
                      <img alt="MaxOpen" src="/assets/imgs/template/logo.png"/>
                    </Link>
                    <Nav />
                    
                    <div className="custom-footer__social">
                        <p className="text-lg title-follow neutral-0 mt-0">
                          {follow}
                        </p>
                        <SocialNetworks />
                    </div>
                    <div className="footer-bottom text-center">
                      <p className="text-sm neutral-600">Copyright © 2025 MAXOPEN. All rights reserved.</p>
                    </div>
                  </div>
                </div>
            </footer>

        </>
    )
}
