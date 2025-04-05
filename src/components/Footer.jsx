import {  Link } from "react-router-dom";
import { ScrollTop } from "../utilities/ScrollTop";

export const Footer = () => {

   return (
    <section className="bg-[rgb(0,0,0)]">
      <div className="container mx-auto p-6 flex flex-col justify-center items-center gap-4">
        <div className="text-white flex  items-center gap-4 flex-wrap justify-center">
          <Link onClick={ScrollTop} to="/" >Home</Link>          
          <Link onClick={ScrollTop} to="/about" >About Us</Link>          
          <Link onClick={ScrollTop} to="/about" >Privacy & Policy</Link>          
          <Link onClick={ScrollTop} to="/about" >Terms & Conditions</Link>           
        </div>
        <div className="text-[rgb(245,197,24)] cursor-default flex items-center justify-center gap-3 text-[1.75rem] font-semibold ">
          <i class="fa-solid fa-film"></i>
          <h1 className="">movieSCAPE</h1>
        </div>
        <p className="text-center text-white">
          Copyright @ 2025 movieSCAPE. All Rights Reserved
        </p>
      </div>
    </section>
  );
};
