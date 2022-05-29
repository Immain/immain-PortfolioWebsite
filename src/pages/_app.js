import Theme from '../styles/theme';
import ScrollToTop from "react-scroll-to-top";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <ScrollToTop  smooth color="#1768ff" />
      </Theme>
    </>
  );
}
 