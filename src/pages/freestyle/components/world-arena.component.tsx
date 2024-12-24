const WorldArenaComponent = () => {
  return (
    <section className="bg-black text-white">
      <div className="mt-20 my-10 mx-8">
        <h1 className="border-b-[4px] border-[#dc143c] text-white text-3xl font-bold inline-block">
          World Arena
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center text-center gap-6 mx-8">
        <div className="w-full h-full">
          <div className="mb-10">
            <div className="lg:text-4xl md:text-3xl text-2xl font-extrabold tracking-wider">
              WORLD ARENA
            </div>

            <div className="text-white lg:mt-8 lg:text-3xl md:text-2xl text-xl">
              Tungage is also one of the few people who have the opportunity to cooperate and work in many countries around the world, along with world football superstars: Ronaldinho, Deco, Owen, Beckham,...
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center justify-around md:justify-between">
            <div>
              <img
                src="/images/Deco.png"
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-4">
              <img
                src="/images/Owen.png"
                alt=""
                className="w-full object-cover overflow-hidden"
              />

              <img
                src="/images/Ronaldinho.png"
                alt=""
                className="w-full object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center mt-10 lg:mt-0 gap-8">
          <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
            <img
              src="/images/Ronaldinho1.png"
              className="w-full object-cover bg-black"
              alt="Freestyle Image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default WorldArenaComponent;