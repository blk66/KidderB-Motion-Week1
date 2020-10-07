import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

            
    const section2TL = gsap.timeline();
    section2TL.from("#section-2 #one", {duration:.3, alpha:0 });
    section2TL.from("#section-2 #two", {duration:.3, alpha:0 });
    section2TL.from("#section-2 #three", {duration:.3,alpha:0 });
    

export function Section2Animation(){

    ScrollTrigger.create({
        // markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-2",
        start:"top, 50%",
        end: "bottom 50%"
    });
}