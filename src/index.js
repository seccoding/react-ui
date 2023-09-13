import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TableApp from './TableApp';
import ArticleApp from './ArticleApp';
import Buttons from './components/events/Buttons';
import PersonApp from './components/events/props/PersonApp';
import InputApp from './components/state/InputApp';
import StepperApp from './components/state/StepperApp';
import ContactApp from './components/contact/ContactApp';
import InlineApp from './components/style/InlineApp';
import RefComponent from './components/hooks/UseRefTest';
import EffectComponent from './components/hooks/UseEffectTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <EffectComponent />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
