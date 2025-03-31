export const Header = () => {
  return (
    <section className="z-40 bg-[rgb(0,0,0)] text-[rgb(245,197,24)] sticky top-0 ">
      <nav className="container mx-auto flex justify-between items-cneter p-6    ">
        <div className="flex items-center justify-center gap-3 text-[1.75rem] font-semibold ">
          <i class="fa-solid fa-film"></i>
          <h1 className="">movieSCAPE</h1>
        </div>
        <div className="flex items-center sm:mr-26">
          <div className="border-[1.75px] rounded-full px-4 py-1 text-[18px] ">
            <input
              type="text"
              placeholder="Search Movies ..."
              className="outline-none"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <button className="border-[1.75px] rounded-full py-1 px-4 ml-4   ">
            Genres &nbsp; <i class="fa-solid fa-caret-down text-xl"></i>
          </button>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <i class="fa-solid fa-house"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </section>
  );
};
