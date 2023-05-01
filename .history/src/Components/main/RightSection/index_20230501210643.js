import { CautionIcon, LightningChargeIcon, SunIcon } from "../../../constants";
import Footer from "../Footer";

const RightSection = () => {
  return (
    <div className="flex h-full flex-1 flex-col md:pl-[260px]">
      <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col items-center text-sm h-full md:h-screen bg-lightBlack">
            <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6">
              <h1 className="text-4xl text-gray-100 font-semibold text-center mt-72 ml-auto mr-auto mb-10 sm:mb-16">
                ChatBot Sport
              </h1>
            </div>
            <div className="w-fit h-48 flex-shrink-0 bg-slate-400">Hello</div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default RightSection;
