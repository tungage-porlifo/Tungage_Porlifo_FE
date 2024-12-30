type ImgDataType = {
  src: string;
  alt: string;
  className: string;
}
let imgSize = "w-1/3 min-h-16"
const imgData: ImgDataType[] =
  [

    {
      src: "/images/Pho31.jpg",
      alt: "",
      className: imgSize
    },
    {
      src: "/images/Pho4.jpg",
      alt: "",
      className: imgSize
    },
    {
      src: "/images/Pho5.jpg",
      alt: "",
      className: imgSize
    },

  ]
const Photographer2 = () => {

  return (
    <section className="flex flex-col w-auto justify-between pt-20 md:flex-row">
      <div className="my-10 mx-8">
        <h1 className="border-b-[4px] border-[#dc143c] text-white text-3xl font-bold inline-block">
          Photographer
        </h1>
        <div className="flex flex-col gap-4 pt-5">
          <div className="flex flex-row items-center justify-between gap-2 pt-5 w-full overflow-hidden md:gap-14">
            <img
              src="/images/Pho1.jpg"
              alt=""
              className="w-1/3 max-w-full h-auto md:w-1/4"
            />
            <img
              src="/images/Pho2.jpg"
              alt=""
              className="w-2/3 max-w-full h-auto md:w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-2 pt-5 h-auto">
            {imgData.map((img, index) => (
              <img key={index} src={img.src} alt={img.alt} className={img.className} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-white text-left justify-center w-full md:w-1/2 flex flex-col px-6 space-y-6">
        <p className="text-2xl md:text-4xl font-extrabold w-full">PHOTOGRAPHER</p>
        <p className="text-xl md:text-2xl w-full">
          With the power of athletics. Tungage is also a sports photographer with extensive experience, having worked on projects for big sports brands in Vietnam.
        </p>
        <div className="flex flex-row items-end space-y-6 pt-10">
          <img src="/images/Pho6.jpg" alt="" />
        </div>
      </div>

    </section>
  );

}
export default Photographer2;