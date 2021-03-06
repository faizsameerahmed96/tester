import React, { Component } from 'react';
import Camera from 'react-camera';

class Detect extends Component {

    constructor(props){
      super(props)
  
      this.state = {
       
      }
      this.takePicture = this.takePicture.bind(this);
    }
  
    render() {
      return (
        <div className="App">
          <h1>Screen 2</h1>
          <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
         ><div style={style.captureContainer} onClick={this.takePicture}>
         <div style={style.captureButton} />
       </div>
     </Camera>
     <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />
        </div>
      );
    }

    takePicture() {
        this.camera.capture()
        .then(blob => {
          this.img.src = URL.createObjectURL(blob);
          console.log(this.img.src)
          this.img.onload = () => { URL.revokeObjectURL(this.src); }
        })
      }
    
  }

  const style = {
    preview: {
      position: 'relative',
    },
    captureContainer: {
      display: 'flex',
      position: 'absolute',
      justifyContent: 'center',
      zIndex: 1,
      bottom: 0,
      width: '100%'
    },
    captureButton: {
      backgroundColor: '#fff',
      borderRadius: '50%',
      height: 56,
      width: 56,
      color: '#000',
      margin: 20
    },
    captureImage: {
      width: '100%',
    }
  };
  
  export default Detect;