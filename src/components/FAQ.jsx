import Card from "./Card";
import FaqContentSmall from "./FaqContentSmall";
const FAQ = () => {
  return (
    <div className="bg-white w-[95%] xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl xl:mb-24">
      <h2 className="text-2xl font-bold leading-5 mb-4 lg:pb-4">
        About Bitcoin
      </h2>
      <div className="max-w-[51.875rem]">
        <FaqContentSmall className="xl:block" />
      </div>
      <h2 className="text-2xl font-bold leading-5 mb-4 lg:pb-4">
        Already Holding Bitcoin?
      </h2>
      <div className="flex lg:flex-row flex-col">
        <Card startColor="green" endColor="cyan" title="Calculate your Profits " />
        <Card startColor="red" endColor="orange" title="Calculate your tax liability " />
      </div>
      <div className="mt-10 border border-top"></div>
      <p className="mt-10 border-top">Voluptate laboris proident et eiusmod mollit. In ea id occaecat consectetur aliquip. Et ut magna eu tempor laboris. Anim magna culpa ullamco reprehenderit nostrud ipsum occaecat consequat sunt aliqua id. Cupidatat sit ea velit ut in exercitation anim eu eiusmod eu dolor anim ea ea.</p>
    </div>
  );
};

export default FAQ;
