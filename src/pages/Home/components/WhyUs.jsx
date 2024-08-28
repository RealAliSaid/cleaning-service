import { BackgroundIcon2 } from "../../../assets/svg";

const CheckIcon = () => (
  <svg viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M146.82 3.84961C144.615 3.84961 140.556 4.27157 134.631 5.09855C128.707 5.93015 124.877 6.73249 123.151 7.49325C121.418 8.25401 118.287 10.8936 113.767 15.3827C109.243 19.8872 102.679 28.2016 94.0969 40.3183C85.5037 52.4474 77.4864 65.2509 70.0344 78.7413C62.4757 92.4431 55.5125 106.465 49.1643 120.768C43.1906 110.539 37.7929 103.605 32.9435 99.9579C28.1063 96.2958 24.0253 94.4694 20.7066 94.4694C18.1164 94.4694 14.87 95.8507 10.9538 98.6012C7.04223 101.361 5.08643 104.06 5.08643 106.723C5.08643 108.651 6.88053 111.508 10.4703 115.286C17.5789 122.796 23.8713 130.761 29.3183 139.193C32.6447 144.234 34.8562 147.33 35.9588 148.457C37.0553 149.575 40.3971 150.15 45.9842 150.15C53.7597 150.15 58.3766 149.153 59.8442 147.147C61.301 145.217 63.9945 139.462 67.923 129.868C77.6297 105.847 89.6986 82.9086 104.122 61.0683C118.56 39.2357 131.784 22.7208 143.822 11.5327C146.22 9.40747 147.661 8.02917 148.168 7.39315C148.661 6.75405 148.913 6.11187 148.913 5.44351C148.913 4.38707 148.212 3.84961 146.82 3.84961Z"
      fill="#09B285"
    />
  </svg>
);

const items = [
  "Zuverlässig und vertrauenswürdig",
  "Wettbewerbsfähige Preisanpassung",
  "Flexible Terminplanung",
];

const WhyUs = () => {
  return (
    <div className="relative">
      <BackgroundIcon2 position="top-[10%] right-[5%]" />
      <BackgroundIcon2 position="top-[50%] left-[5%]" />
      <div className="flex flex-col justify-center items-center mt-12 px-4 md:px-20">
        <h1 className="text-[30px] md:text-[60px] text-center">
          Warum uns wählen
        </h1>
        <div className="flex flex-col md:flex-row items-center w-full justify-center my-12">
          <img
            src={
              "https://cdn.pixabay.com/photo/2021/01/18/16/56/blinds-5928692_1280.jpg"
            }
            className="z-10 object-cover h-[400px] w-[400px] rounded-md md:mr-12"
            alt="19"
          />
          <div className="p-6 ">
            <div className="flex flex-col space-y-6">
              {items.map((item) => (
                <div className="flex items-center space-x-2">
                  <div className="w-[20px] h-[20px]">
                    <CheckIcon />
                  </div>
                  <span className="text-xl font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[14px] font-semibold text-lg mt-8">
              Kontaktieren Sie uns noch heute, um Ihren ersten Reinigungsservice
              zu vereinbaren Erleben Sie den Unterschied!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
