import * as PIXI from 'pixi.js';
import {GradientFilter} from '../filters/gradient/gradient.filter';
import {canvasHeight, canvasWidth} from '../main';
import {AssetUtil} from '../asset/asset-util';

export class Background extends PIXI.Sprite {

  constructor(image: string) {
    const texture = PIXI.loader.resources[image].texture;
    super(texture);
    const scale = AssetUtil.getScale(canvasWidth, texture.width, canvasHeight, texture.height);
    this.scale.y = scale;
    this.scale.x = scale;
    const filter = new GradientFilter([234, 96, 96], [113, 23, 234]);
    this.filters = [filter];
  }
}