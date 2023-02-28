import '../styles/globals.css';
import {AppProvider} from '../context/appContext'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
    return (
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    )
    
}