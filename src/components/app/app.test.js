import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`Проверка снепшота компонента App`, () => {
  const tree = renderer.create(
      <App
        time={20}
        errorCount={10}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
