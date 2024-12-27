import {
  CONTACT_PAGE,
  DIRECTOR_PAGE,
  FREESTYLE_FOOTBALL_PAGE,
  GALLERY_PAGE,
  HOME_PAGE,
} from "@/constants/directions/link.direction";
import HomePage from "@/pages/home/home.page";
import { Navigate, Route, Routes } from "react-router-dom";
import FreestylePage from "@/pages/freestyle/freestyle.page";
import Director from "@/pages/director/director.page";
import Contact from "@/pages/contact/contact.page";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={HOME_PAGE} replace />} />
      <Route path={HOME_PAGE} element={<HomePage />} />
      <Route
        path={FREESTYLE_FOOTBALL_PAGE}
        element={<FreestylePage />}
      />
      <Route
        path={DIRECTOR_PAGE}
        element={<Director />}
      />
      <Route
        path={GALLERY_PAGE}
      // element={<Login />}
      />
      <Route
        path={CONTACT_PAGE}
        element={<Contact />}
      />
    </Routes>
  );
};

export default AppRouter;
