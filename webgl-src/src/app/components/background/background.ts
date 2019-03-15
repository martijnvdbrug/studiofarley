import * as PIXI from "pixi.js";
import {AssetUtil} from '../../asset/asset-util';
import {canvasHeight, canvasWidth} from '../../main';
import {GradientFilter} from '../../filters/gradient/gradient.filter';
import Texture = PIXI.Texture;

export class Background extends PIXI.Sprite {

  constructor(texture: Texture) {
    super(texture);
    const scale = AssetUtil.getScale(canvasWidth, texture.width, canvasHeight, texture.height);
    this.scale.y = scale;
    this.scale.x = scale;
    const filter = new GradientFilter([53, 255, 105], [68, 204, 255]);
    this.filters = [filter];
  }
}