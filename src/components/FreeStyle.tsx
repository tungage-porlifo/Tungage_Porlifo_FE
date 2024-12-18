import listFreestyleMenu from "@/constants/menu/listFreeMenu";

const FreeStyle = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center text-center pb-20">
      <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-start relative pt-10 pl-10">
        <h1 className="border-b-[4px] border-[#dc143c] text-white text-3xl font-bold md:mt-0 mt-8">
          Pro Athlete
        </h1>
        <div className="w-full h-full flex items-center justify-start relative overflow-hidden">
          <img
            src="/images/Freestyle1.jpg"
            className="w-[80%] h-[90%] object-cover bg-black"
            alt="Freestyle Image"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center text-left px-6 space-y-6">
        <div className="text-5xl md:text-5xl font-extrabold tracking-wider">
          BÓNG ĐÁ NGHỆ THUẬT
        </div>
        <div className="mt-6 md:mt-10 text-2xl md:text-4xl lg:text-5xl text-red-500 space-y-2">
          <p>| Vận động viên</p>
        </div>
        <div className="flex flex-row space-x-5">
          <div className="mt-10 md:mt-10 text-2xl md:text-4xl lg:text-5xl space-y-6">
            {listFreestyleMenu.map((freestyle, index) => (
              <div key={index}>
                <div className="flex flex-row space-x-4 items-center">
                  {freestyle.icon}
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">
                    <strong className="text-red-500">{freestyle.title}</strong> {freestyle.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeStyle;
