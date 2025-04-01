export const Streams = () => {
  return (
    <section className="bg-[rgb(0,0,0)] text-[rgb(245,197,24)] py-8">
      <div className=" p-6 container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-center text-2xl uppercase font-semibold">
          Genres
        </h2>
        <p className="text-white text-center text-lg leading-6 mt-5">
          "Dive into your favorite genres. Whether you're in the mood for
          action, romance, thriller, or something else, we’ve got you covered."
        </p>
        <div className="flex flex-wrap gap-4 mt-10 justify-center items-center">
          <div className=" p-4 h-50 w-50 border rounded-[10px]">
            <h1>Movies</h1>
          </div>
          <div className="p-4 h-50 w-50 border rounded-[10px]">
            <h1>Series</h1>
          </div>
          <div className="p-4 h-50 w-50 border rounded-[10px]">
            <h1>Episodes</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
