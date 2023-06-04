const services = [
  {
    id: 1,
    title: "Dügün Fotografcılıgı",
    desc: "Here’s a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):",
  },
  {
    id: 2,
    title: "Dügün Fotografcılıgı",
    desc: "Here’s a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):",
  },
  {
    id: 3,
    title: "Dügün Fotografcılıgı",
    desc: "Here’s a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):",
  },
  {
    id: 4,
    title: "Dügün Fotografcılıgı",
    desc: "Here’s a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):",
  },
];

const Services = () => {
  return (
    <div className="bg-black font-second text-white min-h-screen">
          <div>
              <h1 className="text-7xl ml-24 py-12" >Neler Yapıyorum</h1>
        {services.map((service) => {
          const { id, title, desc } = service;
          return (
            <div key={id}>
              <div className="border-t px-8 md:px-0 space-y-4 items-center  flex flex-col md:flex-row" >
                <p className="md:w-1/4 ml-24 mt-8 md:mt-0 text-xxl " > {id} </p>
                <h2 className="md:w-1/2 text-2xl" >{title}</h2>
                <p className="mr-24 pb-12 md:pb-0 md:w-1/4 text-sm py-4" >{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
