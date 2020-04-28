const data = {
    stage: null,
    background: 0x9dffff,
    width: 1150,
    height: 730,
    framerate: 24,
    totalFrames: 1,
    assets: {
        "hand": "images/hand.shapes.txt"
    },
    lib: {},
    shapes: {},
    textures: {},
    spritesheets: [],
    getTexture: function(id) {
    if (data.textures[id]) {
    return data.textures[id];
    }
    const atlas = data.spritesheets.find(atlas => !!atlas.textures[id]);
    return atlas ? atlas.textures[id] : null;
    },
    setup: function(animate) {
    

    const MovieClip = animate.MovieClip;
    const Container = animate.Container;
    const Graphics = animate.Graphics;

    data.lib.hand_base = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[0]);
        this.addChild(instance1);
    }
    }

    data.lib.thumb_extended = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[1]);
        this.addChild(instance1);
    }
    }

    data.lib.thumb_folded = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[2]);
        this.addChild(instance1);
    }
    }

    data.lib.thumb_back = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.thumb_extended();
        const instance2 = new data.lib.thumb_folded()
            .setTransform(-280.45, -450.25);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -280.95,
                    y: -450.45
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.index_extended = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[3]);
        this.addChild(instance1);
    }
    }

    data.lib.index_folded = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[4]);
        this.addChild(instance1);
    }
    }

    data.lib.index_back = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.index_extended();
        const instance2 = new data.lib.index_folded()
            .setTransform(160, 76.8);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -245.95,
                    y: -420.45
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.middle_extended = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[5]);
        this.addChild(instance1);
    }
    }

    data.lib.middle_folded = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[6]);
        this.addChild(instance1);
    }
    }

    data.lib.middle_back = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.middle_extended();
        const instance2 = new data.lib.middle_folded()
            .setTransform(31.6, -174);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -99.95,
                    y: -322.55
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.ring_extended = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[7]);
        this.addChild(instance1);
    }
    }

    data.lib.ring_folded = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[8]);
        this.addChild(instance1);
    }
    }

    data.lib.ring_back = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.ring_extended();
        const instance2 = new data.lib.ring_folded()
            .setTransform(100, -110.7);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -40.95,
                    y: -307.45
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.pinky_extended = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[9]);
        this.addChild(instance1);
    }
    }

    data.lib.pinky_folded = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[10]);
        this.addChild(instance1);
    }
    }

    data.lib.pinky_back = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.pinky_extended();
        const instance2 = new data.lib.pinky_folded()
            .setTransform(64.05, -164.45);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: 128,
                    y: -97.7
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.hand_back = class extends Container {
        constructor() {
        super();
        const instance6 = new data.lib.pinky_back()
            .setTransform(34, 9);
        this[instance6.name = "pinky"] = instance6;
        const instance5 = new data.lib.ring_back()
            .setTransform(63.65, 34);
        this[instance5.name = "ring"] = instance5;
        const instance4 = new data.lib.middle_back()
            .setTransform(16, 17.1);
        this[instance4.name = "middle"] = instance4;
        const instance3 = new data.lib.index_back()
            .setTransform(48);
        this[instance3.name = "index"] = instance3;
        const instance2 = new data.lib.thumb_back()
            .setTransform(29, 96.7);
        this[instance2.name = "thumb"] = instance2;
        const instance1 = new data.lib.hand_base()
            .setTransform(-36.25, -276);
        this[instance1.name = "base"] = instance1;
        this.addChild(instance6, instance5, instance4, instance3, instance2, instance1);
    }
    }

    data.lib.thumb_extended_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[11]);
        this.addChild(instance1);
    }
    }

    data.lib.thumb_folded_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[12]);
        this.addChild(instance1);
    }
    }

    data.lib.thumb_fore = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.thumb_extended_1();
        const instance2 = new data.lib.thumb_folded_1()
            .setTransform(-550.45, -542.45);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -178.45,
                    y: -354.45
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.index_extended_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[13]);
        this.addChild(instance1);
    }
    }

    data.lib.index_folded_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[14]);
        this.addChild(instance1);
    }
    }

    data.lib.index_fore = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.index_extended_1();
        const instance2 = new data.lib.index_folded_1()
            .setTransform(-103.55, -364.05);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: 153.5,
                    y: -461.4
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.middle_extended_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[15]);
        this.addChild(instance1);
    }
    }

    data.lib.middle_folded_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[16]);
        this.addChild(instance1);
    }
    }

    data.lib.middle_fore = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.middle_extended_1();
        const instance2 = new data.lib.middle_folded_1()
            .setTransform(-88.85, -315.4);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: 57.5,
                    y: -485.45
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.ring_extended_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[17]);
        this.addChild(instance1);
    }
    }

    data.lib.ring_folded_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[18]);
        this.addChild(instance1);
    }
    }

    data.lib.ring_fore = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.ring_extended_1();
        const instance2 = new data.lib.ring_folded_1()
            .setTransform(-63.75, -199.15);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -19.5,
                    y: -431.45
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.pinky_extended_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[19]);
        this.addChild(instance1);
    }
    }

    data.lib.pinky_folded_1 = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[20]);
        this.addChild(instance1);
    }
    }

    data.lib.pinky_fore = class extends MovieClip {
        constructor() {
        super({
            duration: 2
        });
        const instance1 = new data.lib.pinky_extended_1();
        const instance2 = new data.lib.pinky_folded_1()
            .setTransform(-95.55, -128.8);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -121.45,
                    y: -345.4
                }
            })
            .addTimedChild(instance2, 1, 1);
    }
    }

    data.lib.base_hand = class extends Container {
        constructor() {
        super();
        const instance1 = new Graphics()
            .drawCommands(data.shapes.hand[21]);
        this.addChild(instance1);
    }
    }

    data.lib.hand_fore = class extends Container {
        constructor() {
        super();
        const instance6 = new data.lib.base_hand()
            .setTransform(-54.95, -351.5);
        this[instance6.name = "base"] = instance6;
        const instance5 = new data.lib.pinky_fore()
            .setTransform(113.95, 33.95);
        this[instance5.name = "pinky"] = instance5;
        const instance4 = new data.lib.ring_fore()
            .setTransform(114, 34);
        this[instance4.name = "ring"] = instance4;
        const instance3 = new data.lib.middle_fore()
            .setTransform(114, 33);
        this[instance3.name = "middle"] = instance3;
        const instance2 = new data.lib.index_fore()
            .setTransform(114, 34.95);
        this[instance2.name = "index"] = instance2;
        const instance1 = new data.lib.thumb_fore()
            .setTransform(367, 72);
        this[instance1.name = "thumb"] = instance1;
        this.addChild(instance6, instance5, instance4, instance3, instance2, instance1);
    }
    }

    data.lib.HandClip = class extends Container {
        constructor() {
        super();
        const instance2 = new data.lib.hand_fore()
            .setTransform(-179.6, -362.1);
        this[instance2.name = "fore"] = instance2;
        const instance1 = new data.lib.hand_back()
            .setTransform(-182.05, -421.85);
        this[instance1.name = "back"] = instance1;
        this.addChild(instance2, instance1);
    }
    }

    data.lib.hand = class extends MovieClip {
        constructor() {
        super({
            duration: 1,
            framerate: 24
        });
        const instance2 = new data.lib.HandClip()
            .setTransform(329.45, 729.6, 1, 1, 0, 0, 3.142);
        const instance1 = new data.lib.HandClip()
            .setTransform(822.75, 731.6);
        this.addChild(instance2, instance1);
    }
    }

    data.stage = data.lib.hand;

    }
};

export default data;