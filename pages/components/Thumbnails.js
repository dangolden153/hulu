import Image from "next/image";
import {ThumbUpIcon} from '@heroicons/react/outline'

function Thumbnails({ result }) {
  const { overview,title, imgSrc,data,vote_counts } = result;
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (

    <div className="p-2 transition transform md:hover:scale-105 
    hover:z-50 group cursor-pointer ">
      

      <Image src={imgSrc} height={1080} width={1920} layout="responsive" />
      
      <div className="p-2">
          <p className="truncate max-w-md">{overview}</p>
          <h2 className="text-white mt-1 capitalize 2xl transition-all duration-200 group-hover:font-bold ">{title}</h2>
          <p className="flex item-center opacity-0 group-hover:opacity-100">
            {data}
            <ThumbUpIcon className="h-5 mx-2"/>
            {vote_counts}
          </p>
      </div>
    </div>
  );
}

export default Thumbnails;





  {/* <Image 
           src={`${base_url}${result.backdrop_path || result.poster_path}` || `${base_url}${result.poster_path}`}
           height={1080}
           width={1920}
           layout="responsive"
           /> */}

      {/* <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2>{result.title || result.original_name}</h2>
        <p className="flex items-center opacity-0">
            {result.media_type && `${result.media_type}.`}{""}
            {result.release_date || result.first_air_date  } .{""}
            <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div> */}

