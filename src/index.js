import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import questions from "./mocks/questions.js";

const init = () => {
  const settings = {
    gameTime: 5,
    errorsCount: 3,
  };

  ReactDOM.render(
      <App
        errorsCount={settings.errorsCount}
        gameTime={settings.gameTime}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();

