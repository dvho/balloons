let count = 0;
let score = 0;
const yourScore = document.getElementById('scoreboard');
const pop = document.getElementById('burst');
const b1 = document.getElementById('balloon__01');
const b2 = document.getElementById('balloon__02');
const b3 = document.getElementById('balloon__03');
const b4 = document.getElementById('balloon__04');
const b5 = document.getElementById('balloon__05');
const b6 = document.getElementById('balloon__06');
const b7 = document.getElementById('balloon__07');
const b8 = document.getElementById('balloon__08');
const b9 = document.getElementById('balloon__09');
const b10 = document.getElementById('balloon__10');
const b11 = document.getElementById('balloon__11');
const b12 = document.getElementById('balloon__12');
const b13 = document.getElementById('balloon__13');
const b14 = document.getElementById('balloon__14');
const b15 = document.getElementById('balloon__15');
const b16 = document.getElementById('balloon__16');
const b17 = document.getElementById('balloon__17');
const b18 = document.getElementById('balloon__18');
const b19 = document.getElementById('balloon__19');
const b20 = document.getElementById('balloon__20');
const b21 = document.getElementById('balloon__21');
const b22 = document.getElementById('balloon__22');
const b23 = document.getElementById('balloon__23');
const b24 = document.getElementById('balloon__24');
const b25 = document.getElementById('balloon__25');
const b26 = document.getElementById('balloon__26');
const b27 = document.getElementById('balloon__27');
const b28 = document.getElementById('balloon__28');
const b29 = document.getElementById('balloon__29');
const b30 = document.getElementById('balloon__30');
const b31 = document.getElementById('balloon__31');
const b32 = document.getElementById('balloon__32');
const b33 = document.getElementById('balloon__33');
const b34 = document.getElementById('balloon__34');
const b35 = document.getElementById('balloon__35');
const b36 = document.getElementById('balloon__36');
const b37 = document.getElementById('balloon__37');
const b38 = document.getElementById('balloon__38');
const b39 = document.getElementById('balloon__39');
const b40 = document.getElementById('balloon__40');
const b41 = document.getElementById('balloon__41');
const b42 = document.getElementById('balloon__42');
const b43 = document.getElementById('balloon__43');
const b44 = document.getElementById('balloon__44');
const b45 = document.getElementById('balloon__45');
const b46 = document.getElementById('balloon__46');
const b47 = document.getElementById('balloon__47');
const b48 = document.getElementById('balloon__48');
const b49 = document.getElementById('balloon__49');
const b50 = document.getElementById('balloon__50');






//FIRE UP EVENT LISTENERS ON CLICK AND TOUCHSTART DYNAMICALLY FOR ALL 50 OF THE BALLOONS, AND ON MOUSEMOVE FOR X AND Y COORDINATES
(() => {

    let explosionSwitcher = 1;

    document.addEventListener(`click`, (e) => { //Looping through mousemove and touchstart to add event listeners to document to get coordinates is giving undefined values for x and y.
        x = e.clientX;
        y = e.clientY;
    });

    document.addEventListener(`mousemove`, (e) => { //Looping through mousemove and touchstart to add event listeners to document to get coordinates is giving undefined values for x and y.
        x = e.clientX;
        y = e.clientY;
    });

    for (i = 1; i < 51; i++) {
        let balloonNumber = eval(`b${i}`);
        [`click`].forEach((e) => {
            balloonNumber.addEventListener(e, () => {
                let balloonDiameter = parseInt(balloonNumber.style.width.split(`p`)[0]); //Get the balloon's diameter.
                explosionSwitcher = (explosionSwitcher + 1) % 2; //Alternate between 0 and 1 to switch between two identical animations.
                score += 1; //Update the score.
                yourScore.textContent = score; //Display score.
                pop.style.left = `${x - balloonDiameter/2}px`; //Position the explosion.
                pop.style.top = `${y - balloonDiameter/2}px`; //Position the explosion.
                pop.style.zIndex = balloonNumber.style.zIndex; //Set the zIndex of the explosion to that of the balloon.
                pop.style.width = balloonNumber.style.width; //Set the dimentions of the explosion.
                pop.style.height = balloonNumber.style.height; //Set the dimentions of the explosion.
                pop.style.boxShadow = `0 0 ${balloonNumber.style.width} ${balloonNumber.style.height} ${balloonNumber.style.backgroundColor}, inset 0 0 ${balloonNumber.style.width} ${balloonNumber.style.height} ${balloonNumber.style.backgroundColor}`; //Final explosion position looks like this, note that a) balloon width and height are the same so I didn't necessarily need to refeerence both here, either one or the other would have worked, and b) those values (that value) being used in place of both blur and spread radii is not a mistake, it just so happens that the value dynamically works perfectly for blur and spread.
                pop.style.animation = `explosion${explosionSwitcher} ${balloonDiameter * .003}s linear`; //Explode for a duration commensurate with balloon diameter.
                setTimeout(()=> {
                    balloonNumber.style.animation = ``; //Terminate balloon animation.
                    balloonNumber.style.zIndex = `-1`; //After the explosion recess the (now phantom) balloons because they seem occasionally to conflict with existing balloons.
                    //pop.style.animation = ``; //Terminate explosion animation (precautionary).
                    pop.style.zIndex = `-1`; //After the explosion recess the (now phantom) explosions because they seem occasionally to conflict with existing balloons.
                    //pop.style.boxShadow = ``; //Make the shadow (i.e. the explosion) nonexistent since it will otherwise occasionally reappear on mobile Safari.
                }, balloonDiameter * 3);
            });
        })
    }
})();


//BALLOON GENERATOR
balloons = (ascent, color, size, speed, zIndex) => {

    let balloonNumber = eval(`b${count}`); //Use eval to convert the template string to the desired element as delineated in the const definitions.

    balloonNumber.style.background = `radial-gradient(circle at ${size/1.4}px ${size}px, #efefff, ${color})`;
    balloonNumber.style.backgroundColor = `${color}`;
    balloonNumber.style.bottom = `${-2 * size}px`;
    balloonNumber.style.left = `-${size}px`;
    balloonNumber.style.height = `${2 * size}px`;
    balloonNumber.style.width = `${2 * size}px`;
    balloonNumber.style.boxShadow = `${size}px ${size}px 0 -${size - 1}px #000, ${size + 1}px ${size + 1}px 0 -${size - 1}px #000, ${size + 2}px ${size + 2}px 0 -${size - 1}px #000, ${size + 3}px ${size + 3}px 0 -${size - 1}px #000, ${size + 4}px ${size + 4}px 0 -${size - 1}px #000, ${size + 5}px ${size + 5}px 0 -${size - 1}px #000, ${size + 6}px ${size + 6}px 0 -${size - 1}px #000, ${size + 7}px ${size + 7}px 0 -${size - 1}px #000, ${size + 8}px ${size + 8}px 0 -${size - 1}px #000, ${size + 9}px ${size + 9}px 0 -${size - 1}px #000, ${size + 10}px ${size + 10}px 0 -${size - 1}px #000, ${size + 11}px ${size + 11}px 0 -${size - 1}px #000, ${size + 12}px ${size + 12}px 0 -${size - 1}px #000, ${size + 13}px ${size + 13}px 0 -${size - 1}px #000, ${size + 14}px ${size + 14}px 0 -${size - 1}px #000, ${size + 15}px ${size + 15}px 0 -${size - 1}px #000, ${size + 16}px ${size + 16}px 0 -${size - 1}px #000, ${size + 17}px ${size + 17}px 0 -${size - 1}px #000, ${size + 18}px ${size + 18}px 0 -${size - 1}px #000, ${size + 19}px ${size + 19}px 0 -${size - 1}px #000, ${size + 20}px ${size + 20}px 0 -${size - 1}px #000, ${size + 21}px ${size + 21}px 0 -${size - 1}px #000, ${size + 22}px ${size + 22}px 0 -${size - 1}px #000, ${size + 23}px ${size + 23}px 0 -${size - 1}px #000, ${size + 24}px ${size + 24}px 0 -${size - 1}px #000, ${size + 25}px ${size + 25}px 0 -${size - 1}px #000, ${size + 26}px ${size + 26}px 0 -${size - 1}px #000, ${size + 27}px ${size + 27}px 0 -${size - 1}px #000, ${size + 28}px ${size + 28}px 0 -${size - 1}px #000, ${size + 29}px ${size + 29}px 0 -${size - 1}px #000, ${size + 30}px ${size + 30}px 0 -${size - 1}px #000, ${size + 31}px ${size + 31}px 0 -${size - 1}px #000, ${size + 32}px ${size + 32}px 0 -${size - 1}px #000, ${size + 33}px ${size + 33}px 0 -${size - 1}px #000, ${size + 34}px ${size + 34}px 0 -${size - 1}px #000, ${size + 35}px ${size + 35}px 0 -${size - 1}px #000, ${size + 36}px ${size + 36}px 0 -${size - 1}px #000, ${size + 37}px ${size + 37}px 0 -${size - 1}px #000, ${size + 38}px ${size + 38}px 0 -${size - 1}px #000, ${size + 39}px ${size + 39}px 0 -${size - 1}px #000, ${size + 40}px ${size + 40}px 0 -${size - 1}px #000, ${size + 41}px ${size + 41}px 0 -${size - 1}px #000, ${size + 42}px ${size + 42}px 0 -${size - 1}px #000, ${size + 43}px ${size + 43}px 0 -${size - 1}px #000, ${size + 44}px ${size + 44}px 0 -${size - 1}px #000, ${size + 45}px ${size + 45}px 0 -${size - 1}px #000, ${size + 46}px ${size + 46}px 0 -${size - 1}px #000, ${size + 47}px ${size + 47}px 0 -${size - 1}px #000, ${size + 48}px ${size + 48}px 0 -${size - 1}px #000, ${size + 49}px ${size + 49}px 0 -${size - 1}px #000, ${size + 50}px ${size + 50}px 0 -${size - 1}px #000, ${size + 51}px ${size + 51}px 0 -${size - 1}px #000, ${size + 52}px ${size + 52}px 0 -${size - 1}px #000, ${size + 53}px ${size + 53}px 0 -${size - 1}px #000, ${size + 54}px ${size + 54}px 0 -${size - 1}px #000, ${size + 55}px ${size + 55}px 0 -${size - 1}px #000, ${size + 56}px ${size + 56}px 0 -${size - 1}px #000, ${size + 57}px ${size + 57}px 0 -${size - 1}px #000, ${size + 58}px ${size + 58}px 0 -${size - 1}px #000, ${size + 59}px ${size + 59}px 0 -${size - 1}px #000, ${size + 60}px ${size + 60}px 0 -${size - 1}px #000, ${size + 61}px ${size + 61}px 0 -${size - 1}px #000, ${size + 62}px ${size + 62}px 0 -${size - 1}px #000, ${size + 63}px ${size + 63}px 0 -${size - 1}px #000, ${size + 64}px ${size + 64}px 0 -${size - 1}px #000, ${size + 65}px ${size + 65}px 0 -${size - 1}px #000, ${size + 66}px ${size + 66}px 0 -${size - 1}px #000, ${size + 67}px ${size + 67}px 0 -${size - 1}px #000, ${size + 68}px ${size + 68}px 0 -${size - 1}px #000, ${size + 69}px ${size + 69}px 0 -${size - 1}px #000, ${size + 70}px ${size + 70}px 0 -${size - 1}px #000, ${size + 71}px ${size + 71}px 0 -${size - 1}px #000, ${size + 72}px ${size + 72}px 0 -${size - 1}px #000, ${size + 73}px ${size + 73}px 0 -${size - 1}px #000, ${size + 74}px ${size + 74}px 0 -${size - 1}px #000, ${size + 75}px ${size + 75}px 0 -${size - 1}px #000, ${size + 76}px ${size + 76}px 0 -${size - 1}px #000, ${size + 77}px ${size + 77}px 0 -${size - 1}px #000, ${size + 78}px ${size + 78}px 0 -${size - 1}px #000, ${size + 79}px ${size + 79}px 0 -${size - 1}px #000, ${size + 80}px ${size + 80}px 0 -${size - 1}px #000, ${size + 81}px ${size + 81}px 0 -${size - 1}px #000, ${size + 82}px ${size + 82}px 0 -${size - 1}px #000, ${size + 83}px ${size + 83}px 0 -${size - 1}px #000, ${size + 84}px ${size + 84}px 0 -${size - 1}px #000, ${size + 85}px ${size + 85}px 0 -${size - 1}px #000, ${size + 86}px ${size + 86}px 0 -${size - 1}px #000, ${size + 87}px ${size + 87}px 0 -${size - 1}px #000, ${size + 88}px ${size + 88}px 0 -${size - 1}px #000, ${size + 89}px ${size + 89}px 0 -${size - 1}px #000, ${size + 90}px ${size + 90}px 0 -${size - 1}px #000, ${size + 91}px ${size + 91}px 0 -${size - 1}px #000, ${size + 92}px ${size + 92}px 0 -${size - 1}px #000, ${size + 93}px ${size + 93}px 0 -${size - 1}px #000, ${size + 94}px ${size + 94}px 0 -${size - 1}px #000, ${size + 95}px ${size + 95}px 0 -${size - 1}px #000, ${size + 96}px ${size + 96}px 0 -${size - 1}px #000, ${size + 97}px ${size + 97}px 0 -${size - 1}px #000, ${size + 98}px ${size + 98}px 0 -${size - 1}px #000, ${size + 99}px ${size + 99}px 0 -${size - 1}px #000, ${size + 100}px ${size + 100}px 0 -${size - 1}px #000, ${size + 101}px ${size + 101}px 0 -${size - 1}px #000, ${size + 102}px ${size + 102}px 0 -${size - 1}px #000, ${size + 103}px ${size + 103}px 0 -${size - 1}px #000, ${size + 104}px ${size + 104}px 0 -${size - 1}px #000, ${size + 105}px ${size + 105}px 0 -${size - 1}px #000, ${size + 106}px ${size + 106}px 0 -${size - 1}px #000, ${size + 107}px ${size + 107}px 0 -${size - 1}px #000, ${size + 108}px ${size + 108}px 0 -${size - 1}px #000, ${size + 109}px ${size + 109}px 0 -${size - 1}px #000, ${size + 110}px ${size + 110}px 0 -${size - 1}px #000, ${size + 111}px ${size + 111}px 0 -${size - 1}px #000, ${size + 112}px ${size + 112}px 0 -${size - 1}px #000, ${size + 113}px ${size + 113}px 0 -${size - 1}px #000, ${size + 114}px ${size + 114}px 0 -${size - 1}px #000, ${size + 115}px ${size + 115}px 0 -${size - 1}px #000, ${size + 116}px ${size + 116}px 0 -${size - 1}px #000, ${size + 117}px ${size + 117}px 0 -${size - 1}px #000, ${size + 118}px ${size + 118}px 0 -${size - 1}px #000, ${size + 119}px ${size + 119}px 0 -${size - 1}px #000, ${size + 120}px ${size + 120}px 0 -${size - 1}px #000, ${size + 121}px ${size + 121}px 0 -${size - 1}px #000, ${size + 122}px ${size + 122}px 0 -${size - 1}px #000, ${size + 123}px ${size + 123}px 0 -${size - 1}px #000, ${size + 124}px ${size + 124}px 0 -${size - 1}px #000, ${size + 125}px ${size + 125}px 0 -${size - 1}px #000, ${size + 126}px ${size + 126}px 0 -${size - 1}px #000, ${size + 127}px ${size + 127}px 0 -${size - 1}px #000, ${size + 128}px ${size + 128}px 0 -${size - 1}px #000, ${size + 129}px ${size + 129}px 0 -${size - 1}px #000`;
    balloonNumber.style.animation = `ascend${ascent} ${speed}s linear`;
    balloonNumber.style.zIndex = `${zIndex}`;
}


(control = () => {

    let timer = Math.ceil(Math.random() * 1000);
    let ascent = Math.ceil(Math.random() * 41); //Balloon will randomly launch from 1 of 40 different positions.
    let color = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`
    let size = (Math.ceil(Math.random() * 150)) + 50;
    let speed = (Math.random() * 6) + 7;
    let zIndex = Math.ceil(Math.random() * 999);

    if (count <= 50) { //Advance count by 1...
        count += 1;
    }
    if (count > 50) { //...but reset after it hits 50.
        count = 1;
    }

    balloons(ascent, color, size, speed, zIndex);
    setTimeout(control, timer);

})();
