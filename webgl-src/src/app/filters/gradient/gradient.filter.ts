export class GradientFilter extends PIXI.Filter<{}> {

  constructor(color1: [number, number, number], color2: [number, number, number]) {
    const rgb1 = `${color1[0] / 255},${color1[1] / 255},${color1[2] / 255},1.0`;
    const rgb2 = `${color2[0] / 255},${color2[1] / 255},${color2[2] / 255},1.0`;
    super(null, `
precision mediump float;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform sampler2D uSampler;

// start and end colors
vec4 color1 = vec4(${rgb1});
vec4 color2 = vec4(${rgb2});

void main(){
	vec4 mixCol = mix(color2, color1, vFilterCoord.y);
	vec4 fg = texture2D(uSampler, vTextureCoord);
	
	gl_FragColor = mix(fg, mixCol, 0.5);
}
`);
  }
}