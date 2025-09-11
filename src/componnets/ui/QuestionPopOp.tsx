import React from "react";
import type { QuestionPopOpType } from "../../types/popup";
import Button from "./Button";

const QuestionPopOp: React.FC<QuestionPopOpType> = ({ cancelHandler, question, title, yesHandler }) => {
  return (
    <div className="bg-white rounded border shadow py-8 px-6">
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2">{question}</p>
      <div className="flex mt-2 gap-2">
        <Button onClick={yesHandler}>Yes</Button>
        <Button onClick={cancelHandler}>Cancel</Button>
      </div>
    </div>
  );
};

export default QuestionPopOp;
