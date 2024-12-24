import listFreestyleMenu from "@/constants/menu/listFreeMenu"

const ProAthleteComponent = () => {
  return (
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
          <div className="lg:text-4xl md:text-4xl text-2xl font-extrabold tracking-wider">
            FOOTBALL FREESTYLE
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
  )
}
export default ProAthleteComponent;