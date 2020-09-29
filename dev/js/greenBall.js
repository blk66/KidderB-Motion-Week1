import {gsap} from "gsap";
//import {boxSpeed} from "animationSpeed.js";

export function greenBallAnimation(){
    var tl = gsap.timeline();
    tl.to(".green-ball",{duration: 1, y: 100})
    .to(".green-ball",{duration: 1, alpha: 0})
    return tl;
}