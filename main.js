const holes = document.querySelectorAll(".hole")
// let randomNumber = Math.floor(Math.random() * holes.length)
// console.log(holes[randomNumber])
// holes[randomNumber].classList.add("animationx")
let count = 0
function randomHole() {
  let randomNumber = Math.floor(Math.random() * holes.length)
  console.log(holes[randomNumber])
  holes[randomNumber].classList.add("animationx")
  count = count + 1
  if(count>=10){
    clearInterval(id)
    }
    console.log(count)
}

let id = setInterval(randomHole, 2000)
