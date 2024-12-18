import FreeStyle from "@/components/FreeStyle";
import {
  CONTACT_PAGE,
  DIRECTOR_PAGE,
  FREESTYLE_FOOTBALL_PAGE,
  GALLERY_PAGE,
  HOME_PAGE,
} from "@/constants/directions/link.direction";
import HomePage from "@/pages/home/home.page";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={HOME_PAGE} replace />} />
      <Route path={HOME_PAGE} element={<HomePage />} />
      <Route
        path={FREESTYLE_FOOTBALL_PAGE}
        element={<FreeStyle />}
      />
      <Route
        path={DIRECTOR_PAGE}
      // element={<Login />}
      />
      <Route
        path={GALLERY_PAGE}
      // element={<Login />}
      />
      <Route
        path={CONTACT_PAGE}
      // element={<Login />}
      />
    </Routes>
  );
};

export default AppRouter;
