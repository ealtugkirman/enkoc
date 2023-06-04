import Img1 from "../assets/enkoc-photo/Doğum/DSCF0033.jpg";
// import Img2 from "../assets/enkoc-photo/Sokak/DSCF0072.jpg";
// import Img3 from "../assets/enkoc-photo/Manzara/www (242).jpg";
// import Img4 from "../assets/enkoc-photo/Diğer/DJI_0494-2.jpg";
// import Img5 from "../assets/enkoc-photo/Diğer/DJI_0609.jpg";
// import Img6 from "../assets/enkoc-photo/Diğer/enkoc.jpg";
import Img7 from "../assets/enkoc-photo/Doğum/DSCF0011.jpg";
// import Img8 from "../assets/enkoc-photo/Doğum/DSCF0085-2.jpg";
// import Img9 from "../assets/enkoc-photo/Sokak/DSCF0097.jpg";

const BestWork = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <h3 className="text-6xl font-second ml-12">
        Some of my work
      </h3>
      <div>
        <div className="flex md:absolute mb-12 md:mb-0 md:ml-32 mt-12 md:mt-24 w-4/5 md:w-2/5 ">
          <img src={Img1} alt="" />
          <p className="font-second mt-4  text-xs">
            Lorem ipsum dolor sit.
          </p>
        </div>
        <div className=" flex md:absolute  right-10 w-4/5 md:w-2/5 ">
          <img src={Img7} alt="" />
          <p className="font-second mt-4 text-xs">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestWork;
