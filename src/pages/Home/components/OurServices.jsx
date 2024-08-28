import WindowCleaning from "../../../assets/window.jpeg";
import { BackgroundIcon1 } from "../../../assets/svg";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsZWFuaW5nfGVufDB8fDB8fHwy",
    title: "Reinigung",
    details:
      "Professionelle Reinigung für Treppenhäuser, Büros, Praxen und Wohnungen. Ob regelmäßige Reinigung oder Endreinigung, wir sorgen für strahlende Sauberkeit.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1635359800970-90b35af94a4a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dachrinnenreinigung",
    details:
      "Verhindern Sie Wasserschäden durch regelmäßige Dachrinnenreinigung. Wir sorgen dafür, dass Ihre Dachrinnen frei von Laub und Ablagerungen bleiben.",
  },
  {
    image: WindowCleaning,
    title: "Fensterreinigung",
    details:
      "Kristallklare Fenster für Ihr Zuhause oder Büro. Unser Fensterreinigungsservice bringt Glanz in Ihre Räume und lässt natürliches Licht ungehindert hinein.",
  },
];

const OurServices = () => {
  return (
    <div className="relative ">
      <BackgroundIcon1 position="top-[10%] right-[5%]" />
      <BackgroundIcon1 position="top-[50%] left-[5%]" />
      <div className="flex flex-col justify-center items-center mt-12 px-4 md:px-20">
        <h1 className="text-[30px] md:text-[60px] text-center">
          Unsere Hauptdienstleistungen
        </h1>
        <p className="text-[14px] md:text-lg text-center text-white font-semibold text-xl">
          Wir bieten ein umfassendes Spektrum an Reinigungsdienstleistungen an
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-12 px-4 md:px-0">
          {services.map((service) => (
            <div className="flex flex-col">
              <img
                src={service.image}
                className="z-10 object-cover h-[350px] w-[350px] rounded-md shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                alt="19"
              />
              <p className="mt-2 font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
