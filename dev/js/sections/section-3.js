import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//x: left | center | right
//y: top | center | bottom

gsap.set(".scale-left", {transformOrigin: "left"});


const section3TL = gsap.timeline();
section3TL.from("#section-3 aside",{duration:0.1,alpha:0})
            .from("#section-3-text #one",{duration:.1,x:600, alpha:0 },"-=0.25" )
            .from("#section-3-text #two",{duration:0.1,x:600, alpha:0 },"-=0.25" )
            .from("#section-3-text #three",{duration:0.1,x:600, alpha:0 },"-=0.25" )
            

export function Section3Animation(){

    ScrollTrigger.create({
        //markers: true,
        animation: section3TL,
        toggleActions: "none none none none",
        scrub: 1,
        trigger: "#section-3",
        start:"top, 70%",
        end: "bottom 70%"
    });
}














// import {gsap} from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export function section3Animation(){
    
// const section3TL = gsap.timeline();
// section3TL.from("#section-3-image aside", {duration:.7, x:-500, alpha:0 });
            



//     ScrollTrigger.create({
//         markers: true,
//         animation: section3TL,
//         toggleActions: "play none none none",
//         trigger: "#section-3",
//         start:"top, 50%",
//         end: "bottom 50%"
//     });
// }








