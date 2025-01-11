import { videoDirection } from "@/constants/directions/video.direction"
import { Link } from "react-router-dom"

const DirectorMV = () => {
  return (
    <section className="flex flex-row w-auto justify-between pt-12 mx-auto">
      <div className=" w-1/2 flex flex-col px-6 space-y-6  text-white text-right">
        <p className="lg:text-4xl md:text-3xl text- 2xl font-extrabold tracking-wider">
          DIRECTOR
        </p>
        <p className="text-white lg:mt-8 lg:text-3xl md:text-2xl text-sm justify-end">
          With 15 years' expertise in the film industry.Tungage is the director of huge brand advertisements and million-view MVs, such as: Em Iu, Choi Nhu Tui My,...
        </p>
        <div className="md:w-full w-64 flex flex-col items-end space-y-6 pt-10 md:mt-10 md:flex-col text-2xl md:text-2xl lg:text-5xl md:gap-3">
          {videoDirection.map((video, index) => (
            <Link
              key={index}
              to={video.videoDirection}
              className="w-full flex flex-row items-center"
              target="_blank"
            >
              <div className="text-lg bg-gray-300  text-red-500 font-extrabold rounded-lg items-end w-32">{video.totalViews}</div>
              <img src={video.introductionImg}
                alt=""
                className="w-full flex justify-center items-center" />
            </Link>
          ))}

        </div>
      </div>
      <div className=" justify-center items-start flex md:w-1/2 md:justify-center md:items-end ">
        <img src="/images/Dic1.jpg" alt="" className="md:w-4/5 w-3/4 items-center" />
      </div>
    </section>

  )
}

export default DirectorMV