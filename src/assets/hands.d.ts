import * as animate from 'pixi-animate';
import { Texture, Spritesheet } from 'pixi.js';

declare namespace data
{
    /**
     * Background color of the scene, as defined when the asset is published.
     */
    export const background: number;
    /**
     * Width of the scene, as defined when the asset is published.
     */
    export const width: number;
    /**
     * Height of the scene, as defined when the asset is published.
     */
    export const height: number;
    /**
     * Framerate of the scene (frames per second), as defined when the asset is published.
     */
    export const framerate: number;
    /**
     * Total number of frames of the root MovieClip.
     */
    export const totalFrames: number;
    /**
     * Dictionary of paths to shape files and textures, indexed by unique id within the scene file.
     */
    export let assets: { [id: string]: string };
    /**
     * Dictionary of loaded shape instructions for this scene. This is intially an empty object that
     * can be filled by animate.load(), or by a custom loading system. It must be filled before
     * any items are instantiated.
     */
    export let shapes: { [id: string]: animate.DrawCommands[] };
    /**
     * Dictionary of loaded individual images for this scene.This is intially an empty object that
     * will be filled by animate.load(). It will be used by the animate.load() method for
     * getTexture(), and is not needed if getTexture() is overridden.
     */
    export let textures: { [id: string]: Texture };
    /**
     * Dictionary of loaded spritesheet for this scene.This is intially an empty object that
     * will be filled by animate.load(). It will be used by the animate.load() method for
     * getTexture(), and is not needed if getTexture() is overridden.
     */
    export let spritesheets: Spritesheet[];
    /**
     * Function for getting a texture by ID.
     * It can be set to PIXI.Texture.from for global texture atlas.
     */
    export let getTexture: (id: string) => Texture;
    /**
     * Creates classes for each Container and MovieClip within the scene, filling data.lib and
     * setting data.stage.
     */
    export function setup(library: typeof animate): void;
    /**
     * Dictionary of display object constructors used within this scene. This is an empty object
     * before setup() is run, but can be overwritten with a shared library dictionary (before setup() is run).
     */
    export namespace lib
    {
        export class hand_base extends animate.Container {}
        export class thumb_extended extends animate.Container {}
        export class thumb_folded extends animate.Container {}
        export class BackThumb extends animate.MovieClip {}
        export class index_extended extends animate.Container {}
        export class index_folded extends animate.Container {}
        export class BackIndex extends animate.MovieClip {}
        export class middle_extended extends animate.Container {}
        export class middle_folded extends animate.Container {}
        export class BackMiddle extends animate.MovieClip {}
        export class ring_extended extends animate.Container {}
        export class ring_folded extends animate.Container {}
        export class BackRing extends animate.MovieClip {}
        export class pinky_extended extends animate.Container {}
        export class pinky_folded extends animate.Container {}
        export class BackPinky extends animate.MovieClip {}
        export class BackHand extends animate.Container {
            pinky: BackPinky;
            ring: BackRing;
            middle: BackMiddle;
            index: BackIndex;
            thumb: BackThumb;
            base: hand_base;
        }
        export class thumb_extended_1 extends animate.Container {}
        export class thumb_folded_1 extends animate.Container {}
        export class ThumbFore extends animate.MovieClip {}
        export class index_extended_1 extends animate.Container {}
        export class index_folded_1 extends animate.Container {}
        export class ForeIndex extends animate.MovieClip {}
        export class middle_extended_1 extends animate.Container {}
        export class middle_folded_1 extends animate.Container {}
        export class ForeMiddle extends animate.MovieClip {}
        export class ring_extended_1 extends animate.Container {}
        export class ring_folded_1 extends animate.Container {}
        export class ForeRing extends animate.MovieClip {}
        export class pinky_extended_1 extends animate.Container {}
        export class pinky_folded_1 extends animate.Container {}
        export class ForePinky extends animate.MovieClip {}
        export class base_hand extends animate.Container {}
        export class ForeHand extends animate.Container {
            base: base_hand;
            pinky: ForePinky;
            ring: ForeRing;
            middle: ForeMiddle;
            index: ForeIndex;
            thumb: ThumbFore;
        }
        export class Hand extends animate.Container {
            fore: ForeHand;
            back: BackHand;
        }
        export class Hands extends animate.MovieClip {
            left: Hand;
            right: Hand;
        }

    }
    /**
     * Constructor for the root MovieClip. Is null before setup() is run.
     */
    export let stage: typeof lib.Hands;
}
export default data;
