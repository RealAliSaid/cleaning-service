import ProjectImage19 from "../../../assets/19.png";
import { BackgroundIcon1 } from "../../../assets/svg";

const AboutHero = () => {
  return (
    <div className="relative ">
      <BackgroundIcon1 position="top-[50%] right-[5%]" />
      <BackgroundIcon1 position="top-[10%] left-[5%]" />
      <div className="flex flex-col items-center md:h-[70vh] px-4 md:px-20 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col max-w-xl">
            <h1 className="text-[30px] md:text-[60px] mb-5">Über uns</h1>
            <p className="text-[14px] md:text-lg text-white font-semibold text-xl mb-3 md:mb-0">
              Wir haben es uns zur Aufgabe gemacht, außergewöhnliche
              Reinigungsdienstleistungen anzubieten für alle Arten von Gebäuden.
              Unsere Mission ist es, saubere, gesunde und einladende Umgebungen.
            </p>
          </div>
          <img
            src={
              "https://cdn.pixabay.com/photo/2017/06/27/11/48/team-spirit-2447163_1280.jpg"
            }
            className="w-[500px] h-[500px] rounded-xl mb-12 md:mb-0 z-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
