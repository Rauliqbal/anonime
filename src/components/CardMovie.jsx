import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CardMovie({ to, episode, src, alt, title }) {
   return (
      <Link to={to} className="flex flex-col group">
         <div className="relative rounded-2xl overflow-hidden">
            <img className="w-full h-[240px] md:h-[325px] object-cover scale-105 group-hover:scale-100 transition duration-300 ease-out" src={src} alt={alt} />
            <div className=" absolute top-0 bg-gradient-to-t from-black/80 to-transparent left-0 w-full h-full ">
               <h5 className="absolute bottom-0 right-0 left-0 text-white p-3 text-center">{episode}</h5>
            </div>
         </div>
         <h4 className="text-sm sm:text-base text-center mt-1 font-medium text-white">{title}</h4>
      </Link>
   );
}
