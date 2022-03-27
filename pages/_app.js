import "../styles/globals.css";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  console.log(styles);
  return (
    <footer className={styles.footer}>
      <p>Cristina Lester &copy; 2022</p>
    </footer>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
