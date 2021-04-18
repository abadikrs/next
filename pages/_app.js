import '../styles/globals.css'
import Head from '../components/header'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
