import * as animate from 'pixi-animate';
declare class hand_base extends animate.Container {}
declare class thumb_extended extends animate.Container {}
declare class thumb_folded extends animate.Container {}
declare class BackThumb extends animate.MovieClip {}
declare class index_extended extends animate.Container {}
declare class index_folded extends animate.Container {}
declare class BackIndex extends animate.MovieClip {}
declare class middle_extended extends animate.Container {}
declare class middle_folded extends animate.Container {}
declare class BackMiddle extends animate.MovieClip {}
declare class ring_extended extends animate.Container {}
declare class ring_folded extends animate.Container {}
declare class BackRing extends animate.MovieClip {}
declare class pinky_extended extends animate.Container {}
declare class pinky_folded extends animate.Container {}
declare class BackPinky extends animate.MovieClip {}
declare class BackHand extends animate.Container {
    pinky: BackPinky;
    ring: BackRing;
    middle: BackMiddle;
    index: BackIndex;
    thumb: BackThumb;
    base: hand_base;
}
declare class thumb_extended_1 extends animate.Container {}
declare class thumb_folded_1 extends animate.Container {}
declare class ThumbFore extends animate.MovieClip {}
declare class index_extended_1 extends animate.Container {}
declare class index_folded_1 extends animate.Container {}
declare class ForeIndex extends animate.MovieClip {}
declare class middle_extended_1 extends animate.Container {}
declare class middle_folded_1 extends animate.Container {}
declare class ForeMiddle extends animate.MovieClip {}
declare class ring_extended_1 extends animate.Container {}
declare class ring_folded_1 extends animate.Container {}
declare class ForeRing extends animate.MovieClip {}
declare class pinky_extended_1 extends animate.Container {}
declare class pinky_folded_1 extends animate.Container {}
declare class ForePinky extends animate.MovieClip {}
declare class base_hand extends animate.Container {}
declare class ForeHand extends animate.Container {
    base: base_hand;
    pinky: ForePinky;
    ring: ForeRing;
    middle: ForeMiddle;
    index: ForeIndex;
    thumb: ThumbFore;
}
declare class Hand extends animate.Container {
    fore: ForeHand;
    back: BackHand;
}
declare class Hands extends animate.MovieClip {
    left: Hand;
    right: Hand;
}
interface Lib {
    hand_base: typeof hand_base;
    thumb_extended: typeof thumb_extended;
    thumb_folded: typeof thumb_folded;
    BackThumb: typeof BackThumb;
    index_extended: typeof index_extended;
    index_folded: typeof index_folded;
    BackIndex: typeof BackIndex;
    middle_extended: typeof middle_extended;
    middle_folded: typeof middle_folded;
    BackMiddle: typeof BackMiddle;
    ring_extended: typeof ring_extended;
    ring_folded: typeof ring_folded;
    BackRing: typeof BackRing;
    pinky_extended: typeof pinky_extended;
    pinky_folded: typeof pinky_folded;
    BackPinky: typeof BackPinky;
    BackHand: typeof BackHand;
    thumb_extended_1: typeof thumb_extended_1;
    thumb_folded_1: typeof thumb_folded_1;
    ThumbFore: typeof ThumbFore;
    index_extended_1: typeof index_extended_1;
    index_folded_1: typeof index_folded_1;
    ForeIndex: typeof ForeIndex;
    middle_extended_1: typeof middle_extended_1;
    middle_folded_1: typeof middle_folded_1;
    ForeMiddle: typeof ForeMiddle;
    ring_extended_1: typeof ring_extended_1;
    ring_folded_1: typeof ring_folded_1;
    ForeRing: typeof ForeRing;
    pinky_extended_1: typeof pinky_extended_1;
    pinky_folded_1: typeof pinky_folded_1;
    ForePinky: typeof ForePinky;
    base_hand: typeof base_hand;
    ForeHand: typeof ForeHand;
    Hand: typeof Hand;
    Hands: typeof Hands;
}
declare const data: Omit<animate.AnimateAsset, 'stage'|'lib'> & {lib: Lib, stage: typeof Hands};
export default data;
