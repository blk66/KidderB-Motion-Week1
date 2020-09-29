

import {gsap} from "gsap";
import {greenBallAnimation} from './greenBall.js';
import {blueBallAnimation} from './blueBall.js';
import {yellowBallAnimation} from './yellowBall.js';



var mainTL = gsap.timeline();

mainTL.add(greenBallAnimation())

        .add(blueBallAnimation())
       
        .add(yellowBallAnimation())
        