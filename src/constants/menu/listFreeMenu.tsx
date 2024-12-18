import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { faTrophy, faGavel } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";


interface IFreestyleMenu {
  title: string;
  icon: ReactNode;
  content: string;
}
const ICON_SIZE = 'w-10 h-10 py-2';

const listFreestyleMenu: IFreestyleMenu[] = [
  {
    title: "THÀNH TÍCH:",
    content: "Vô địch Việt Nam | Top 1 Châu Á | Top 4 Thế Giới",
    icon: < FontAwesomeIcon icon={faTrophy} className={ICON_SIZE} />,

  },
  {
    title: "GIÁM KHẢO:",
    content: "Giải vô địch Châu Á 2018 -2024 | Giải vô địch Thế Giới 2020 + 2021",
    icon: < FontAwesomeIcon icon={faGavel} className={ICON_SIZE} />,

  },
  {
    title: "Đại sứ thương hiệu:",
    content: "Bundesliga Global 2019-2021 | adidas Vietnam 2016-2022 | Tiger Beer Global 2019 | Chervolet US 2017",
    icon: <FontAwesomeIcon icon={faHandshake} className={ICON_SIZE} />
  },
];
export default listFreestyleMenu;