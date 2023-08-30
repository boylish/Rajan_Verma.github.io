const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


gsap.from("#herocontent h6",{
    x:-100,
    duration:2,
    //  delay:0.5,
    opacity:0,
    // repeat:-1,
    stagger:0.5

})

gsap.from("#ul a",{
    y:-100,
    duration:2,
     delay:0.2,
    opacity:0,

})

gsap.from("#heroimg ",{
     x:100,
    // scale:1.5,
    duration:2,
    // delay:1,
     opacity:0,
    // repeat:-1,
    // yoyo:true

})

gsap.from("#btn ",{
    // x:100,
    scale:1.2,
    duration:0.8,
    // delay:1,
    // opacity:0,
    repeat:-1,
    yoyo:true

})

gsap.from("#page2 #mineimg",{
    x:-100,
    opacity:0,
    duration:6,
    // scrollTrigger:"#page2 #mineimg"
    scrollTrigger:{
        trigger:"#page2 #mineimg",
        scroller:"#main",
        scrub:4
    }
})
let t = document.querySelector('#name');
let naam = "Rajan Verma "
let i = 1;

const type = () => {
    let new_t = naam.slice(0,i);
    t.innerText = new_t;

    // i > naam.length ? i = 1 : i++;
    i++;

    setTimeout(() => type(), 150)
}

type();

let title = document.querySelector('#about');
let name = "I'm an information technology engineering student on a continuous quest for new skills. Driven by a passion for technology, I'm dedicated to enriching my expertise. In the ever-evolving IT realm, I embrace learning opportunities to stay relevant and competitive. With a relentless pursuit of knowledge, I aim to not only excel in my studies but also prepare myself for the dynamic challenges of the tech industry."
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;

    // index > name.length ? index = 1 : index++;
    index++;

    setTimeout(() => typeWriter(), 50)
}

typeWriter();

        //    NAVBAR BUTTON


const mob_navbtn=document.querySelector(".navbtndiv");
const mob_nav=document.querySelector(".nav");

const togglenavbar= ()=>{
    // alert("hello ffff");
    mob_nav.classList.toggle("active");
  
};

mob_navbtn.addEventListener("click", ()=>togglenavbar());