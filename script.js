const line = document.querySelector(".line")
const prv = document.querySelector("#prv")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener('click' , () => {
    currentActive++;
    
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    
    update()
})

prv.addEventListener('click' , () => {
    currentActive--;
    
    if(currentActive < 1) {
        currentActive = 1
    }
    
   update()
})

function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })


    const active = document.querySelectorAll(".active")

    line.style.width = (active.length - 1) /( circles.length -1) * 100 + '%'

    if(currentActive === 1) {
        prv.disabled  = false
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prv.disabled = false
        next.disabled = false
    }
       }
