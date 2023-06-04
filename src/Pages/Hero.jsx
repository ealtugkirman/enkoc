import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="bg-site font-first bg-cover bg-no-repeat overflow-hidden" >
      <div className=" min-h-screen py-12 md:py-6 lg:py-12 justify-between relative z-10 flex text-black">
        {/* Left */}
        <div className="">
          <h1 className="text-2xl  md:text-4xl lg:text-6xl   ml-12 md:ml-24 lg:ml-40">
            Enes Koç.
          </h1>
          <p className="text-md  md:text-lg  lg:text-xl leading-10 ml-12 md:ml-24 lg:ml-40 ">
            <TypeAnimation
              sequence={[
                "Capturing Moments",
                2000,
                "Framing Stories",
                2000,
              ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </p>
        </div>
        {/* Right */}
        <div className="flex text-sm   md:text-xl lg:text-2xl mr-10 md:mr-20  lg:mr-32  ">
          <ul className=" ">
            <li className="cursor-pointer hover:-ml-2 hover:underline hover:border-b-2  duration-700 ">
              Ana Sayfa
            </li>
            <li className="cursor-pointer hover:-ml-2 hover:underline hover:border-b-2  duration-700 ">
              Neler Yapıyorum
            </li>
            <li className="cursor-pointer hover:-ml-2 hover:underline hover:border-b-2  duration-700 ">
              Portfolyo
            </li>
            <li className="cursor-pointer hover:-ml-2 hover:underline hover:border-b-2  duration-700 ">
              İletişim
            </li>
          </ul>
        </div>
      </div>
       <div className="z-20 font-second absolute  bottom-64 md:bottom-48 lg:bottom-60 left-36 md:left-96 lg:left-96  text-5xl md:text-6xl lg:text-7xl text-white">
  <h1>Photographer</h1>
</div>
<div className="z-20 font-second absolute bottom-52 md:bottom-40 lg:bottom-48  left-36 md:left-96 lg:left-96  text-5xl md:text-6xl lg:text-7xl text-white">
  <h1>Artist</h1>
</div>

    </div>
  );
};

export default Hero;
