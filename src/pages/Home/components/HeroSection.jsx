import { BackgroundIcon1 } from "../../../assets/svg";

const HeroSection = () => {
  return (
    <div className="relative ">
      <BackgroundIcon1 position="top-[50%] right-[5%]" />
      <BackgroundIcon1 position="top-[10%] left-[5%]" />
      <div className="flex flex-col items-center h-[100vh] px-4 md:px-20 ">
        <div className="flex flex-col justify-center items-center flex-1 max-w-4xl">
          <h1 className="text-[30px] md:text-[60px] text-center mb-5">
            Vertrauenswürdige und zuverlässige Reinigungsdienste
          </h1>
          <p className="text-[14px] md:text-lg text-center text-white font-semibold text-xl">
            Wir liefern erstklassige Gebäudereinigungsdienstleistungen, die auf
            Ihre Bedürfnisse zugeschnitten sind. Unser Expertenteam sorgt für
            eine makellose Umgebung für kommerzielle Zwecke Gebäude, Büroflächen
            und Wohnimmobilien.
          </p>
          <a href="tel:+491725724352">
            <div className="cursor-pointer flex justify-center items-center border-[2px] border-white rounded-2xl p-4  bg-[#AAC52715] font-semibold mt-5">
              Ruf uns jetzt an
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
