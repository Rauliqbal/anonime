import Navbar from "./components/Navbar";
import Router from "./router";

function App() {
   return (
      <>
         <Navbar />
         <main className="mt-8">
            <Router />
         </main>
      </>
   );
}

export default App;
