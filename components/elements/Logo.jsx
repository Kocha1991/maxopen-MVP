import React, { useState } from "react";
import Link from 'next/link';
import { useFetchData } from '@/components/customHooks/useFetchData';

const Logo = () => {
  const { data: logoData } = useFetchData('main-logo');
  const logoItem = Array.isArray(logoData) && logoData.length > 0 ? logoData[0] : null;
  const logoImage = logoItem?.['logo-web']?.full_url;
  const logoHref = logoItem?.href || '/';

  const [imgSrc, setImgSrc] = useState(logoImage || '/assets/imgs/template/logo.png');

  return (
    <Link href={logoHref} className="maxOpen-logo">
      <img
        alt="MaxOpen"
        src={imgSrc}
        onError={() => setImgSrc('/assets/imgs/template/logo.png')}
      />
    </Link>
  );
};

export default Logo;
