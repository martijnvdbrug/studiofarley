import PIXI = require('pixi.js');
import {assets} from './asset/assets';
import {AssetUtil} from './asset/asset-util';
import {Background} from './components/background';
import {LogoText} from './components/logo-text';
import {fonts} from './asset/fonts';
import Container = PIXI.Container;

export let canvasWidth: number;
export let canvasHeight: number;

export class Main {

  private readonly stage: Container;
  app;

  constructor() {
    canvasWidth = document.getElementById('header').clientWidth;
    canvasHeight = document.getElementById('header').clientHeight;
    // this.stage = new PIXI.Container();
    this.app = new PIXI.Application({
      width: canvasWidth,
      height: canvasHeight,
      view: document.getElementById('banner-canvas') as HTMLCanvasElement,
      backgroundColor: 0xffffff
    });
    this.stage = this.app.stage;
    console.log(`Using screenheight ${canvasHeight} and screenwidth ${canvasWidth}`);
    Promise.all([
      AssetUtil.loadAssets(assets),
      AssetUtil.loadFonts(fonts)
    ]).then(() => {
      this.makeStage();
      PIXI.Ticker.shared.add((time) => {
        this.update(time);
      });
    }).catch(err => {
      console.error(`Failed to load assets/fonts:`, err);
    });
  }

  makeStage() {
    const background = new Background();
    const farley = new LogoText('STUDIO\nFARLEY');
    this.stage.addChild(background);
    this.stage.addChild(farley);
    // this.renderer.render(this.stage);
  }

  update(time: number) {
    // this.renderer.render(this.stage);
  }

}