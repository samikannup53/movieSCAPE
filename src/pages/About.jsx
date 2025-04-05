export const About = () => {
  return (
    <section className="px-6 bg-[rgb(0,0,0)] text-[rgb(245,197,24)]">
      <div className="container mx-auto px-6">
        <h1 className="bg-[rgb(0,0,0)] text-2xl z-40 mb-4 sticky top-[84px] border-b font-medium border-[rgb(245,197,24)] pb-2 text-white flex flex-items-center">
          <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
          About Us
          <span className="text-3xl">&nbsp; &gt;</span>
        </h1>
        <div className="sm:w-[75vw] max-w-[1000px] mx-auto my-10 flex flex-col gap-8 px-8 sm:px-15 py-12 border rounded-xl items-center">
          <div>
            <h1 className="bg-[rgb(0,0,0)] sticky top-[85px] text-xl  font-medium  text-white flex items-center">
              <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
              About Us
              <span className="text-3xl">&nbsp; &gt;</span>
            </h1>
            <p className="text-justify mt-4 indent-10 capitalize">
              Welcome to &nbsp;
              <span className="text-white font-medium text-lg">movieSCAPE</span>
              . The ultimate destination for movie lovers! We are passionate
              about helping you discover, explore, and enjoy the best movies
              across all genres and eras. Whether you're looking for the latest
              blockbusters, classic films, or hidden gems, we've got you
              covered.
            </p>
          </div>

          <div>
            <h1 className="bg-[rgb(0,0,0)] sticky top-[85px] text-xl  font-medium  text-white flex items-center  border-t pt-3 border-[#00C2FF]">
              <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
              Our Mission
              <span className="text-3xl">&nbsp; &gt;</span>
            </h1>
            <p className="text-justify mt-4 indent-10 capitalize ">
              Our mission is simple: to make your movie search as easy and
              enjoyable as possible. With an extensive, constantly updated
              database, we provide detailed information about movies, including
              reviews, ratings, trailers, cast and crew, and more. You can
              search by title, genre, actor, director, or even by mood, so
              you’ll always find something that suits your taste.
            </p>
            <p className="text-justify mt-4 indent-10 capitalize ">
              At &nbsp;
              <span className="text-white font-medium text-lg">movieSCAPE</span>
              , we believe that a great movie experience should be just a click
              away. Our intuitive search feature ensures you spend less time
              searching and more time enjoying your next cinematic adventure.
            </p>
          </div>

          <div>
            <h1 className="bg-[rgb(0,0,0)] sticky top-[85px] text-xl  font-medium  text-white flex items-center border-t pt-3 border-[#00C2FF]">
              <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
              Privacy Policy
              <span className="text-3xl">&nbsp; &gt;</span>
            </h1>
            <ul className="list-disc pl-4">
              <li>
                <p className="text-justify mt-4  capitalize">
                  At &nbsp;
                  <span className="text-white font-medium text-lg">
                    movieSCAPE
                  </span>
                  , your privacy is our priority. We collect minimal personal
                  data to enhance your browsing experience and ensure relevant
                  movie recommendations. Any information you provide, such as
                  search preferences, is securely stored and never shared with
                  third parties without your consent.
                </p>
              </li>
              <li>
                <p className="text-justify mt-4  capitalize">
                  We use cookies to improve site functionality and offer
                  personalized content. You can manage cookie settings in your
                  browser at any time.
                </p>
              </li>
              <li>
                <p className="text-justify mt-4  capitalize">
                  By using our website, you agree to our privacy practices. For
                  any questions or concerns, feel free to contact us.
                </p>
              </li>
              <li>
                <p className="text-justify mt-4  capitalize">
                  Your trust matters to us!
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="bg-[rgb(0,0,0)] sticky top-[85px] text-xl   font-medium  text-white flex items-center border-t pt-3 border-[#00C2FF]">
              <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
              Terms & Conditions
              <span className="text-3xl">&nbsp; &gt;</span>
            </h1>
            <ul className="list-disc pl-4">
              <li>
                <p className="text-justify mt-4  capitalize">
                  By using &nbsp;
                  <span className="text-white font-medium text-lg">
                    movieSCAPE
                  </span>
                  , ou agree to comply with our terms of service. Our website is
                  intended for personal, non-commercial use. We do not guarantee
                  the accuracy or availability of movie information, and are not
                  responsible for any third-party content linked on the site.
                </p>
              </li>
              <li>
                <p className="text-justify mt-4  capitalize">
                  We reserve the right to modify or discontinue features at any
                  time. You agree not to misuse the site, including engaging in
                  activities that may disrupt or harm the website's
                  functionality.
                </p>
              </li>
              <li>
                <p className="text-justify mt-4  capitalize">
                  We respect your privacy and adhere to our privacy policy
                  regarding personal data. By accessing and using our site, you
                  acknowledge and accept these terms.
                </p>
              </li>
            </ul>
          </div>
          <p className="text-lg w-[60%] capitalize text-justify sm:text-center font-medium text-[#00C2FF]">
            Join our community of movie enthusiasts today, and let's explore the
            world of film together!
          </p>
        </div>
      </div>
    </section>
  );
};
