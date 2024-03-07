import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import DesktopCard from "../components/DesktopCard";
import MobileCard from "../components/MobileCard";
import TradingViewWidget from "../components/TradingViewWidget";
import BitcoinCard from "../components/bitcoinCard";
import TrendingCoinsCard from "../components/TrendingCoinsCard";
import Footer from "../components/Footer";
import TeamDetails from "../components/TeamDetails";
import Tab from "../components/Tab";
import Performance from "../components/Performance";
import Sentiments from "../components/Sentiments";
import Tokenomics from "../components/Tokenomics";

const Home = () => {
  return (
    <>
      <section className="bg-default-gray min-h-screen">
        <Navbar />
        <div className="bg-default-gray w-full max-w-[83rem] mx-auto xl:flex gap-5   ">
          <div className="pt-12">
            <div className=" bg-white w-full rounded-xl h-[40rem] max-w-[55.0625rem] mb-20 p-8 sm:px-0 ">
              <div className="ml-4">
                <BitcoinCard />
              </div>
              <div className="w-full h-[28rem] max-w-[55.0625rem] p-6">
                <TradingViewWidget />
              </div>
            </div>
            <div>
              <Tab />
            </div>
            <div className=" bg-white w-full rounded-xl max-w-[55.0625rem] mt-8 pt-4 px-4 sm:px-0 ">
              <Performance />
            </div>
            <div className=" bg-white w-full rounded-xl max-w-[55.0625rem] mt-8 pt-4 px-4 sm:px-0 ">
              <Sentiments />
            </div>
            <div className=" bg-white w-full rounded-xl max-w-[55.0625rem] mt-8 pt-4 px-4 sm:px-0 ">
              <FAQ />
            </div>
            <div className=" bg-white w-full rounded-xl max-w-[55.0625rem] mt-8 pt-4 px-4 sm:px-0 ">
              <TeamDetails />
            </div>
            <div className=" bg-white w-full rounded-xl max-w-[55.0625rem] my-8 pt-4 px-4 sm:px-0 ">
              <Tokenomics />
            </div>
          </div>
          <div className="w-[95%] sm:w-full mx-auto mt-[4.25rem] mb-[3.875rem] lg:mt-12 lg:mb-0">
            <MobileCard className="xl:hidden" />
            <DesktopCard className="hidden xl:block xl:mx-0" />
            <TrendingCoinsCard />
          </div>
        </div>
      </section>
      <footer className="my-10 mx-5">
        <Footer />
      </footer>
    </>
  );
};
export default Home;
