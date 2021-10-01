// El _app.js contiene todo lo golbal de la aplicacion -> npm i sass
import  '../scss/global.scss';

// Importando semantic-ui 
import 'semantic-ui-css/semantic.min.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}