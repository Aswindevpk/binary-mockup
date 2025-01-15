import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { api } from "@services/api";
import { toast } from "sonner";


function Bookmark({is_bookmarked,article_id}) {
  //if bookmark id exists the article bookmarked
  const [isBookmarked,setIsBookmarked] = useState(is_bookmarked ? true:false)

  //bookmark handler
  const handleBookmark = async (article_id) => {
        if (isBookmarked){
          setIsBookmarked(false)
          toast.info("Article Remove from Bookmarked !");
        }else{
          setIsBookmarked(true)
          toast.success("Article Bookmarked !");
        }
  };


  return (
    <div className="outline-none" onClick={()=>handleBookmark(article_id)}>
      <FontAwesomeIcon
        icon={isBookmarked ? solidBookmark : regularBookmark}
        className="icons text-secondary"
        id="tooltip-bookmark"
      />
      {/* <Tooltip anchorSelect="#tooltip-bookmark" content="Save" /> */}
    </div>
  );
}

export default Bookmark;
