import { Routes, Route } from "react-router-dom";
import { Home } from "pages";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route patth="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
