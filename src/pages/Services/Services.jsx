import PressureWash from "../../assets/pw.png";
import WindowCleaning from "../../assets/window.jpeg";
import { BackgroundIcon1 } from "../../assets/svg";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsZWFuaW5nfGVufDB8fDB8fHwy",
    title: "Reinigung",
    details:
      "Professionelle Reinigung für Treppenhäuser, Büros, Praxen und Wohnungen. Ob regelmäßige Reinigung oder Endreinigung, wir sorgen für strahlende Sauberkeit.",
  },
  {
    image: PressureWash,
    title: "Hochdruckreiniger Service",
    details:
      "Effektive Hochdruckreinigung für Terrassen, Einfahrten und Wintergärten. Entfernen Sie hartnäckigen Schmutz und lassen Sie Ihre Außenflächen wie neu aussehen.",
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
  {
    image:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDI%3D",
    title: "Hausmeistertätigkeiten",
    details:
      "Umfassende Hausmeisterdienste für Ihr Gebäude. Von kleinen Reparaturen bis zur Wartung sorgen wir für den reibungslosen Betrieb und die Instandhaltung Ihrer Immobilie.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621460248083-6271cc4437a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVuaW5nfGVufDB8fDB8fHwy",
    title: "Gartenarbeit",
    details:
      "Pflege und Gestaltung Ihres Gartens. Ob Rasenmähen, Heckenschnitt oder Pflanzarbeiten – wir bringen Ihre Grünflächen zum Erblühen.",
  },
];

const Services = () => {
  return (
    <div className="relative ">
      <BackgroundIcon1 position="top-[50%] right-[5%]" />
      <BackgroundIcon1 position="top-[10%] left-[5%]" />
      <div className="flex flex-col justify-between w-full items-center mt-12 px-4 md:px-20">
        <h1 className="text-[30px] md:text-[60px] text-center">
          Unsere Dienstleistungen
        </h1>
        <div className="grid sm:grid-cols-3 gap-12 mt-12 px-4 md:px-0 w-full">
          {services.map((service) => (
            <div className="flex flex-col">
              <img
                src={service.image}
                className="z-10 object-cover h-[350px] w-[350px] rounded-md shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                alt="19"
              />
              <p className="mt-2 font-semibold">{service.title}</p>
              <span>{service.details}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
