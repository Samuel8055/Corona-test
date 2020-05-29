import React from "react";
import PropTypes from "prop-types";

const QuestionCount = ({ count, total }) => {
  return (
    <div className='question-count'>
      <p>
        Question {count} of {total}
      </p>
    </div>
  );
};

QuestionCount.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
