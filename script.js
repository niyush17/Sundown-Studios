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



function loaderAnimation(){
    var loader = document.querySelector("#loader")
        setTimeout(function(){
    loader.style.top = "-100%"
    },4200)
}
loaderAnimation()


function page4Animation(){
    var elemc = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemc.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })

    elemc.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })

    var elems =  document.querySelectorAll(".elem")
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
page4Animation()


function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
    
}
swiperAnimation()



function menuAnimation(){
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click",function(){
        if (flag == 0){
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }
        else{
            full.style.top = "-150%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
menuAnimation()




