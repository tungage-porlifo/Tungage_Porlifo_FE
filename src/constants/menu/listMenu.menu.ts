import { CONTACT_PAGE, DIRECTOR_PAGE, FREESTYLE_FOOTBALL_PAGE, GALLERY_PAGE, HOME_PAGE } from "../directions/link.direction";

interface IMenu {
  title: string;
  href: string;
}

export const listMenu: IMenu[] = [
  {
    title: "Home",
    href: `${HOME_PAGE}`,
  },
  {
    title: "Freestyle",
    href: `${FREESTYLE_FOOTBALL_PAGE}`,
  },
  {
    title: "Director",
    href: `${DIRECTOR_PAGE}`,
  },
  {
    title: "Gallery",
    href: `${GALLERY_PAGE}`,
  },
  {
    title: "Contact",
    href: `${CONTACT_PAGE}`,
  },
];