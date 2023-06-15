import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import testimonialsReducer from './TestimonialsSlice';

import Navbar from './Navbar';
import Services from './Services';
import Work from './Work'
import Projects from './Projects'
import Case from './Case';
import Testimonials from './Testimonials';
import Footer from './Footer';

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <Services />

        <Work />

        <Projects />

        <Case />

        <Testimonials />

        <Footer />
      </Provider>

    </>
  );
}

export default App;
