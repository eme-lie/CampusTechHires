import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const ReadyToGetStarted: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-get-started-image bg-cover bg-no-repeat items-center pt-8 pr-14 pb-12 pl-14 gap-y-4 md:pt-16 md:pr-20 md:pb-12 md:pl-20 lg:gap-y-6">
      <h2 className="text-Neutral100_Base_Background font-bold text-xl font-bold md:text-3xl lg:text-4xl">
        Ready to Employ the Best Students
      </h2>
      <Link to="/target-page">
        <Button className="bg-primaryColor sm:text-base sm:px-4 sm:py-2 md:text-base md:px-6 md:py-4 lg:px-8 lg:py-6 lg:text-lg font-normal w-fit text-Neutral100_Base_Background">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default ReadyToGetStarted;
