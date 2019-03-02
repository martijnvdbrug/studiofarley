import PIXI = require('pixi.js');
import {canvasHeight, canvasWidth} from '../main';

export class LogoText extends PIXI.Text {

  // glitchFilter: GlitchFilter;

  constructor(text: string) {
    super(text, {
      fontFamily: 'Source Sans Pro',
      fontSize: canvasHeight > canvasWidth ? '21vw' : '15vh',
      fill: 0xffffff,
    });
    //this.glitchFilter = new GlitchFilter();
    this.position.y = (canvasHeight - this.height) / 2;
    this.position.x = (canvasWidth - this.width) / 2;
    this.interactive = true;
    this.buttonMode = true;
    this
        .on('mousedown', this.glitch)
        .on('touchstart', this.glitch)
        .on('mouseover', this.glitch);
  }

  glitch(){
    // FIXME this.filters = [this.glitchFilter];
    let counter = 0;
    setTimeout(() => {
        this.filters = [];
    }, 200);
  }

  glitchOff(time: number){
    this.filters = [];
  }
}