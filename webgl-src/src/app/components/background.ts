import * as PIXI from 'pixi.js';
import {WaveFilter} from '../filters/wave.filter';

export class Background extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.WHITE);
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.tint = 0x0000000;
/*    const filter = new WaveFilter([234, 96, 96], [113, 23, 234]);
    this.filters = [filter];*/
  }
}