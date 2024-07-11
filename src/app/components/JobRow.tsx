import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function JobRow(){
    return(
        <>
        <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="absolute cursor-pointer top-4 right-4">
                <FontAwesomeIcon className="size-5 text-gray-300" icon={faHeart}/>
            </div>
          <div className="flex grow gap-4">
            <div className="content-center">
              <img
                className="size-12"
                src="https://upload.wikimedia.org/wikipedia/commons/7/71/Spotify.png"
                alt=""/>
            </div>
          <div className="grow sm:flex">
            <div className="grow">
            <div className="text-gray-500 text-sm ">Spotify</div>
            <div className="font-bold text-lg mb-1">Software Engineer</div>
            <div className="text-gray-400 text-sm">
                Remote &middot; Sydney, Australia &middot; Full-time
            </div>

            </div>
          
            <div className="content-end text-gray-500 text-sm">
            2 days ago
          </div>
          </div>
          </div> 
            
        </div>
        </>

    );
}