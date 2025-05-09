// components/SEO.js

const SEO = ({ title, description, keywords }) => {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://maxopen.com" />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </head>
  );
};

export default SEO;
