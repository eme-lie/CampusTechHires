import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

interface QuestionAndAnswer {
  question: string;
  answer: string;
}

const questionsAndAnswers: QuestionAndAnswer[] = [
  {
    question:
      "What skills or qualifications are typically required for part-time tech jobs?",
    answer:
      "Employers often look for programming languages proficiency, problem-solving skills, and familiarity with relevant software. Some positions may require specific coursework completion or certifications.",
  },
  {
    question:
      "Is it possible to gain relevant work experience through part-time tech jobs?",
    answer:
      "Absolutely, part-time tech jobs provide valuable hands-on experience, helping students apply theoretical knowledge to real-world scenarios, enhancing their skills and marketability.",
  },
];

const Faq = () => {
  const [visibility, setVisibility] = useState<boolean[]>(
    Array(questionsAndAnswers.length).fill(false)
  );

  const answerVisibilityController = (index: number) => {
    const updatedVisibility = [...visibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setVisibility(updatedVisibility);
  };

  return (
    <section className="faq flex flex-col justify-center pt-8 pr-12 pb-12 pl-12 gap-y-6 lg:pt-16 lg:pr-20 lg:pb-12 lg:pl-20">
      <h3 className="faq_title text-2xl text-Neutral900_Text_main font-bold text-center md:text-3xl lg:text-4xl">
        Frequently Asked Questions
      </h3>
      <div className="questions flex flex-col justify-between gap-y-6">
        {questionsAndAnswers.map(({ question, answer }, index) => (
          <div
            key={question}
            className="question_container pt-6 pr-6 pb-6 pl-4 bg-Neutral200_Secondary_Background flex rounded-2xl w-full justify-between items-center border-2 border-neutral100"
          >
            <div className="question-container-text flex flex-col space-y-1 w-4/5">
              <p className="question text-lg font-medium">{question}</p>
              <p
                className={
                  visibility[index]
                    ? "answer text-base font-regular block"
                    : "answer-off text-base font-regular hidden"
                }
              >
                {answer}
              </p>
            </div>

            <FontAwesomeIcon
              icon={visibility[index] ? faChevronDown : faChevronUp}
              onClick={() => answerVisibilityController(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
