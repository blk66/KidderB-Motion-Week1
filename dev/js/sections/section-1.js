import {gsap} from "gsap";

   

export function Section1Animation(){

gsap.from("#section-1 h1", {duration:1, alpha:0});
gsap.from("#section-1 aside", {duration:.3, x:-500, alpha:0});

}