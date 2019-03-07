import * as PIXI from 'pixi.js';
import {Background} from './background';

export class DesktopBackground extends Background {

  constructor() {
    super(PIXI.Texture.WHITE);
    this.alpha = 0.5;
  }
}