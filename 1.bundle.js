(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{19:function(s,e,d){"use strict";d.r(e);const n={stage:null,background:10354687,width:1150,height:730,framerate:24,totalFrames:1,assets:{Hands:"images/Hands.shapes.txt"},lib:{},shapes:{},textures:{},spritesheets:[],getTexture:function(s){if(n.textures[s])return n.textures[s];const e=n.spritesheets.find(e=>!!e.textures[s]);return e?e.textures[s]:null},setup:function(s){const e=s.MovieClip,d=s.Container,t=s.Graphics;n.lib.hand_base=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[0]);this.addChild(s)}},n.lib.thumb_extended=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[1]);this.addChild(s)}},n.lib.thumb_folded=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[2]);this.addChild(s)}},n.lib.BackThumb=class extends e{constructor(){super({duration:2});const s=new n.lib.thumb_extended,e=(new n.lib.thumb_folded).setTransform(-280.45,-450.25);this.addTimedChild(s,0,1,{0:{x:-280.95,y:-450.45}}).addTimedChild(e,1,1)}},n.lib.index_extended=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[3]);this.addChild(s)}},n.lib.index_folded=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[4]);this.addChild(s)}},n.lib.BackIndex=class extends e{constructor(){super({duration:2});const s=new n.lib.index_extended,e=(new n.lib.index_folded).setTransform(160,76.8);this.addTimedChild(s,0,1,{0:{x:-245.95,y:-420.45}}).addTimedChild(e,1,1)}},n.lib.middle_extended=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[5]);this.addChild(s)}},n.lib.middle_folded=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[6]);this.addChild(s)}},n.lib.BackMiddle=class extends e{constructor(){super({duration:2});const s=new n.lib.middle_extended,e=(new n.lib.middle_folded).setTransform(31.6,-174);this.addTimedChild(s,0,1,{0:{x:-99.95,y:-322.55}}).addTimedChild(e,1,1)}},n.lib.ring_extended=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[7]);this.addChild(s)}},n.lib.ring_folded=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[8]);this.addChild(s)}},n.lib.BackRing=class extends e{constructor(){super({duration:2});const s=new n.lib.ring_extended,e=(new n.lib.ring_folded).setTransform(100,-110.7);this.addTimedChild(s,0,1,{0:{x:-40.95,y:-307.45}}).addTimedChild(e,1,1)}},n.lib.pinky_extended=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[9]);this.addChild(s)}},n.lib.pinky_folded=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[10]);this.addChild(s)}},n.lib.BackPinky=class extends e{constructor(){super({duration:2});const s=new n.lib.pinky_extended,e=(new n.lib.pinky_folded).setTransform(64.05,-164.45);this.addTimedChild(s,0,1,{0:{x:128,y:-97.7}}).addTimedChild(e,1,1)}},n.lib.BackHand=class extends d{constructor(){super();const s=(new n.lib.BackPinky).setTransform(34,9);this[s.name="pinky"]=s;const e=(new n.lib.BackRing).setTransform(63.65,34);this[e.name="ring"]=e;const d=(new n.lib.BackMiddle).setTransform(16,17.1);this[d.name="middle"]=d;const t=(new n.lib.BackIndex).setTransform(48);this[t.name="index"]=t;const a=(new n.lib.BackThumb).setTransform(29,96.7);this[a.name="thumb"]=a;const i=(new n.lib.hand_base).setTransform(-36.25,-276);this[i.name="base"]=i,this.addChild(s,e,d,t,a,i)}},n.lib.thumb_extended_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[11]);this.addChild(s)}},n.lib.thumb_folded_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[12]);this.addChild(s)}},n.lib.ThumbFore=class extends e{constructor(){super({duration:2});const s=new n.lib.thumb_extended_1,e=(new n.lib.thumb_folded_1).setTransform(-550.45,-542.45);this.addTimedChild(s,0,1,{0:{x:-178.45,y:-354.45}}).addTimedChild(e,1,1)}},n.lib.index_extended_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[13]);this.addChild(s)}},n.lib.index_folded_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[14]);this.addChild(s)}},n.lib.ForeIndex=class extends e{constructor(){super({duration:2});const s=new n.lib.index_extended_1,e=(new n.lib.index_folded_1).setTransform(-103.55,-364.05);this.addTimedChild(s,0,1,{0:{x:153.5,y:-461.4}}).addTimedChild(e,1,1)}},n.lib.middle_extended_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[15]);this.addChild(s)}},n.lib.middle_folded_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[16]);this.addChild(s)}},n.lib.ForeMiddle=class extends e{constructor(){super({duration:2});const s=new n.lib.middle_extended_1,e=(new n.lib.middle_folded_1).setTransform(-88.85,-315.4);this.addTimedChild(s,0,1,{0:{x:57.5,y:-485.45}}).addTimedChild(e,1,1)}},n.lib.ring_extended_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[17]);this.addChild(s)}},n.lib.ring_folded_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[18]);this.addChild(s)}},n.lib.ForeRing=class extends e{constructor(){super({duration:2});const s=new n.lib.ring_extended_1,e=(new n.lib.ring_folded_1).setTransform(-63.75,-199.15);this.addTimedChild(s,0,1,{0:{x:-19.5,y:-431.45}}).addTimedChild(e,1,1)}},n.lib.pinky_extended_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[19]);this.addChild(s)}},n.lib.pinky_folded_1=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[20]);this.addChild(s)}},n.lib.ForePinky=class extends e{constructor(){super({duration:2});const s=new n.lib.pinky_extended_1,e=(new n.lib.pinky_folded_1).setTransform(-95.55,-128.8);this.addTimedChild(s,0,1,{0:{x:-121.45,y:-345.4}}).addTimedChild(e,1,1)}},n.lib.base_hand=class extends d{constructor(){super();const s=(new t).drawCommands(n.shapes.Hands[21]);this.addChild(s)}},n.lib.ForeHand=class extends d{constructor(){super();const s=(new n.lib.base_hand).setTransform(-54.95,-351.5);this[s.name="base"]=s;const e=(new n.lib.ForePinky).setTransform(113.95,33.95);this[e.name="pinky"]=e;const d=(new n.lib.ForeRing).setTransform(114,34);this[d.name="ring"]=d;const t=(new n.lib.ForeMiddle).setTransform(114,33);this[t.name="middle"]=t;const a=(new n.lib.ForeIndex).setTransform(114,34.95);this[a.name="index"]=a;const i=(new n.lib.ThumbFore).setTransform(367,72);this[i.name="thumb"]=i,this.addChild(s,e,d,t,a,i)}},n.lib.Hand=class extends d{constructor(){super();const s=(new n.lib.ForeHand).setTransform(-179.6,-362.1);this[s.name="fore"]=s;const e=(new n.lib.BackHand).setTransform(-182.05,-421.85);this[e.name="back"]=e,this.addChild(s,e)}},n.lib.Hands=class extends e{constructor(){super({duration:1,framerate:24});const s=(new n.lib.Hand).setTransform(329.45,729.6,1,1,0,0,3.142);this[s.name="left"]=s;const e=(new n.lib.Hand).setTransform(822.75,731.6);this[e.name="right"]=e,this.addChild(s,e)}},n.stage=n.lib.Hands}};e.default=n}}]);