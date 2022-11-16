import { Helmet, HelmetProvider } from "react-helmet-async";

const PageHelmet: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pokedex</title>
          <link
            href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default PageHelmet;
