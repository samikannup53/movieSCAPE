import BackupImage from "../assets/BackupImage.jpg";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { Poster, Title, Year, Type } = movie;

  const image = Poster ? Poster : BackupImage;
  return (
    <div
      title={Title}
      className="w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 border flex flex-col gap-2 relative rounded-md shadow-custom-light"
    >
      <img
        src={image}
        alt="Backup Movie Poster Image"
        className="w-full h-70 sm:h-50  xl:h-70 object-cover rounded-t-md"
      />

      <div className="p-3 -mt-4">
        <h3 className="text-2xl font-medium heading-overflow ">{Title}</h3>
        <p className="">Year : {Year}</p>
        <p className="mb-3">{Type}</p>
        <Link to={`/streams/${movie.imdbID}/`} className="border px-2  rounded-lg">
          Details
        </Link>
      </div>
      <span className="absolute right-4 top-2 text-2xl">
        <i class="fa-solid fa-heart"></i>
      </span>
    </div>
  );
};
