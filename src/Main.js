import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import questions from "./api/QuestionsApi";
import Question from "./components/Question";
import Result from "./components/Result";

class Main extends Component {
  state = {
    count: 0,
    questionId: 1,
    question: "",
    options: [],
    answer: "",
    answersCount: {},
    result: "",
    warning: "",
  };

  componentDidMount = () => {
    this.setState({
      question: questions[0].question,
      options: questions[0].answers,
    });
  };

  handleAnswerSelected = (event) => {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < questions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.getResults(), 300);
    }
  };

  setUserAnswer = (answer) => {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  };

  setNextQuestion() {
    const count = this.state.count + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      count,
      questionId,
      question: questions[count].question,
      options: questions[count].answers,
      answer: "",
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);

    const mediumValue = answersCountValues[1];
    const highValue = answersCountValues[2];

    if (
      highValue >= 2 ||
      mediumValue >= 3 ||
      (highValue >= 1 && mediumValue >= 2)
    ) {
      this.setState({
        result: "High",
        warning: "Please get self isolated and treated immediately!",
      });
    } else if (mediumValue <= 2 || highValue < 2) {
      this.setState({
        result: "Medium",
        warning: "You are likely to be infected, please visit nearby hospital!",
      });
    } else {
      this.setState({
        result: "Low",
        warning: "You are alright. Stay Home! Stay Safe!",
      });
    }
  }

  renderQuiz() {
    return (
      <Question
        questionId={this.state.questionId}
        question={this.state.question}
        options={this.state.options}
        answer={this.state.answer}
        questionTotal={questions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result result={this.state.result} warning={this.state.warning} />;
  }

  render() {
    return (
      <>
        <div className=' container d-flex align-items-center outer-container'>
          <div className='col-md-8 mx-auto inner-container'>
            {this.state.result ? this.renderResult() : this.renderQuiz()}
          </div>
        </div>
      </>
    );
  }
}

export default Main;
