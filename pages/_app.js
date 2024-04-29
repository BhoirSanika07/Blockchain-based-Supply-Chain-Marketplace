import "@/styles/globals.css";

// internal import
import { TrackingProvider } from "@/Context/TrackingContext";
import { NavBar,Footer } from "@/Components";


export default function App({ Component, pageProps }) {


  return (
    <>
    <TrackingProvider>
 
        <NavBar />
       
        <Component {...pageProps} />
        <Footer />
     
    </TrackingProvider>
    </>
  );
}
