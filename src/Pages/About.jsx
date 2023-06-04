import enkoc from "../assets/enkoc-photo/Diğer/enkoc.jpg";

const About = () => {
  return (
    <div className="bg-black px-4 font-second flex flex-col md:flex-row text-center py-8 md:py-24 text-white ">
      <div className="md:w-1/3 flex md:flex-row flex-col justify-evenly ">
        <div className="">
          <h1 className=" text-6xl">Hakkımda</h1>
        </div>
      </div>
      <div className="md:w-2/3  pb-24 ">
        <div className="text-lg">
          <p className="md:px-24">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id odio ducimus placeat eaque
            saepe deserunt ipsa maiores quas, nulla nihil
            odit corrupti debitis quae consectetur est vitae
            iste quos laudantium. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Esse, magnam?
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ex aliquam unde repudiandae,
            beatae eius commodi, iste a odit sequi soluta
            eos quam doloribus at, voluptatum harum maiores
            nulla ipsam nam!
          </p>
        </div>
        <div className="flex flex-col  md:flex-row items-center mx-auto">
          <div className="md:w-1/2 md:pl-24 text-sm">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore, quibusdam corrupti
            maiores illum eligendi optio molestiae id totam
            expedita, neque reprehenderit fuga quis quam
            quisquam magni sed? Velit neque corrupti rem
            dolor quod delectus, magni blanditiis laborum
            error optio, nulla asperiores maxime voluptas
            eos? Quos reiciendis tenetur rerum asperiores,
            nostrum harum rem deleniti quae magni
            praesentium adipisci, provident itaque ex.
          </div>

          <div className=" md:w-1/2 text-right  justify-items-end mx-auto">
            <img src={enkoc} alt="" />
          </div>
        </div>
        <button className="ml-24 p-2 rounded-xl bg-white hover:bg-gray-900  text-black hover:text-white" >Contact me yigidim</button>
      </div>
    </div>
  );
};

export default About;
