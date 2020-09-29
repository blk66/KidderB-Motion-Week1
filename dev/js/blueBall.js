import {gsap} from "gsap";

import {boxSpeed} from "./animationSpeed.js"


export function blueBallAnimation(){
    var tl = gsap.timeline();

    tl.to(".blue-ball",{duration: boxSpeed, y:200 })
      .to(".blue-ball",{duration: .5, x:-2000 })
        
    return tl;
}