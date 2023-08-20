import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMovie from "../components/CardMovie";

export default function Detail() {
   const [detail, setDetail] = useState([]);
   const [studio, setStudio] = useState([]);
   const [genres, setGenres] = useState([]);
   const [recomens, setRecomens] = useState([]);
   const params = useParams();

   useEffect(() => {
      async function getDetail() {
         try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}`);

            setDetail(response.data.data);
            setStudio(response.data.data.studios[0]);
            setGenres(response.data.data.genres);
         } catch (error) {
            console.log("Something went wrong!");
         }
      }

      async function getRecomen() {
         try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}/recommendations`);

            setRecomens(response.data.data);
         } catch (error) {
            console.log(error);
         }
      }

      getRecomen();

      getDetail();
   });

   return (
      <div className="container">
         <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            <div className="col-span-6">
               <h2 className="text-2xl md:text-3xl text-white">{detail.title} - Trailer</h2>
               <div className="rounded-xl overflow-hidden aspect-video mt-8">
                  <iframe className="w-full h-full" src={detail.trailer?.embed_url} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
               </div>

               <div className="flex mt-8 gap-4 md:gap-8">
                  <img className="w-[180px] h-[240px] md:w-[430px] md:h-96 rounded-xl object-cover" src={detail?.images?.webp?.image_url} alt="" />
                  <div className="flex justify-between w-full">
                     <div className="col-span-2">
                        <div>
                           <h3 className="text-white text-base md:text-xl font-semibold">Type :</h3>
                           <p className="text-slate-400 text-sm md:text-lg">{detail.type}</p>
                        </div>
                        <div className="mt-4">
                           <h3 className="text-white text-base md:text-xl font-semibold">Status :</h3>
                           <p className="text-slate-400 text-sm md:text-lg">{detail.status}</p>
                        </div>
                        <div className="mt-4">
                           <h3 className="text-white text-base md:text-xl font-semibold">Studio :</h3>
                           <p className="text-slate-400 text-sm md:text-lg">{studio.name}</p>
                        </div>
                        <div className="mt-4">
                           <h3 className="text-white text-base md:text-xl font-semibold">Duration :</h3>
                           <p className="text-slate-400 text-sm md:text-lg">{detail.duration}</p>
                        </div>
                        <div className="mt-4 text-white ">
                           <h3 className="text-white text-base md:text-xl font-semibold">Genres :</h3>
                           <div
                              className="flex flex-col sm:flex-row gap-1 text-slate-400 
                                 "
                           >
                              {genres.map((genre, index) => {
                                 return (
                                    <div key={genre.id}>
                                       <span className="text-sm md:text-lg">{genre.name}</span>
                                       {index !== genres.length - 1 && ", "}
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                     <div className="col-span-1 hidden sm:block">
                        <div className="py-2 px-6 text-lg border text-white border-gray-600 bg-slate-800 text-center rounded-xl">
                           <h3 className="text-center text-base tracking-wide -mb-1">Score</h3>
                           <p>{detail.score}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white">Synopsis :</h3>
                  <p className=" tracking-wide leading-relaxed text-slate-400 mt-2">{detail.synopsis}</p>
               </div>
            </div>
            <div className="col-span-2">
               <h2 className="text-2xl text-white">Recommended</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recomens &&
                     recomens.slice(0, 6).map((data) => {
                        return (
                           <div key={data.mal_id}>
                              <CardMovie to={`/detail/${data.entry.mal_id}`} src={data.entry.images.webp.image_url} title={data.entry.title} />
                           </div>
                        );
                     })}
               </div>
            </div>
         </div>
      </div>
   );
}
