import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter}  from "react-router-dom"
import { I18nextProvider } from 'react-i18next';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    ns: ['translation'],
    defaultNS: 'translation',
    react: { useSuspense: true },
    debug: true,
    supportedLngs:['es','en','pt','de','fr'],
    //lng: 'es',
    fallbackLng: "es",
    detection:{
      order: [ 'path','htmlTag','localStorage', 'cookie', 'subdomain'],
      caches:['cookie']
    },
    backend: {
      loadPath: process.env.PUBLIC_URL + '/assets/locales/{{lng}}/translation.json',
      //loadPath: process.env.PUBLIC_URL + '/assets/locales/{{lng}}/translation.json',
      //cambiar antes de hacer el deployment
    },

  });


  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <I18nextProvider i18n={i18n}>
    <React.Suspense fallback={<div>Loading translations...</div>}>
  <App />
</React.Suspense>
    </I18nextProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
