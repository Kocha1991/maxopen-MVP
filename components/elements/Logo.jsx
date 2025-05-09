import React from "react";
import Link from 'next/link';
import { useFetchData } from '@/components/customHooks/useFetchData';

const Logo = () => {
  const { data: logoData, loading: logoLoading } = useFetchData('main-logo');

  const logoItem = Array.isArray(logoData) && logoData.length > 0 ? logoData[0] : null;
  const logoImage = logoItem?.['logo-web']?.full_url;
  const logoHref = logoItem?.href || '/';
  
  return (
    <Link href={logoHref} className="maxOpen-logo">
      <img
        alt="MaxOpen"
        src={logoImage}
        width={logoItem?.['logo-web']?.width || 206}
        height={logoItem?.['logo-web']?.height || 44}
      />
    </Link>
  )
};

export default Logo;
