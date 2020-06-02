import React, { FC } from 'react';

import { Header } from '../Header';
import { Main } from '../Main';

import './App.scss';

export const App: FC = () => (
  <div className="app">
    <Header />
    <Main />
  </div>
);
