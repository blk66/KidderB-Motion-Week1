import {gsap} from "gsap";

   

export function Section1Animation(){

gsap.from("#section-1 h1", {duration:1, alpha:0});
gsap.from("#section-1 aside", {duration:.3, y:-500, alpha:0});
gsap.from("#section-1 h3", {duration:1.5, alpha:0});
}