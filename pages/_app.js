import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <element>
      <Navbar />
     <Component {...pageProps} />
    </element>
  );
}

export default MyApp
