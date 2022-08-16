import "styles/tailwind.css";
import "styles/custom.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <title>Need to ship a package?</title>
        <meta name="title" content="Need to ship a package?" />
        <meta
          name="description"
          content="Phoenix Global Trading is an international operating global company. After having almost  a decade of experience in sales, import and export spheres, our company proudly becomes a part of Phoenix Group. This gave us a great deal of opportunities and prospective development plan."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphalogistics.com/" />
        <meta property="og:title" content="Need to ship a package?" />
        <meta
          property="og:description"
          content="Phoenix Global Trading is an international operating global company. After having almost  a decade of experience in sales, import and export spheres, our company proudly becomes a part of Phoenix Group. This gave us a great deal of opportunities and prospective development plan."
        />
        <meta property="og:image" content="/favicon.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alphalogistics.com/" />
        <meta property="twitter:title" content="Need to ship a package?" />
        <meta
          property="twitter:description"
          content="Phoenix Global Trading is an international operating global company. After having almost  a decade of experience in sales, import and export spheres, our company proudly becomes a part of Phoenix Group. This gave us a great deal of opportunities and prospective development plan."
        />
        <meta property="twitter:image" content="/favicon.png" />
      </Head>
      <div className="h-screen w-screen | relative">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
