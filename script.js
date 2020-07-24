// custom cursor
let cursor = document.querySelector(".custom-cursor");
let customCursorPosition = {x: 0, y: 0 };
let mousePosition = { x: customCursorPosition.x, y: customCursorPosition.y};

//create a setter to use for setting the position of the custom cursor for every mouseaction
let setXCoord = gsap.quickSetter(cursor, "x", "px");
let setYCoord = gsap.quickSetter(cursor, "y", "px");  

window.addEventListener("mousemove", e => {    
    mousePosition.x = e.x;
    mousePosition.y = e.y;  
});

gsap.ticker.add(() => {
    customCursorPosition.x += mousePosition.x - customCursorPosition.x;
    customCursorPosition.y += mousePosition.y - customCursorPosition.y;
    setXCoord(customCursorPosition.x);
    setYCoord(customCursorPosition.y);
});


//tween for hovering
let cursorTween = gsap.timeline({paused: true})
.to('.custom-cursor', {duration:0.3, width:60, height:60, ease:"power1"})
.to('.svg', {duration:0.2, opacity:1, display: "block", ease:"power1", delay:"-0.5"})

const onMouseEnterHandler = () => {
    cursorTween.play();
}
const onMouseLeaveHandler = () => {
    cursorTween.reverse();
}


videos = gsap.utils.toArray("video")
links = gsap.utils.toArray(".link")

links.forEach((link, i) => {
    link.addEventListener('mouseenter', onMouseEnterHandler)
    // link.addEventListener('mouseleave', onMouseLeaveHandler)
})
let currentVideo = videos[0];

let tl = gsap.timeline();
    videos.forEach((video, i) => {
        ScrollTrigger.create({
            id:i,
          markers:true,
          start: (150*i),
          end: 150*(i+1),
          // when a new section activates (from either direction), set the section accordinglyl.
          onToggle: trigger => trigger.isActive && setVideo(video)
        });
      });
    
      // to switch videos
      function setVideo(newVideo) {
        if (newVideo !== currentVideo) {
            console.log(videos.indexOf(currentVideo), videos.indexOf(newVideo))
            tl.to(currentVideo, {scale: 1.5, display:'none', autoAlpha: 0,duration:0.7,filter: 'blur(50px)'})
            .to(newVideo, {scale: 1,display:"block", autoAlpha: 1, filter: 'blur(0px)', delay:'-0.7'});
            gsap.to('.scroll-head', {y:((videos.indexOf(currentVideo))*-96),duration:0.7, ease:"power1"})
            gsap.to('.scroll-number', {y:((videos.indexOf(currentVideo))*-32),duration:0.7, ease:"power1"})
            gsap.to('.list-names', {y:((videos.indexOf(currentVideo)+1)*-45),duration:0.7, ease:"power1"})
            currentVideo = newVideo;
          }
      }
      
      // handles the infinite part, wrapping around at either end....
      ScrollTrigger.create({
        start: 0,
        end: () => ScrollTrigger.maxScroll(window),
        onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window)),
        onLeave: self => self.scroll(0)
      });

gsap.to('.list-names', {y:"-45", ease:"power1"})
gsap.fromTo('.ruler', {width:"10%"}, {width:"100%", duration:3, ease:'power1'})
gsap.fromTo('.scroll-number', {opacity:0}, {opacity:1, duration:2, ease:'power1'})
gsap.fromTo('.scroll-head', {opacity:0}, {opacity:1, duration:5})
 gsap.fromTo('.list-names', {opacity:0},{opacity:0.7, duration:4, ease:'power1'})



