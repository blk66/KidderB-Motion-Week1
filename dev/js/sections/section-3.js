import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//x: left | center | right
//y: top | center | bottom

gsap.set(".scale-left", {transformOrigin: "left"});


const section3TL = gsap.timeline();
section3TL.from("#section-3 aside",{duration:.3,alpha:0})
            .from("#section-3-text #one",{duration:.2,x:600, alpha:0 },"-=0.25" )
            .from("#section-3-text #two",{duration:0.2,x:600, alpha:0 },"-=0.25" )
            .from("#section-3-text #three",{duration:0.2,x:600, alpha:0 },"-=0.25" )
            

export function Section3Animation(){

    ScrollTrigger.create({
        markers: true,
        animation: section3TL,
        toggleActions: "none none none none",
        scrub: 0,
        trigger: "#section-3",
        start:"top 50%",
        end: "middle"
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








