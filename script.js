gsap.from('.page1-i',{
  y:-100,
  duration:2,
  opacity:0
  
})
gsap.from('#page1-text>h1',{
  scale:70,
  duration:2,
  opacity:0,
  delay:0,
  ease:'slow'
})

gsap.from('#page1-text>h2', {
  x:50,
  y:-50,
  scale: 0,
  duration: 2,
  opacity: 0,
  delay: 1.5,
})

gsap.from('.page1-btn',{
  scale:0,
  duration:2,
  opacity:0
})

gsap.to('#page1-img',{
  y:890,
  x:-100,
  duration:0.5,
  opacity:0.7,
  scale:0.5,
  z:-1,
  rotation:2,
  scrollTrigger: {
      trigger: "#page1-img",
      scroller: "body",
      markers: false,
      start: "100% 35%",
      end: "top -50%",
      scrub:2,
      
    }
  
})


gsap.to('.page2',{
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    markers:false,
    start:"top 100vh",
    end :"top80%"
  }
})

gsap.from('.page21-text ',{
  scale:0,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:'.page21-text',
    scroller:'body',
    markers:false,
    start:'top 95%',
    end:'top 50%',
    scrub:5,
  }
})


gsap.to('.page21-img', {
  y: 360,
  x: 90,
  duration: 1,
  opacity: 1,
  scale: 0.5,
  z: -1,
  rotation: 2,
  scrollTrigger: {
    trigger: ".page21-img",
    scroller: "body",
    markers:false,
    start: "90% center",
    end: "top 40%",
    scrub:5,
    pin:true,

  }

})






gsap.from('.page31-text ',{
  x:-1000,
  duration:0.5,
  opacity:0,
  scrollTrigger:{
    trigger:'.page31-text',
    scroller:'body',
    markers:false,
    start:'top 95%',
    end:'top 50%',
    scrub:5,
  }
})

gsap.from('.page4-text ', {
  x: 1000,
  duration: 0.5,
  opacity: 0,
  delay:1,
  scrollTrigger: {
    trigger: '.page4-text',
    scroller: 'body',
    markers: false,
    start: 'top 95%',
    end: 'top 50%',
    scrub: 5,
  }
})

const page1btn1=document.querySelector('.page1-btn1')
const page1btn2=document.querySelector('.page1-btn2')

const page31btn=document.querySelector('.page31-btn')


page1btn1.addEventListener('click',()=>{
  location.href='/shoping_app/shop.html'
})

page1btn2.addEventListener('click',() => {
  location.href = '/shoping_app/shop.html'
})

page31btn.addEventListener('click', () => {
  location.href = '/shoping_app/shop.html'
})