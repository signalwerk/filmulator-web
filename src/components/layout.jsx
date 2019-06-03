import { resolve as resolveURL } from "url";

export default ({ children, currentPageID, environment, pages }) => {
  let currentPage = pages.find(page => page.meta.id === currentPageID);
  let pageTitle =
    currentPageID === "root" ? "Filmulator" : `${currentPage.meta.title} `;
  let description = "Filmulator";

  let baseURL = "https://xxx.org";
  let url = resolveURL(baseURL, currentPage.path);
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />

        <meta property="og:image" content={`${baseURL}/images/logomark.png`} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:site_name" content="Charge" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@brandonweiss" />
        <meta name="twitter:image" content={`${baseURL}/images/logomark.png`} />

        <link rel="canonical" href={url} />

        <link rel="icon" type="image/png" href="/images/favicon.png" />

        <link rel="stylesheet" href="./components/css/index.css" />

      </head>
      <body>
        <div>
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
};
