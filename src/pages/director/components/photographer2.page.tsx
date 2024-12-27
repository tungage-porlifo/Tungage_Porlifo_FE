const Photographer2 = () => {
  return (
    <section className="flex flex-col w-auto justify-between pt-20 md:flex-row">
      <div className="my-10 mx-8">
        <h1 className="border-b-[4px] border-[#dc143c] text-white text-3xl font-bold inline-block">
          Photographer
        </h1>
        <div>
          <div className="flex flex-row items-start justify-start gap-4 pt-5">
            <img src="/images/Pho1.jpg" alt="" className="w-1/4" />
            <img src="/images/Pho2.jpg" alt="" className="w-8/12" />
          </div>
          <div className="flex flex-col md:flex-row flex-1 items-start justify-start gap-2 pt-5">
            <img src="/images/Pho31.jpg" alt="" className="w-1/3 h-auto min-h-16" />
            <img src="/images/Pho4.jpg" alt="" className="w-1/3 h-auto min-h-16" />
            <img src="/images/Pho5.jpg" alt="" className="w-1/4 h-auto min-h-16" />
          </div>
        </div>
      </div>
      <div className="text-white text-left justify-center w-1/2 flex flex-col px-6 space-y-6">
        <p className="text-2xl md:text-4xl font-extrabold">PHOTOGRAPHER</p>
        <p className="text-xl md:text-2xl">With the power of athletics. Tungage is also a sports photographer with extensive experience, having worked on projects for big sports brands in Vietnam.
        </p>
        <div className="flex flex-row items-end space-y-6 pt-10">
          <img src="/images/Pho6.jpg" alt="" />
        </div>
      </div>
    </section>
  );

}
export default Photographer2;