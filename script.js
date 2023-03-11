import Sound from "./sounds.js"
const sound = Sound()

let minutes = Number(document.querySelector('.minutes').innerText)
let timerTimeOut

document.querySelector('#btnPlay').addEventListener('click', function(){
    countDown()
    console.log('aqui')
})

document.querySelector('#btnStop').addEventListener('click', function(){
    clearTimeout(timerTimeOut)
    reset()
})


document.querySelector('.soma').addEventListener('click', function(){
    minutes = minutes + 5
    console.log(minutes)
    document.querySelector('.minutes').innerText = minutes
})

document.querySelector('.diminui').addEventListener('click', function(){
    if (minutes == 0) {
        alert('Cronometro zerado')
        return
    }
    minutes = minutes - 5
    console.log(minutes)
    document.querySelector('.minutes').innerText = minutes
    document.querySelector('.minutes').textContent = String(minutes).padStart(2, "0")
})

document.querySelector('.dark-mode').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'
    document.querySelector(".minutes").style.color = "white"
    document.querySelector(".segundos").style.color = "white"
    document.querySelector(".divisor").style.color = "white"
    document.querySelector('.dark-mode').classList.add('hide')
    document.querySelector('.light-mode').classList.remove('hide')

    document.getElementById("icoplay").style.fill = "white"
    document.getElementById("icostop").style.fill = "white"
    document.getElementById("icosoma").style.fill = "white"
    document.getElementById("icodiminui").style.fill = "white"

})

document.querySelector('.light-mode').addEventListener('click', function(){
    document.body.style.backgroundColor = 'white'
    document.querySelector(".minutes").style.color = "black"
    document.querySelector(".segundos").style.color = "black"
    document.querySelector('.dark-mode').classList.remove('hide')
    document.querySelector('.light-mode').classList.add('hide')
    document.getElementById("icoplay").style.fill = "black"
    document.querySelector("#icostop").style.fill = "black"
    document.querySelector('#icosoma').style.fill = "black"
    document.querySelector('#icodiminui').style.fill = "black"
    document.querySelector(".divisor").style.color = "black"
    
})


function countDown(){

  timerTimeOut =  setTimeout(function(){
        let minutes = Number(document.querySelector('.minutes').textContent)
        let seconds = Number(document.querySelector('.segundos').textContent)

        if(seconds <= 0 ){
            seconds = 60
            minutes --
        }

        updateDisplay(minutes, seconds - 1)

        countDown()
    },1000)
}


function updateDisplay(newMinutes, seconds){
    document.querySelector('.minutes').textContent = String(newMinutes).padStart(2, "0")
    document.querySelector('.segundos').textContent = String(seconds).padStart(2, "0")
}

function reset(){
    document.querySelector('.minutes').innerText = "25"
    document.querySelector('.segundos').innerText = "00"

}





















document.querySelector('#volumeForest').addEventListener('change', function(){
    sound.fourestSound.volume = document.querySelector('#volumeForest').value
} )

document.querySelector('#volumeChuva').addEventListener('change', function(){
    sound.cloundSound.volume = document.querySelector('#volumeChuva').value
} )

document.querySelector('#volumeCafe').addEventListener('change', function(){
    sound.houseSound.volume = document.querySelector('#volumeCafe').value
} )

document.querySelector('#volumeFire').addEventListener('change', function(){
    sound.fireSound.volume = document.querySelector('#volumeFire').value
} )



document.querySelector('.forest').addEventListener('click', function(){
    sound.playFourestSound()
} )

document.querySelector('.chuva').addEventListener('click', function(){
    sound.playChuva()
} )

document.querySelector('.cafe').addEventListener('click', function(){
    sound.playCafe()
} )

document.querySelector('.fire').addEventListener('click', function(){
    sound.playFire()
})


