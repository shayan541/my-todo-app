import React from "react";
import type { QuestionPopOpType } from "../../../types/popup";
import Button from "../../ui/Button";

const QuestionPopOp: React.FC<QuestionPopOpType> = ({ cancelHandler, question, title, yesHandler }) => {
  // by using this component we can ask a question from client and give two options (yes or cancel)
  return (
    <div className="bg-white rounded border border-gold-200 shadow py-8 px-6 text-black">
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2">{question}</p>
      <div className="flex mt-2 gap-2">
        <Button onClick={yesHandler} className="bg-red-600">Yes</Button>
        <Button onClick={cancelHandler} className="bg-gray-500">Cancel</Button>
      </div>
    </div>
  );
};

export default QuestionPopOp;
