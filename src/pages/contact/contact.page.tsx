import ContactForm from "./components/contact-form.component";


const Contact = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col md:flex-row ">
      <div className="md:w-1/2 h-full flex flex-col text-left px-6 space-y-6">
        <div className="text-5xl md:text-9xl font-extrabold tracking-wider text-center">THANKS</div>

        <p className="mt-6 md:mt-10 text-2xl md:text-4xl lg:text-5xl text-red-500 space-y-2 text-center">SEE YOU NEXT TIME          </p>

        <ContactForm />
      </div>

      <div className="w-full md:w-1/2 h-full flex items-center justify-center mt-6 md:mt-0 overflow-hidden">
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
