import {gsap} from "gsap";
import {boxSpeed} from "animationSpeed.js";

export function yellowBallAnimation(){
    var tl = gsap.timeline();
    tl.to(".yellow-ball",{duration: boxSpeed, y: 300})
    .to(".yellow-ball",{duration: boxSpeed, scale:3 })
    return tl;
}
