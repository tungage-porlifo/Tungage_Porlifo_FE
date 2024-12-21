import listFreestyleMenu from "@/constants/menu/listFreeMenu";

const FreeStyle = () => {
  return (
    <div>
      {/* Pro Athlete */}
      <section className="bg-black text-white">
        <div className="my-10 mx-8">
          <h1 className="border-b-[4px] border-[#dc143c] text-white text-3xl font-bold inline-block">
            Pro Athlete
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4">
          <div className="w-full h-full lg:w-3/4 flex flex-col items-center justify-center overflow-hidden">
            <img
              src="/public/images/Freestyle1.jpg"
              className="w-[85%] h-[85%] object-cover bg-black"
              alt="Freestyle Image"
            />
          </div>
          <div className="w-full h-full md:w-3/4 flex flex-col items-center justify-center text-left">
            <div className="lg:text-4xl md:text-3xl text-2xl font-extrabold tracking-wider">
              BÓNG ĐÁ NGHỆ THUẬT
            </div>
            <div className="lg:mt-8 lg:text-3xl md:text-2xl text-xl text-red-500">
              <p>| Vận động viên</p>
            </div>
            <div className="flex flex-row mx-12">
              <div className="mt-10 md:mt-10 text-2xl md:text-4xl lg:text-5xl flex flex-col gap-4">
                {listFreestyleMenu.map((freestyle, index) => (
                  <div key={index}>
                    <div className="flex flex-row gap-3">
                      <div className="items-stretch">{freestyle.icon}</div>
                      <span className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">
                        <strong className="text-red-500">
                          {freestyle.title}
                        </strong>{" "}
                        {freestyle.content}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Arena */}
      <section className="bg-black text-white">
        <div className="mt-20 my-10 mx-8">
          <h1 className="border-b-[4px] border-[#dc143c] text-white text-3xl font-bold inline-block">
            World Arena
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-6 mx-8">
          <div className="w-full h-full">
            <div className="mb-10">
              <div className="lg:text-4xl md:text-3xl text-2xl font-extrabold tracking-wider">
                ĐẤU TRƯỜNG THẾ GIỚI
              </div>

              <div className="text-white lg:mt-8 lg:text-3xl md:text-2xl text-xl">
                Tungage cũng là một trong những số ít những người có cơ hội được
                hợp tác và làm việc tại nhiều Quốc gia trên thế giới, song song
                với đó là các siêu sao bóng đá thế giới: Ronaldinho, Deco, Owen,
                Beckham,...
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <img
                src="/public/images/Owen.png"
                alt=""
                className="w-full object-cover overflow-hidden"
              />

              <img
                src="/public/images/Ronaldinho.png"
                alt=""
                className="w-full object-cover overflow-hidden"
              />
            </div>

            <div className="mt-10">
              <img
                src="/public/images/Deco.png"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>

          <div className="w-full h-full flex flex-col items-center justify-center mt-10 lg:mt-0 gap-8">
            <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
              <img
                src="/public/images/Ronaldinho1.png"
                className="w-full object-cover bg-black"
                alt="Freestyle Image"
              />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
              <img
                src="/public/images/Compare.png"
                alt=""
                className="w-full mt-10 lg:mt-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeStyle;