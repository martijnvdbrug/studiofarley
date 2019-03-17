import PIXI = require('pixi.js');
import {GlitchFilter} from '@pixi/filter-glitch';
import {RGBSplitFilter} from '@pixi/filter-rgb-split';
import {canvasHeight, canvasWidth} from '../main';
import Filter = PIXI.Filter;

export class LogoText extends PIXI.Text {

  glitchFilter: Filter<{}>;
  rgbFilter: Filter<{}>;

  constructor(text: string) {
    super(text, {
      fontFamily: 'Source Sans Pro',
      fontSize: canvasHeight > canvasWidth ? '21vw' : '15vh', // if height is greater than width, we need a smaller font
      fill: 0xffffff,
    });
    this.glitchFilter = new GlitchFilter();
    this.rgbFilter = new RGBSplitFilter();
    this.position.y = (canvasHeight - this.height) / 2;
    this.position.x = (canvasWidth - this.width) / 2;
    this.interactive = true;
    this.buttonMode = true;
    this
        .on('mousedown', this.glitchOn)
        .on('touchstart', this.glitch)
        .on('mouseup', this.glitchOff)
        .on('mouseover', this.glitch);
  }

  glitch() {
    this.glitchOn();
    setTimeout(() => {
        this.glitchOff()
    }, 300);
  }

  glitchOn() {
    this.filters = [this.glitchFilter, this.rgbFilter];
  }

  glitchOff() {
    this.filters = null;
  }
}