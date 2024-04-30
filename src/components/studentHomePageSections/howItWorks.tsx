import step1 from "@/assets/images/step1.svg";
import step2 from "@/assets/images/step2.svg";
import step3 from "@/assets/images/step3.svg";

function HowItWorks() {
  return (
    <div className="how-it-works flex flex-col justify-center pt-8 pr-12 pb-12 pl-12 gap-y-6 lg:pt-16 lg:pr-20 lg:pb-12 lg:pl-20">
      <h2 className="how-it-works-title text-2xl text-Neutral900_Text_main font-bold text-center md:text-3xl lg:text-4xl">
        How It Works
      </h2>
      <div className="how-it-works-steps flex flex-wrap justify-between gap-y-8">
        <div
          className="how-it-works-step1 pt-16 pr-8 pb-16 pl-8 flex flex-col bg-cover rounded-2xl w-full gap-y-2 lg:w-30"
          style={{ backgroundImage: `url(${step1})` }}
          aria-label="a working on a laptop filling a form"
        >
          <div className="step-number-container w-12 h-12 rounded-full bg-primaryColor flex justify-center items-center border border-neutral100">
            <p className="step-number text-xl font-bold text-Neutral100_Base_Background text-center">
              1
            </p>
          </div>

          <p className="text-Neutral100_Base_Background text-xl">
            Sign up and Create your profile
          </p>
        </div>
        <div
          className="how-it-works-step2 pt-16 pr-8 pb-16 pl-8 flex flex-col bg-cover rounded-2xl w-full gap-y-2 lg:w-30"
          style={{ backgroundImage: `url(${step2})` }}
          aria-label="a black woman on glasses filling a form"
        >
          <div className="step-number-container w-12 h-12 rounded-full bg-primaryColor flex justify-center items-center border border-neutral100">
            <p className="step-number text-xl font-bold text-Neutral100_Base_Background text-center">
              2
            </p>
          </div>
          <p className="text-Neutral100_Base_Background text-xl">
            Apply for jobs that fit your goals and schedule
          </p>
        </div>
        <div
          className="how-it-works-step3 pt-16 pr-8 pb-16 pl-8 flex flex-col bg-cover rounded-2xl w-full gap-y-2 lg:w-30"
          style={{ backgroundImage: `url(${step3})` }}
          aria-label="a happy blackman looking at his phone"
        >
          <div className="step-number-container w-12 h-12 rounded-full bg-primaryColor flex justify-center items-center border border-neutral100">
            <p className="step-number text-xl font-bold text-Neutral100_Base_Background text-center">
              3
            </p>
          </div>
          <p className="text-Neutral100_Base_Background text-xl">
            Check you email for feedback from employers
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
