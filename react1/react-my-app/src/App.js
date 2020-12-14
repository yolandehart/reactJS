import React from 'react'; 
import Header from '../src/Header/Header'
import Body from '../src/Body/Body'
import Footer from '../src/Footer/Footer'

class App extends React.Component {
  render() {
    return(
      <div>This is App
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}
export default App;
