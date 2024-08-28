import ProjectImage19 from "../../../assets/19.png";
import { BackgroundIcon1 } from "../../../assets/svg";

const OurProjects = () => {
  return (
    <div className="relative ">
      <BackgroundIcon1 position="top-[50%] right-[5%]" />
      <BackgroundIcon1 position="top-[10%] left-[5%]" />
      <div className="flex flex-col justify-center items-center mt-12 px-4 md:px-20">
        <h1 className="text-[30px] md:text-[60px] text-center">
          Unsere Projekte
        </h1>
        <div className="lg:h-[70vh] w-full flex flex-col lg:flex-row gap-2 my-12">
          <img
            src={
              "https://images.unsplash.com/photo-1700864520663-87dbc87380db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb29yaW5nfGVufDB8fDB8fHwy"
            }
            className="z-10 w-full lg:w-1/3 h-full"
          />
          <div className="flex flex-col w-full h-full gap-2">
            <div className="flex flex-col lg:flex-row h-1/2  w-full gap-2">
              <img
                src={
                  "https://images.unsplash.com/photo-1525273177952-67455d25871f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbmRvd3xlbnwwfHwwfHx8Mg%3D%3D"
                }
                className="z-10 w-full lg:w-1/2 h-full"
              />
              <img
                src={
                  "https://images.unsplash.com/photo-1706629503586-2731f65587ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvb3Jpbmd8ZW58MHx8MHx8fDI%3D"
                }
                className="z-10 w-full h-full"
              />
            </div>
            <img
              src={
                "https://images.unsplash.com/photo-1676474987690-2fc0582a07ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb29yaW5nfGVufDB8fDB8fHwy"
              }
              className="z-10 w-full h-1/2 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
