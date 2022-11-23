var controller1 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMGS",
    triggerHook: 0.3,
    offset: -600,
    reverse: true 
})
.setClassToggle("#security", "enlarge") // add class toggle
.addTo(controller1);

var controller2 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMGS",
    triggerHook: 0.3,
    offset: -600,
    reverse: true 
})
.setClassToggle("#desk", "enlarge") // add class toggle
.addTo(controller2);

var controller3 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMGS",
    triggerHook: 0.3,
    offset: -600,
    reverse: true 
})
.setClassToggle("#video1", "enlarge") // add class toggle
.addTo(controller3);

var controller4 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMGS",
    triggerHook: 0.3,
    offset: -600,
    reverse: true 
})
.setClassToggle("#video5", "enlarge") // add class toggle
.addTo(controller4);

var controller5 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMGS",
    triggerHook: 0.3,
    offset: -600,
    reverse: true 
})
.setClassToggle("#video6", "enlarge") // add class toggle
.addTo(controller5);

var controller6 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMGS",
    triggerHook: 0.3,
    offset: -600,
    reverse: true 
})
.setClassToggle("#video2", "enlarge") // add class toggle
.addTo(controller6);

var controller7 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMGS",
    triggerHook: 0.3,
    offset: -600,
    reverse: true 
})
.setClassToggle("#video3", "enlarge") // add class toggle
.addTo(controller7);

var controller8 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#IMGS",
    triggerHook: 0.3,
    offset: -600,
    reverse: true 
})
.setClassToggle("#video4", "enlarge") // add class toggle
.addTo(controller8);

let cameras = document.getElementById('cameras');
let walls = document.getElementById('walls');
let floor = document.getElementById('floor');
let text = document.getElementById('text');

window.addEventListener('scroll', function() {

    let YScrollvalue = window.scrollY;

    cameras.style.bottom = YScrollvalue * 1.4 + 'px';
    walls.style.bottom = YScrollvalue * 1.2 + 'px';
    floor.style.bottom = YScrollvalue * 1.2 + 'px';
    text.style.bottom = YScrollvalue *  + 1.5 + 'px';
})