<<<<<<< HEAD
import { fabric } from 'fabric';

export type WhiteboardCanvasZoom = 'in' | 'out';

export default class WhiteboardCanvasService {
  private static instance: WhiteboardCanvasService;

  private static canvas: fabric.Canvas;

  constructor() {
    if (!WhiteboardCanvasService.instance) {
      WhiteboardCanvasService.instance = this;
    }
    return WhiteboardCanvasService.instance;
  }

  initialize() {
    WhiteboardCanvasService.canvas = new fabric.Canvas('whiteboardCanvas', {
      isDrawingMode: true,
    });
  }

  getCanvas() {
    return WhiteboardCanvasService.canvas;
  }

  setDimensions(width:any, height:any) {
    console.log(width, height);

    WhiteboardCanvasService.canvas.setDimensions({ width, height });
  }

  zoom(type: WhiteboardCanvasZoom) {
    const existingZoom = WhiteboardCanvasService.canvas.getZoom();
    if (type === 'in') {
      WhiteboardCanvasService.canvas.setZoom(existingZoom * 1.1);
    } else if (type === 'out') {
      WhiteboardCanvasService.canvas.setZoom(existingZoom * 0.9);
    }
  }

  clear() {
    WhiteboardCanvasService.canvas.clear();
=======
import { fabric } from 'fabric'

export type WhiteboardCanvasZoom = 'in' | 'out'

export default class WhiteboardCanvasService {
  private static instance: WhiteboardCanvasService

  private static canvas: fabric.Canvas

  constructor () {
    if (!WhiteboardCanvasService.instance) {
      WhiteboardCanvasService.instance = this
    }
    return WhiteboardCanvasService.instance
  }

  initialize () {
    WhiteboardCanvasService.canvas = new fabric.Canvas('whiteboardCanvas', {
      isDrawingMode: true
    })
  }

  getCanvas () {
    return WhiteboardCanvasService.canvas
  }

  setDimensions (width: number, height: number) {
    WhiteboardCanvasService.canvas.setDimensions({ width, height })
  }

  zoom (type: WhiteboardCanvasZoom) {
    const existingZoom = WhiteboardCanvasService.canvas.getZoom()
    if (type === 'in') {
      WhiteboardCanvasService.canvas.setZoom(existingZoom * 1.1)
    } else if (type === 'out') {
      WhiteboardCanvasService.canvas.setZoom(existingZoom * 0.9)
    }
  }

  clear () {
    WhiteboardCanvasService.canvas.clear()
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
  }
}
