import PIXI = require('pixi.js');
import { desktop, mobile} from './assets';
import WebFont = require('webfontloader');
import {fonts} from './fonts';
import {Helper} from '../helper';

export class AssetUtil {

  /**
   * Resolves to either mobile or desktop
   */
  public static assets: typeof mobile | typeof desktop = AssetUtil.getAssets();

  static async loadAssets(): Promise<void> {
    const loader = PIXI.loader;
    return new Promise((resolve, reject) => {
      for(let name in AssetUtil.assets) {
        const asset = AssetUtil.assets[name];
        loader.add(asset.id, asset.path);
      }
      loader.once('complete', () => {
        resolve();
      });
      loader.on('error', err => {
        reject(err);
      });
      loader.load();
    });
  }

  /**
   * Get scale, without tiling the image or changing shape
   * @param screenWidth
   * @param textureWidth
   * @param screenHeight
   * @param textureHeight
   */
  static getScale(screenWidth: number, textureWidth: number, screenHeight: number, textureHeight: number): number {
    const widthScale = screenWidth / textureWidth;
    const heightScale = screenHeight / textureHeight;
    return widthScale > heightScale ? widthScale : heightScale; // return whichever is greatest
  }


  static loadFonts(): Promise<void> {
    return new Promise((resolve, reject) => {
      WebFont.load({
        google: {
          families: fonts
        },
        active: resolve,
        inactive: reject
      });
    });
  }

  /**
   * Get mobile or desktop assets
   */
  static getAssets(){
    // @ts-ignore
    if (Helper.isMobile()) {
      console.log(`Loading mobile assets`);
      return mobile;
    } else {
      console.log(`Loading desktop assets`);
      return desktop;
    }
  }
}