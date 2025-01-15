import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { topics } from "../../dummy-data/topics";

const useBlogPreview = (formData, setFormData, id) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [imageSrc, setImageSrc] = useState(null); // setting already existing image
  const navigate = useNavigate(); // Fetch available topics and set the selected ones

  const handleChange = (selected) => {
    if (selected.length <= 5) {
      setSelectedOptions(selected);
    } else {
      alert("You can only select up to 5 options");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const onSubmit = async () => {
    const formValues = new FormData();

    for (const key in formData) {
      if (key === "is_published") {
        formValues.append(key, true);
      } else if (key === "topics") {
        // append each topic id individually
        selectedOptions.forEach((id) => formValues.append("topics", id.value));
      } else {
        formValues.append(key, formData[key]);
      }
    }

    navigate(`/blog/test/`);
    toast.success("Blog published.");
  };

  return {
    topics,
    selectedOptions,
    imageSrc,
    handleChange,
    handleImageChange,
    onSubmit,
  };
};

export default useBlogPreview;
