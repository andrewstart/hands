import * as animate from 'pixi-animate';
declare class hand_base extends animate.Container {}
declare class thumb_extended extends animate.Container {}
declare class thumb_folded extends animate.Container {}
declare class thumb_back extends animate.MovieClip {}
declare class index_extended extends animate.Container {}
declare class index_folded extends animate.Container {}
declare class index_back extends animate.MovieClip {}
declare class middle_extended extends animate.Container {}
declare class middle_folded extends animate.Container {}
declare class middle_back extends animate.MovieClip {}
declare class ring_extended extends animate.Container {}
declare class ring_folded extends animate.Container {}
declare class ring_back extends animate.MovieClip {}
declare class pinky_extended extends animate.Container {}
declare class pinky_folded extends animate.Container {}
declare class pinky_back extends animate.MovieClip {}
declare class hand_back extends animate.Container {
    pinky: pinky_back;
    ring: ring_back;
    middle: middle_back;
    index: index_back;
    thumb: thumb_back;
    base: hand_base;
}
declare class thumb_extended_1 extends animate.Container {}
declare class thumb_folded_1 extends animate.Container {}
declare class thumb_fore extends animate.MovieClip {}
declare class index_extended_1 extends animate.Container {}
declare class index_folded_1 extends animate.Container {}
declare class index_fore extends animate.MovieClip {}
declare class middle_extended_1 extends animate.Container {}
declare class middle_folded_1 extends animate.Container {}
declare class middle_fore extends animate.MovieClip {}
declare class ring_extended_1 extends animate.Container {}
declare class ring_folded_1 extends animate.Container {}
declare class ring_fore extends animate.MovieClip {}
declare class pinky_extended_1 extends animate.Container {}
declare class pinky_folded_1 extends animate.Container {}
declare class pinky_fore extends animate.MovieClip {}
declare class base_hand extends animate.Container {}
declare class hand_fore extends animate.Container {
    base: base_hand;
    pinky: pinky_fore;
    ring: ring_fore;
    middle: middle_fore;
    index: index_fore;
    thumb: thumb_fore;
}
declare class HandClip extends animate.Container {
    fore: hand_fore;
    back: hand_back;
}
declare class hand extends animate.MovieClip {}
interface Lib {
    hand_base: typeof hand_base;
    thumb_extended: typeof thumb_extended;
    thumb_folded: typeof thumb_folded;
    thumb_back: typeof thumb_back;
    index_extended: typeof index_extended;
    index_folded: typeof index_folded;
    index_back: typeof index_back;
    middle_extended: typeof middle_extended;
    middle_folded: typeof middle_folded;
    middle_back: typeof middle_back;
    ring_extended: typeof ring_extended;
    ring_folded: typeof ring_folded;
    ring_back: typeof ring_back;
    pinky_extended: typeof pinky_extended;
    pinky_folded: typeof pinky_folded;
    pinky_back: typeof pinky_back;
    hand_back: typeof hand_back;
    thumb_extended_1: typeof thumb_extended_1;
    thumb_folded_1: typeof thumb_folded_1;
    thumb_fore: typeof thumb_fore;
    index_extended_1: typeof index_extended_1;
    index_folded_1: typeof index_folded_1;
    index_fore: typeof index_fore;
    middle_extended_1: typeof middle_extended_1;
    middle_folded_1: typeof middle_folded_1;
    middle_fore: typeof middle_fore;
    ring_extended_1: typeof ring_extended_1;
    ring_folded_1: typeof ring_folded_1;
    ring_fore: typeof ring_fore;
    pinky_extended_1: typeof pinky_extended_1;
    pinky_folded_1: typeof pinky_folded_1;
    pinky_fore: typeof pinky_fore;
    base_hand: typeof base_hand;
    hand_fore: typeof hand_fore;
    HandClip: typeof HandClip;
    hand: typeof hand;
}
declare const data: Omit<animate.AnimateAsset, 'stage'|'lib'> & {lib: Lib, stage: typeof hand};
export default data;
