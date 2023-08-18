

gsap.to('.nav', {
    backgroundColor: '#000',
    duration: 0.5,
    height: '120px',
    scrollTrigger: {
        trigger: '.nav', 
        scroller: 'body',
        markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1,
    },
});


gsap.to('.main', {
    backgroundColor: '#d7d3d3',
    scrollTrigger: {
        trigger: '.main',
        scroller: 'body', 
        markers: true,
        start: 'top -25%',
        end: 'top -80%',
        scrub: 2
    },
    position: 'relative',
    // backgroundColor: 'rgba(0, 0, 0, 0.426)'

});

