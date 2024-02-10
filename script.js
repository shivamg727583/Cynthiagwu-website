const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function circelMouseMove(){
    window.addEventListener("mousemove",function(dets){
        console.log(dets.clientX,dets.clientY)
    document.querySelector(".cursor").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
circelMouseMove();

 function animatePage1(){
    
var tl=gsap.timeline();
tl.from(".navbar",{
    y:-20,
    opacity:0,
    duration:.8,
    delay:1,
    ease:Expo.easeInOut,
})
.from(".home h1,.home h2,.home h3",{
    y:100,
    opacity:0,
    // ease:Expo.easeInOut,
    duration:1,
    stagger:.5,
})
.from(".div3 .down i",{
    y:20,
    opacity:0,
    duration:.8,
    repeat:-1,
yoyo:true,
ease:Expo.ease
})
.to(".div3 .down i",{
    y:-10,
    opacity:1,
    duration:.8,
    yoyo:1,
    repeat:-1,
    
})
 }

animatePage1();


document.querySelectorAll(".elem").forEach(function(e){
   var rotate=0;
   var diffrot=0;
   
   e.addEventListener("mouseleave",function(dets){
    gsap.to(e.querySelector("img"),{
        opacity:0,
        ease:Power3,
        duration:.5,
    })
   })
   
    e.addEventListener("mousemove",function(details){
   var diff=details.clientY - e.getBoundingClientRect().top;
diffrot=details.clientX - rotate;
rotate=details.clientX;

 
        gsap.to(e.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:details.clientX,
            rotate:gsap.utils.clamp(-20, 20, diffrot*.5),
        })
        
    })

})


