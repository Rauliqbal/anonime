import List from "../components/homepage/List";
import Recommended from "../components/homepage/Recommended";

export default function Home() {
   return (
      <div className="container py-20">
         <Recommended />
         <List />
      </div>
   );
}
