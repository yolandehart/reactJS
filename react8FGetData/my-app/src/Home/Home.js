import React from 'react';
import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return(
     <div>
       <Header/>
       <Body/>
       <Footer/>
      </div>
  )
}
export default Home;