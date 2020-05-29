import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

import QuestionCount from "./QuestionCount";
import QuestionStatement from "./QuestionStatement";
import Options from "./Options";

const Question = ({
  questionId,
  questionTotal,
  question,
  options,
  onAnswerSelected,
  answer,
}) => {
  return (
    <CSSTransitionGroup
      className=''
      component='div'
      transitionName='fade'
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={questionId} className='question-container'>
        <QuestionCount count={questionId} total={questionTotal} />
        <QuestionStatement question={question} />
        <div className='row'>
          {options.map((key) => (
            <Options
              key={key.content}
              answerContent={key.content}
              answerType={key.type}
              answer={answer}
              questionId={questionId}
              onAnswerSelected={onAnswerSelected}
            />
          ))}
        </div>
      </div>
    </CSSTransitionGroup>
  );
};

Question.propTypes = {
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
};

export default Question;
