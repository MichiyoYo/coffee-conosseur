import "../styles/globals.css";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
