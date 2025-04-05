import { useNavigate } from "react-router-dom";
import { ScrollTop } from "../utilities/ScrollTop";

export const StreamCard = ({ image, title, description }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    if (title === "Movies") {
      navigate("/streams/movies");
    } else if (title === "Series") {
      navigate("/streams/series");
    } else if (title === "Episodes") {
      navigate("/streams/episodes");
    }
  };

  return (
    <div
      onClick={() => {
        handleExploreClick(), ScrollTop();
      }}
      className="p-5 border rounded-[10px] flex flex-col justify-between gap-6 items-start cursor-pointer"
    >
      <div>
        <img src={image} alt={`${title} Image Icon`} className="w-25" />
        <h1 className="text-2xl my-4  font-medium   text-white flex flex-items-center">
          <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
          {title}
          <span className="text-3xl">&nbsp; &gt;</span>
        </h1>
        <p className="capitalize text-justify mt-2">{description}</p>
      </div>
      <button className="border rounded-full px-6 py-1 cursor-pointer font-medium hover:bg-[rgb(245,197,24)] hover:text-black ">
        Explore
      </button>
    </div>
  );
};
