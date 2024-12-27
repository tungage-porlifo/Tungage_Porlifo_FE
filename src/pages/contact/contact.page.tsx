import { MAIL_TO } from "@/constants/directions/contact-direct.direction";
import listSocialMenu from "@/constants/menu/listSocial.menu";

const Contact = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col md:flex-row items-center justify-center text-center">
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-left px-6 space-y-6">
        <div className="text-5xl md:text-9xl font-extrabold tracking-wider">THANKS</div>

        <div className="mt-6 md:mt-10 text-2xl md:text-4xl lg:text-5xl text-red-500 space-y-2">
          <p>SEE YOU NEXT TIME
          </p>
        </div>

        <div className="mt-6 md:mt-10 text-2xl md:text-2xl lg:text-5xl space-y-2">

          <a
            href={`${MAIL_TO}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-slate-100 underline-none"
          >
            {listSocialMenu.find(social => social.title === "Gmail")?.icon} thanhtung2888@gmail.com
          </a>
        </div>
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
      </div>

      <div className="w-full md:w-1/2 h-full flex items-center justify-center mt-6 md:mt-0 relative overflow-hidden">
        <img
          src="/images/Contact.jpg"
          alt="TUNGAGE Portfolio"
          className="w-full h-full object-cover bg-black"
        />
      </div>
    </section >
  );
};

export default Contact;
