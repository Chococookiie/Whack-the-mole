const playBtn = document.querySelector('.play')
const proStarter = document.querySelector('.project-starter')
const startBtn = document.querySelector('.start-btn')
const holes = document.querySelectorAll('.holes')
const stopBtn = document.querySelector('.stop-btn')
const scoreel = document.querySelector('.score')
const finalScoreEl = document.querySelector('.display-score')
const finalScore = document.querySelector('.final-score')
let startGame = null

playBtn.addEventListener('click' , () => {
proStarter.classList.add('up')
})
let score = 0

startBtn.addEventListener('click' , () => {
     startGame = setInterval(getRandomHole , 1200)
    getRandomHole()
    timer = setInterval(startTimer , 1000)
 })

stopBtn.addEventListener('click' , () => {
    console.log('himasdf')
    clearInterval(startGame)
    for(let i = 0 ;i < holes.length ; i++){
        holes[i].innerHTML = ``
    }
    stopTimer()
})
function getRandomHole(){

    for(let i = 0 ;i < holes.length ; i++){
        holes[i].innerHTML = ``
    }
    let index = Math.floor(Math.random() * holes.length)
    console.log(index)
    holes[index].innerHTML = `<img src="images/mollee.png" class="mole show" alt="">`

    // const imgTag = document.getElementsByTagName('img')[0]
    // imgTag.classList.add('show')
    updateImage()
}

function updateImage(){
  const moleImg = document.querySelector('.mole')
  moleImg.addEventListener('click' , () => {
    score++;
    // getRandomHole()
    scoreel.innerText = score
    console.log('the score is' + score)
  })

}

function startTimer(){
const minuteel = document.querySelector('.min')
const secondel = document.querySelector('.sec')
    
const minute = minuteel.innerText
const second =secondel.innerText

    if(minute <= 0){
        if(second <= 0){
            clearInterval(timer)
            minuteel.innerText = '02'
            secondel.innerText = '00'
            clearInterval(startGame)
            
            updateScore()
        }
        else{
            secondel.innerText = second - 1;
        }
    }
    else{
        if(second <= 0){
            minuteel.innerText = minute-1 
            secondel.innerText = 59
        }
        else
        secondel.innerText = second -1;
    }
}

function stopTimer(){
const minuteel = document.querySelector('.min')
const secondel = document.querySelector('.sec')
minuteel.innerText = '02'
secondel.innerText = '00'
clearInterval(timer)
clearInterval(startGame)

updateScore()
}

function updateScore(){
    finalScore.innerText = score
    score = 0
    scoreel.innerText = score
    finalScoreEl.classList.add('see')
}
