import * as PIXI from 'pixi.js';
import {GradientFilter} from '../filters/gradient/gradient.filter';

export class Background extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.WHITE);
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.tint = 0xffffff;
    const filter = new GradientFilter([234, 96, 96], [113, 23, 234]);
    this.filters = [filter];
  }
}