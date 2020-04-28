import * as pixi from 'pixi.js';
import * as animate from 'pixi-animate';

async function main()
{
	const {default: art} = await import('./assets/hand_PixiAnimate_WITH_TXT.js');
	const scene = new animate.Scene({
		width: art.width,
		height: art.height,
		backgroundColor: art.background,
		antialias: true,
		view: document.createElement('canvas')
	});
	document.body.appendChild(scene.view);
	art.setup(animate);
	await new Promise(resolve => scene.load(art as any, resolve));
}

main();