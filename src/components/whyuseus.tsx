const WhyUseUs: React.FC = () => {
  return (
    <div className="why-use-us flex flex-col items-center pt-8 pr-14 pb-12 pl-14 gap-y-6 md:pt-16 md:pr-20 md:pb-20 md:pl-20">
      <h2 className="why-use-us-title text-2xl text-Neutral900_Text_main font-bold md:text-3xl lg:text-4xl">
        Why Use Us
      </h2>
      <div className="inner-why-use-us flex flex-col bg-Neutral200_Secondary_Background items-center rounded-2xl pt-4 pr-6 pb-6 pl-6 gap-y-6 md:pt-8 md:pr-10 md:pb-10 lg:pl-10 ">
        <div className="card-holding-container flex flex-wrap justify-between gap-y-8 ">
          <div className="card1 flex flex-col w-full gap-y-0 lg:gap-y-4 lg:w-30">
            <div className="card-heading flex flex-col gap-y-2">
              <h2 className="card-icon text-xl lg:text-3xl">🧲</h2>
              <h3 className="card-title text-xl font-medium lg:text-2xl lg:font-bold">
                Attract the best talent
              </h3>
            </div>
            <p className="card-body text-base lg:text-lg">
              Find the best students for your part-time IT jobs. Without relying
              on agencies.
            </p>
          </div>
          <div className="card2 flex flex-col w-full gap-y-0 lg:gap-y-4 lg:w-30">
            <div className="card-heading flex flex-col gap-y-2">
              <h2 className="card-icon text-xl lg:text-3xl">1️⃣</h2>
              <h3 className="card-title text-xl font-medium lg:text-2xl lg:font-bold">
                Be the First Choice for the Best Students
              </h3>
            </div>
            <p className="card-body text-base lg:text-lg">
              We make it easy for students to find and apply for your part-time
              IT jobs.
            </p>
          </div>
          <div className="card3 flex flex-col w-full gap-y-0 lg:gap-y-4 lg:w-30">
            <div className="card-heading flex flex-col gap-y-2">
              <h2 className="card-icon text-2xl lg:text-3xl">☄️</h2>
              <h3 className="card-title text-xl font-medium lg:text-2xl lg:font-bold">
                Reduce Time to Hire
              </h3>
            </div>
            <p className="card-body text-base lg:text-lg">
              We make it possible for you to make direct hires without the need
              for agencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUseUs;
