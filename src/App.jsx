import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./router";

function App() {
   return (
      <>
         <Navbar />
         <main className="py-20 md:py-24">
            <Router />
         </main>
         <Footer/>
      </>
   );
}

export default App;
