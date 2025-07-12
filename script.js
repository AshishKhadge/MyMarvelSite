
var cur = document.querySelector("#cursor")
var blurr = document.querySelector("#cursorBlur")
var elem = document.querySelectorAll("#nav h4")

document.addEventListener("mousemove", function (dets) {
    cur.style.left = dets.x + "px"
    cur.style.top = dets.y + "px"
    blurr.style.left = dets.x - 150 + "px"   //  to fix the position of the blur cursor
    blurr.style.top = dets.y - 150 + "px"

})

elem.forEach(function (h4all) {
    h4all.addEventListener("mouseenter", function () {
        cur.style.scale = 2
        cur.style.border = "1px solid #fff"
        cur.style.backgroundColor = "transparent"
        elem.style.color = "red"
    })
    h4all.addEventListener("mouseleave", function () {
        cur.style.scale = 1;
        cur.style.border = "0px solid red";
        cur.style.backgroundColor = "red";
    });
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {    // Is used for smooth scrolling
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 3,
    }
})

gsap.from("#aboutus img,#content-aboutus", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
    }
})

gsap.from(".cards", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    stagger:0.1,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
    }
})
gsap.from("#colen1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colen1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});
gsap.from("#colen2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colen1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});



// ImageSet
const imageSet = ["./assets/Spiderman.jpg",
    "./assets/Thor.jpg",
    "./assets/BlackPanther.jpg",
    "./assets/Captain.jpg",
    "./assets/DrStrange.jpg",
    "./assets/Hulk.jpg",
    "./assets/IronMan.jpg",
    "./assets/Wanda.jpg",
    "./assets/Deadpool.jpg",
    "./assets/Loki.jpg",
    "./assets/Venom.jpg",
    "./assets/Rocket.jpg",
    "./assets/Wolverine.jpg",
    "./assets/Groot.jpg",
    "./assets/Widow.jpg"
]
window.onload = function () {
    const randomIndex1 = Math.floor(Math.random() * imageSet.length);
    let randomIndex2;

    // Ensure the second index is different
    do {
        randomIndex2 = Math.floor(Math.random() * imageSet.length);
    } while (randomIndex2 === randomIndex1);

    const selectedImage1 = imageSet[randomIndex1];
    const selectedImage2 = imageSet[randomIndex2];

    document.querySelector(".randomImage1").src = selectedImage1;
    document.querySelector(".randomImage2").src = selectedImage2;
};
