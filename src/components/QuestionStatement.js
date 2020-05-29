import React from "react";
import PropTypes from "prop-types";

const QuestionStatement = ({ question }) => {
  return (
    <div className='question mt-3 mb-4'>
      <p className='text-center question-title'>{question}</p>
    </div>
  );
};

QuestionStatement.propTypes = {
  question: PropTypes.string.isRequired,
};

export default QuestionStatement;
