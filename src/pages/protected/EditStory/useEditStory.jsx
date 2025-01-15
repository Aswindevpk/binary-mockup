import { useEffect, useState, useRef } from "react";
import { api } from "@services/api";
import { toast } from "sonner";

function useEditStory(setStatus, id) {
  let updatedForm = useRef(null);
  const [formData, setFormData] = useState({title:'test title',content:'content'});

  //showing the popup
  const [showPopup, setShowPopup] = useState(false);


  return {
    formData,
    showPopup,
    setFormData,
    setShowPopup
  };
}

export default useEditStory;
