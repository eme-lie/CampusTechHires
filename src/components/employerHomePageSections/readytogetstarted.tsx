import { Link } from "react-router-dom";
import { Button } from "../ui/button";

import groupOfStudentsLandscape from "@/assets/images/group-of-students-landscape.svg";

const ReadyToGetStarted: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-get-started-image bg-cover bg-no-repeat items-center pt-8 pr-14 pb-12 pl-14 gap-y-4 md:pt-16 md:pr-20 md:pb-12 md:pl-20 lg:gap-y-6"
      style={{ backgroundImage: `url(${groupOfStudentsLandscape})` }}
    >
      <h2 className="text-Neutral100_Base_Background font-bold text-xl font-bold md:text-3xl lg:text-4xl">
        Ready to Employ the Best Students
      </h2>
      <Link to="/signup">
        <Button className="bg-primaryColor sm:px-4 sm:py-2 md:px-6 md:py-4 lg:px-6 lg:py-3 sm:text-base md:text-base lg:text-lg font-medium hidden lg:block">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default ReadyToGetStarted;
