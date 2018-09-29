import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class Train extends Component {

    constructor(props){
      super(props)
  
      this.state = {
          selectedImages : []
      }
    }
  
    render() {
      return (
        <div className="App">
        <div>
          <h2>Select Images</h2>
            <Dropzone onDrop={(acceptedFiles, rejectedFiles) => {this.setState({selectedImages: acceptedFiles})}}/>
            <button onClick={(e) => {console.log(this.state.selectedImages)}}>Add Face</button>
        </div>
       
        </div>
      );
    }
  }
  
  export default Train;