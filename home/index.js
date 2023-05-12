let left = document.querySelector('.left')
let right = document.querySelector('.right')

let slider = document.querySelector('.slider')

left.addEventListener('click', leftSlider)
right.addEventListener('click', rightSlider)

function leftSlider() {
    slider.style.transform="translateX(0)"
    slider.style.transition=".8s"
}

function rightSlider() {
    slider.style.transform="translateX(-750px)"
    slider.style.transition=".8s"
}


window.sr =ScrollReveal({ reset: true});

sr.reveal("main", {
    origin: "top",
    distance: "20px",
    duration: 1000,
    reset: false
})

sr.reveal("nav", {
    origin: "top",
    distance: "40px",
    duration: 1000,
    reset: false,
    delay: 300
})

sr.reveal(".esquerdoInicio", {
    origin: "left",
    distance: "70px",
    duration: 1500,
    reset: false,
    delay: 600
})

sr.reveal("#inicioImg", {
    scale: 1.2,
    duration: 1500,
    reset: false,
    delay: 600
})

sr.reveal("#titleMarcas", {
    origin: "top",
    distance: "40px",
    duration: 1000,
    reset: false,
    delay: 300
})

sr.reveal(".logoMarcas", {
    scale: 1.2,
    duration: 1000,
    reset: false,
    delay: 300
})

sr.reveal(".detalhesInicio", {
    origin: "top",
    distance: "40px",
    duration: 1000,
    reset: false,
    delay: 1200
})

sr.reveal(".categoriaLeft1", {
    origin: "left",
    distance: "200px",
    duration: 2500,
    delay: 300
})

sr.reveal(".categoriaRight1", {
    origin: "right",
    distance: "200px",
    duration: 2500,
    delay: 300
})

sr.reveal(".categoriaLeft2", {
    origin: "left",
    distance: "200px",
    duration: 2500,
    delay: 900
})

sr.reveal(".categoriaRight2", {
    origin: "right",
    distance: "200px",
    duration: 2500,
    delay: 900
})

sr.reveal(".imagens1", {
    origin: "top",
    distance: "60px",
    duration: 1500,
})

sr.reveal(".imagens2", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 400
})

sr.reveal(".imagens3", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 800
})

sr.reveal(".imagens4", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 200
})

sr.reveal(".imagens5", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 600
})

sr.reveal(".imagens6", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 1000
})

sr.reveal(".imagens7", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 400
})

sr.reveal(".imagens8", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 800
})

sr.reveal(".imagens9", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 1200
})

sr.reveal(".criterio1", {
    origin: "left",
    distance: "120px",
    duration: 2000,
    reset: false
})

sr.reveal(".criterio2", {
    origin: "top",
    distance: "120px",
    duration: 2000,
    delay: 300,
    reset: false

})

sr.reveal(".criterio3", {
    origin: "right",
    distance: "120px",
    duration: 2000,
    reset: false

})

sr.reveal(".criterio4", {
    origin: "left",
    distance: "120px",
    duration: 2000,
    reset: false

})

sr.reveal(".criterio5", {
    origin: "bottom",
    distance: "120px",
    duration: 2000,
    delay: 300,
    reset: false

})

sr.reveal(".criterio6", {
    origin: "right",
    distance: "120px",
    duration: 2000,
    reset: false

})

sr.reveal("#div1", {
    scale: 1.7,
    duration: 2000,
    delay: 300,
    reset: false

})

sr.reveal("#div2", {
    scale: 1.7,
    duration: 2000,
    delay: 900,
    reset: false

})

sr.reveal("#div3", {
    scale: 1.7,
    duration: 2000,
    delay: 1500,
    reset: false

})

sr.reveal("#titleRanking", {
    scale: 1.5,
    duration: 2000,
    delay: 100,
    reset: false

})

sr.reveal(".h3Ranking", {
    origin: "top",
    distance: "20px",
    duration: 1500,
    delay: 300,
    reset: false

})

sr.reveal(".pRanking", {
    origin: "top",
    distance: "40px",
    duration: 1700,
    delay: 600,
    reset: false
})

sr.reveal(".imgRanking", {
    origin: "top",
    distance: "60px",
    duration: 1900,
    delay: 900,
    reset: false

})

sr.reveal(".site1", {
    origin: "bottom",
    distance: "30px",
    duration: 1900,
    delay: 400,
    reset: false

})
sr.reveal(".site2", {
    origin: "bottom",
    distance: "40px",
    duration: 1900,
    delay: 500,
    reset: false

})
sr.reveal(".site3", {
    origin: "bottom",
    distance: "50px",
    duration: 1900,
    delay: 500,
    reset: false

})
sr.reveal(".site4", {
    origin: "bottom",
    distance: "60px",
    duration: 1900,
    delay: 500,
    reset: false

})
sr.reveal(".site5", {
    origin: "bottom",
    distance: "70px",
    duration: 1900,
    delay: 500,
    reset: false

})
sr.reveal(".site6", {
    origin: "bottom",
    distance: "80px",
    duration: 1900,
    delay: 500,
    reset: false

})
sr.reveal(".site7", {
    origin: "bottom",
    distance: "90px",
    duration: 1900,
    delay: 500,
    reset: false

})
sr.reveal(".site8", {
    origin: "bottom",
    distance: "100px",
    duration: 1900,
    delay: 500,
    reset: false

})
sr.reveal(".site9", {
    origin: "bottom",
    distance: "110px",
    duration: 1900,
    delay: 500,
    reset: false

})

sr.reveal(".not1", {
    origin: "left",
    distance: "200px",
    duration: 1500,
    delay: 400,
    reset: false

})

sr.reveal(".not2", {
    origin: "right",
    distance: "100px",
    duration: 1500,
    delay: 400,
    reset: false

})

sr.reveal(".not3", {
    origin: "right",
    distance: "100px",
    duration: 1500,
    delay: 400,
    reset: false

})

sr.reveal(".not4", {
    origin: "bottom",
    distance: "100px",
    duration: 1500,
    delay: 400,
    reset: false

})

sr.reveal(".not5", {
    origin: "bottom",
    distance: "100px",
    duration: 1500,
    delay: 800,
    reset: false

})

sr.reveal(".not6", {
    origin: "bottom",
    distance: "100px",
    duration: 1500,
    delay: 400,
    reset: false

})

sr.reveal(".h2Artigos", {
    scale: 1.5,
    duration: 1500,
    delay: 400,
    reset: false

})

sr.reveal(".artigosS", {
    scale: 1.5,
    duration: 1500,
    delay: 900,
    reset: false

})






