import * as pixi from 'pixi.js';
import * as animate from 'pixi-animate';

type Digit = 'thumb'|'pinky'|'index'|'middle'|'ring';
interface Hand
{
	toggleFacing(facing:HandFacing):void;
	toggleFinger(digit:Digit):void;
}
interface HandFacing
{
	owner: Hand;
}
interface Finger
{
	owner: HandFacing;
	digit: Digit;
}

async function main()
{
	const {default: art} = await import('./assets/hands.js');
	const scene = new animate.Scene({
		width: art.width,
		height: art.height,
		backgroundColor: art.background,
		antialias: true,
		view: document.createElement('canvas')
	});
	document.body.appendChild(scene.view);
	art.setup(animate);

	function mixFinger(finger:typeof animate.MovieClip)
	{
		return class extends finger implements Finger
		{
			public owner: HandFacing;
			public digit: Digit;

			constructor()
			{
				super();

				this.stop();

				this.interactive = true;
				this.cursor = 'pointer';
				this.on('pointertap', () => this.owner.owner.toggleFinger(this.digit));
			}
		}
	}
	art.lib.BackThumb = mixFinger(art.lib.BackThumb);
	art.lib.BackIndex = mixFinger(art.lib.BackIndex);
	art.lib.BackMiddle = mixFinger(art.lib.BackMiddle);
	art.lib.BackRing = mixFinger(art.lib.BackRing);
	art.lib.BackPinky = mixFinger(art.lib.BackPinky);
	art.lib.ThumbFore = mixFinger(art.lib.ThumbFore);
	art.lib.ForeIndex = mixFinger(art.lib.ForeIndex);
	art.lib.ForeMiddle = mixFinger(art.lib.ForeMiddle);
	art.lib.ForeRing = mixFinger(art.lib.ForeRing);
	art.lib.ForePinky = mixFinger(art.lib.ForePinky);

	function mixFacing(facing:typeof art.lib.BackHand)
	{
		return class extends facing implements HandFacing
		{
			public owner: Hand;
			public thumb: animate.MovieClip & Finger;
			public index: animate.MovieClip & Finger;
			public middle: animate.MovieClip & Finger;
			public ring: animate.MovieClip & Finger;
			public pinky: animate.MovieClip & Finger;

			constructor()
			{
				super();

				this.thumb.owner = this;
				this.thumb.digit = "thumb";
				this.index.owner = this;
				this.index.digit = "index";
				this.middle.owner = this;
				this.middle.digit = "middle";
				this.ring.owner = this;
				this.ring.digit = "ring";
				this.pinky.owner = this;
				this.pinky.digit = "pinky";

				this.base.interactive = true;
				this.base.cursor = 'pointer';
				this.base.on('pointertap', () => this.owner.toggleFacing(this));
			}
		}
	}
	art.lib.BackHand = mixFacing(art.lib.BackHand);
	art.lib.ForeHand = mixFacing(art.lib.ForeHand);

	function mixHand(hand: typeof art.lib.Hand)
	{
		return class extends hand implements Hand
		{
			constructor()
			{
				super();

				(this.fore as any).owner = this;
				(this.back as any).owner = this;

				this.toggleFacing(this.fore);
			}

			public toggleFinger(digit:Digit):void
			{
				const frame:number = this.fore[digit].currentFrame;
				this.fore[digit].gotoAndStop(frame == 0 ? 1 : 0);
				this.back[digit].gotoAndStop(frame == 0 ? 1 : 0);
			}

			public toggleFacing(facing:any):void
			{
				this.fore.visible = facing != this.fore;
				this.back.visible = facing != this.back;
			}
		}
	}
	art.lib.Hand = mixHand(art.lib.Hand);

	await new Promise(resolve => scene.load(art as any, resolve));

	(window as any).stage = scene.instance;
}

main();