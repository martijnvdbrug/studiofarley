import * as PIXI from 'pixi.js';
import {Background} from './background';
import {AssetUtil} from '../../asset/asset-util';

export class MobileBackground extends Background {

  constructor() {
    const texture = PIXI.loader.resources[AssetUtil.assets.background.id].texture;
    super(texture);
  }
}