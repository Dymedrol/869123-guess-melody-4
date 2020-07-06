import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen.jsx';

it(`Проверка снепшота компонента WelcomeScreen`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        time={20}
        errorCount={10}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
