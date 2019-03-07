import PIXI = require('pixi.js');
import Container = PIXI.Container;
import {AssetUtil} from './asset/asset-util';
import {MobileBackground} from './components/background/mobile-background';
import {LogoText} from './components/logo-text';
import {DesktopBackground} from './components/background/desktop-background';
import {Helper} from './helper';
import WebGLRenderer = PIXI.WebGLRenderer;

export let canvasWidth: number;
export let canvasHeight: number;

export class Main {

  app;
  renderer: PIXI.CanvasRenderer | WebGLRenderer;
  private readonly stage: Container;

  constructor() {
    canvasWidth = document.getElementById('parallax').clientWidth;
    canvasHeight = document.getElementById('parallax').clientHeight;
    // this.stage = new PIXI.Container();
    this.app = new PIXI.Application({
      width: canvasWidth,
      height: canvasHeight,
      view: document.getElementById('canvas') as HTMLCanvasElement,
      backgroundColor: 0xffffff
    });
    this.stage = this.app.stage;
    console.log(`Using screenheight ${canvasHeight} and screenwidth ${canvasWidth}`);
    Promise.all([
      AssetUtil.loadAssets(),
      AssetUtil.loadFonts()
    ]).then(() => {
      this.makeStage();
      this.renderer = PIXI.autoDetectRenderer();
      PIXI.ticker.shared.add((time) => {
        this.update(time);
      });
    }).catch(err => {
      console.error(`Failed to load assets/fonts:`, err);
    });
  }

  makeStage() {
    const background = Helper.isMobile() ? new MobileBackground() : new DesktopBackground();
    const farley = new LogoText('STUDIO\nFARLEY');
    this.stage.addChild(background);
    this.stage.addChild(farley);
    // this.renderer.render(this.stage);
  }

  update(time: number) {
    this.renderer.render(this.stage);
  }

}