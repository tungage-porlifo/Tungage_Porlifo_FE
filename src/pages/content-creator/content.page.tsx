

import listSocialMenu from "@/constants/menu/listSocial.menu";
import SlideComponent from "./components/slide.component";

const Content = () => {
  return (
    <section className="flex flex-row w-auto justify-between pt-12 mx-auto">
      <div className="w-1/2 flex flex-col px-6 space-y-6 text-white text-right">
        <p className="lg:text-5xl text-center md:text-3xl text-2xl font-extrabold tracking-wider">
          CONTENT CREATOR
        </p>
        <p className="lg:text-3xl text-center text-red-500 md:text-xl text-sm font-extrabold tracking-wider">
          1 MILLION FOLLOWERS
        </p>
        <div>
          <div className="flex items-center justify-center space-x-5 mt-6">
            {listSocialMenu.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-slate-100 underline w-8 h-8"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <SlideComponent />
        </div>
      </div>
      <div className="justify-center items-start flex md:w-1/2 md:justify-center md:items-end">
        <img
          src="/images/Dic1.jpg"
          alt=""
          className="md:w-4/5 w-3/4 items-center"
        />
      </div>
    </section>
  );
};

export default Content;
