import PIXI = require('pixi.js');
import {GlitchFilter} from '@pixi/filter-glitch';
import {canvasHeight, canvasWidth} from '../main';
import Filter = PIXI.Filter;

export class LogoText extends PIXI.Text {

  glitchFilter: Filter<{}>;

  constructor(text: string) {
    super(text, {
      fontFamily: 'Source Sans Pro',
      fontSize: canvasHeight > canvasWidth ? '21vw' : '15vh', // if height is greater than width, we need a smaller font
      fill: 0xffffff,
    });
    this.glitchFilter = new GlitchFilter();
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
    this.filters = [this.glitchFilter];
    let counter = 0;
    setTimeout(() => {
        this.filters = [];
    }, 200);
  }

  glitchOff(time: number){
    this.filters = null;
  }
}