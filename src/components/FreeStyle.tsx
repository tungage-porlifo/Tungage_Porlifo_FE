import listFreestyleMenu from "@/constants/menu/listFreeMenu";

const FreeStyle = () => {
  return (
    <div>
      <section className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center text-center pb-10 md:pt-0">
        <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-start relative pt-10 pl-10">
          <h1 className="border-b-[4px] border-[#dc143c] text-white text-3xl font-bold md:mt-0 mt-8">
            Pro Athlete
          </h1>
          <div className="w-full h-full flex items-center justify-start relative overflow-hidden">
            <img
              src="/public/images/Freestyle1.jpg"
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
      <section className="bg-black text-white min-h-screen flex flex-col md:flex-row items-start justify-start text-center pb-20 ">
        <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-start relative pt-10 pl-10">
          <h1 className="border-b-[4px] border-[#dc143c] text-white text-3xl font-bold md:mt-0 mt-8">
            World Arena
          </h1>
          <div className="text-white text-3xl text-center sm:text-6xl uppercase flex flex-cols items-start justify-start overflow-hidden pt-5">
            Đấu Trường Thế Giới
          </div>

          <div className="text-white text-xl text-wrap sm:text-2xl flex items-start overflow-hidden pt-3 pr-5">
            Tungage cũng là một trong những số ít những người có cơ hội được hợp tác và làm việc tại nhiều Quốc gia trên thế giới, song song với đó là các siêu sao bóng đá thế giới: Ronaldinho, Deco, Owen, Beckham,...
          </div>

          <div className="grid grid-rows-3 grid-flow-col gap-2 pt-4 ">
            <img src="/public/images/Deco.png" alt="" className="row-span-4 col-span-1" />
            <img src="/public/images/Owen.png" alt="" className="col-span-1" />
            <img src="/public/images/Ronaldinho.png" alt="" className="col-span-1 row-span-2 w-full" />
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-center text-center space-y-6 pt-10">
          <img src="/public/images/Compare.png" alt="" className="px-5 h-[80%] w[40%]" />
        </div>
        <div className=" flex items-center justify-center relative overflow-hidden pt-10">
          <img
            src="/public/images/Ronaldinho1.png"
            className="object-cover bg-black"
            alt="Freestyle Image"
          />
        </div>
      </section>
    </div>
  );
};

export default FreeStyle;
