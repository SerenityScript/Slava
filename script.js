gsap.to(".introText", {
    text: "Social Media, Online Marketing, Personal Brand, Werbung",
    duration: 4,
    repeat: -1,
    repeatDelay: 4,
    ease: "power1.in",
    yoyo: true,
    delay: 1
})

gsap.from(".werBinIch", { y: -30, duration: 2, delay: 1, opacity: 0 })

gsap.from(".about_me_pic", { y: 40, duration: 3.5, opacity: 0, delay: 0.5 })

const button = document.querySelector('.btnAboutMe');
const aboutMeToggle = document.querySelector('.aboutMeToggle');

button.addEventListener('click', function(){
    aboutMeToggle.classList.toggle('aboutMeToggleBlock');
});


