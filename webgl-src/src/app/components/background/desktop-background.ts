import * as PIXI from 'pixi.js';
import {Background} from './background';
import {AssetUtil} from '../../asset/asset-util';

export class DesktopBackground extends Background {

  constructor() {
    const texture = PIXI.Texture.fromVideo(AssetUtil.assets.background.path);
    super(texture);
  }
}