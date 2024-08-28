import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import { BackgroundIcon2 } from "../../assets/svg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const EmailIcon = () => (
  <div className="w-[20px] h-[20px]">
    <svg viewBox="0 0 101 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.20278 10.6403C1.83221 7.88231 3.3795 5.41981 5.59125 3.65608C7.803 1.89235 10.5481 0.931939 13.377 0.932129H88.2952C91.1241 0.931939 93.8692 1.89235 96.0809 3.65608C98.2927 5.41981 99.84 7.88231 100.469 10.6403L50.8361 40.9759L1.20278 10.6403ZM0.890625 17.77V62.1216L37.1198 39.9083L0.890625 17.77ZM43.1008 43.5731L2.08307 68.7144C3.09651 70.8513 4.69601 72.6565 6.69542 73.9198C8.69483 75.1831 11.0119 75.8526 13.377 75.8503H88.2952C90.6599 75.8509 92.9761 75.1799 94.9744 73.9155C96.9726 72.6511 98.5708 70.8453 99.5829 68.7081L58.5652 43.5668L50.8361 48.2929L43.1008 43.5668V43.5731ZM64.5524 39.9146L100.782 62.1216V17.77L64.5524 39.9083V39.9146Z"
        fill="black"
      />
    </svg>
  </div>
);

const PhoneIcon = () => (
  <div className="w-[20px] h-[20px]">
    <svg viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.66 3.41775C13.7524 2.327 15.0641 1.48086 16.5083 0.9354C17.9524 0.389944 19.496 0.157629 21.0367 0.25385C22.5775 0.350072 24.0801 0.772632 25.4452 1.49353C26.8103 2.21443 28.0065 3.2172 28.9547 4.43539L40.1612 18.8322C42.2153 21.473 42.9395 24.913 42.1278 28.1595L38.7128 41.8321C38.5363 42.5402 38.5458 43.282 38.7405 43.9854C38.9352 44.6888 39.3085 45.3299 39.8241 45.8464L55.1636 61.1859C55.6808 61.7026 56.3229 62.0765 57.0275 62.2712C57.7321 62.466 58.4751 62.4749 59.1842 62.2972L72.8506 58.8822C74.4526 58.4816 76.1248 58.4505 77.7407 58.7912C79.3566 59.1319 80.8739 59.8355 82.1779 60.8488L96.5747 72.0491C101.75 76.0759 102.225 83.7238 97.5923 88.35L91.1368 94.8055C86.5169 99.4254 79.6119 101.454 73.1752 99.1882C56.7006 93.3916 41.7425 83.9601 29.4105 71.5933C17.0445 59.2631 7.61308 44.3072 1.8156 27.8348C-0.444429 21.4044 1.58461 14.4932 6.20456 9.87321L12.66 3.41775Z"
        fill="black"
      />
    </svg>
  </div>
);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Bitte füllen Sie alle Felder aus.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        "service_yj0hzvc",
        "template_8ebxa8p",
        {
          from_name: name,
          message,
          reply_to: email,
        },
        {
          publicKey: "IlI0c5jmpmDc6azJo",
        }
      );
      toast.success("Ihre Nachricht wurde gesendet!");
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err instanceof EmailJSResponseStatus) {
        console.log(err);
        toast.error("Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten");
        return;
      }
    }
  };

  return (
    <div className="relative ">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{ backgroundColor: "f8f8f8" }}
      />
      <BackgroundIcon2 position="top-[50%] right-[5%]" />
      <BackgroundIcon2 position="top-[10%] left-[5%]" />
      <div className="flex flex-col justify-center items-center mt-12 md:px-20">
        <h1 className="text-[30px] md:text-[60px] mb-4 w-full justify-center text-center">
          Kontaktiere uns
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center md:border-[4px] border-black rounded-lg h-auto lg:h-4/5 w-full lg:w-4/5 md:p-8">
          <div className="flex flex-col justify-between max-w-1/2 lg:max-w-none p-8">
            <h2 className="text-black text-center md:text-left text-3xl lg:text-4xl font-semibold mb-8 lg:mb-12">
              Nehmen Sie Kontakt mit uns auf
            </h2>
            <div className="flex flex-col">
              <div className="flex items-center mb-6 lg:mb-8">
                <EmailIcon />
                <a
                  href="mailto:gebaeudereinigung.melani@t-online.de"
                  className="ml-4 font-medium text-white"
                >
                  gebaeudereinigung.melani@t-online.de
                </a>
              </div>
              <div className="flex items-center mb-6 lg:mb-8">
                <PhoneIcon />
                <a
                  href="tel:+491725724352"
                  className="ml-4 font-medium text-white"
                >
                  01725724352
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg w-full lg:max-w-1/2 mt-8 lg:mt-0 p-8">
            <div className="flex flex-col w-full max-w-md">
              <div className="flex flex-col">
                <label className="font-semibold">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-[0.5px] p-4 border-[#9d9d9d] bg-[#D9D9D9] mb-4 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[0.5px] p-4 border-[#9d9d9d] bg-[#D9D9D9] mb-4 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Ihre Nachricht</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-[0.5px] p-4 border-[#9d9d9d] bg-[#D9D9D9] mb-4 focus:outline-none rounded-md"
                />
              </div>
              <div
                onClick={sendEmail}
                className="cursor-pointer flex justify-center items-center border-[2px] border-white rounded-2xl p-4  bg-[#AAC52715] font-semibold mt-5"
              >
                {loading ? (
                  <ClipLoader
                    color="black
                  "
                  />
                ) : (
                  "Nachricht senden"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
