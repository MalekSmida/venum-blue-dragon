import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const CustomDocument = () => {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/une6nrw.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
