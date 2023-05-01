import { CautionIcon, LightningChargeIcon, SunIcon } from "../../../constants";
import Footer from "../Footer";

const RightSection = () => {
  return (
    <div className="flex h-full flex-1 flex-col md:pl-[260px]">
      <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col items-center text-sm h-full md:h-screen bg-lightBlack">
            <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6">
              <h1 className="text-4xl text-gray-100 font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16">
                ChatBot Sport
              </h1>
              <div className="md:flex items-start text-center gap-3.5">
                {[
                  {
                    icon: <SunIcon />,
                    title: "Sport",
                    subTitle: [
                      `"Quelle sont les equipes du premier ligue" →`,
                      `"Score du dernier match" →`,
                      `"Meilleur buteur premier league" →`,
                    ],
                    hover: true,
                  },
                  {
                    icon: <CautionIcon />,
                    title: "Basketball",
                    subTitle: [
                      `En quelle année a été inventé le basket-ball ?`,
                      `Qui a inventé le basket ?`,
                      `Combien y a-t-il de joueurs sur un terrain ?`,
                    ],
                    hover: false,
                  },
                ].map((item, index) => (
                  <div
                    className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"
                    key={index}
                  >
                    <h2 className="flex gap-3 text-gray-100 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                      {item.icon}
                      {item.title}
                    </h2>
                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                      {item.subTitle.map((subTitle, subTitleIndex) => (
                        <button
                          className={`w-full bg-gray-50 text-gray-100 bg-white/5 p-3 rounded-md ${
                            item.hover
                              ? "hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer"
                              : "cursor-text"
                          }`}
                          key={subTitleIndex}
                        >
                          {subTitle}
                        </button>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 h-48 flex-shrink-0">
              <p className="bg-slate-500">Hello Yassine</p>
              <p>Hi</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default RightSection;
