import React from "react";
import PropTypes from "prop-types";

const Options = ({ answerType, answer, onAnswerSelected, answerContent }) => {
  return (
    <div className='col-sm-5 mx-auto radio-value text-center mt-3'>
      <input
        type='radio'
        className='radioCustomButton'
        name='radioGroup'
        checked={answerType === answer}
        id={answerType}
        disbled={answer}
        value={answerType}
        onChange={onAnswerSelected}
      />

      <label htmlFor={answerType} className='radioCustomLabel'>
        {answerContent}
      </label>
    </div>
  );
};

Options.propTypes = {
  answerType: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Options;
