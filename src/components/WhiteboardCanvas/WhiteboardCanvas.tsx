import { isPlatform } from '@ionic/react';
import React, { Component, useEffect, useCallback, useLayoutEffect } from 'react';
import WhiteboardCanvasService from '../../services/Whiteboard/WhiteboardCanvasService';

interface WhiteboardCanvasProps {
  handleClick: () => void;
}

export default class WhiteboardCanvas extends Component<WhiteboardCanvasProps> {
  whiteboardCanvasService: WhiteboardCanvasService;

  constructor(props: WhiteboardCanvasProps) {
    super(props);
    this.whiteboardCanvasService = new WhiteboardCanvasService();
  }

  setDimensions() {
    const width = document.getElementById('newMainContentRightInnerTextarea')?.clientWidth || 700;
    const mobileHeight = 500;
    const desktopHeight = document.getElementById('newMainContentRightInnerTextarea')?.clientHeight;
    const height = desktopHeight ?  desktopHeight : mobileHeight;
    this.whiteboardCanvasService.setDimensions(width, height);
  }

  componentDidMount() {
    this.whiteboardCanvasService.initialize();
    setTimeout(() => {
    this.setDimensions();
    }, 1000);
  }

  render() {
    return (
      <div onMouseDown={this.props.handleClick} onTouchStart={this.props.handleClick}>
        <canvas id='whiteboardCanvas' />
      </div>
    );
  }
}

// function WhiteboardCanvas(props: WhiteboardCanvasProps) {
//   const whiteboardCanvasService = new WhiteboardCanvasService();
//   whiteboardCanvasService.initialize();

//   const setDimensions = () => {
//     whiteboardCanvasService.initialize();
//     const width =
//       document.getElementById('newMainContentRightInnerTextarea')?.clientWidth || document.getElementById('middleSectionInnerContainer')?.clientWidth;
//     const desktopHeight =
//       document.getElementById('newMainContentRightInnerTextarea')?.clientHeight ||
//       document.getElementById('middleSectionInnerContainer')?.clientHeight;
//     // console.log(width, desktopHeight);
//     whiteboardCanvasService.setDimensions(width, desktopHeight);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       const width =
//         document.getElementById('newMainContentRightInnerTextarea')?.clientWidth ||
//         document.getElementById('middleSectionInnerContainer')?.clientWidth;
//       const desktopHeight =
//         document.getElementById('newMainContentRightInnerTextarea')?.clientHeight ||
//         document.getElementById('middleSectionInnerContainer')?.clientHeight;
//       // console.log(width, desktopHeight);
//       whiteboardCanvasService.setDimensions(width, desktopHeight);
//     }, 0);
//   }, []);

//   useEffect(() => {
//     function updateSize() {
//       whiteboardCanvasService.initialize();
//       setDimensions();
//     }
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   return (
//     <div onMouseDown={props.handleClick} onTouchStart={props.handleClick}>
//       <canvas id='whiteboardCanvas' />
//     </div>
//   );
// }

// export default WhiteboardCanvas;
