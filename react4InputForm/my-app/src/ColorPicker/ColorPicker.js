import React from 'react';
class ColorPicker extends React.Component {

  state={
    beforeChange:"red",
  }
  
  render() {
    return(

      <div>
        <h1>ColorPicker</h1>

        <div style={{width:"200px", height:"300px", backgroundColor:this.state.beforeChange}}></div>
        
      </div>

    )
  }
}
export default ColorPicker;
