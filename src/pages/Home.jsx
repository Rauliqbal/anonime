import List from "../components/homepage/List";
import Recommended from "../components/homepage/SeasonNow";

export default function Home() {
   return (
      <div className="container">
         <Recommended />
         <List />
      </div>
   );
}
