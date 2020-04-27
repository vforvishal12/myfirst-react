import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import BodyContent from './BodyContent';


function MyFirstComp(){
  return (
    <div>
       <Header />
       <BodyContent />
        <Footer />
    </div>
  );
}

export default MyFirstComp;

