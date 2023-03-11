export default function (){


    const fourestSound = new Audio("../sounds/Floresta.wav")
    const cloundSound = new Audio("../sounds/Chuva.wav")
    const houseSound = new Audio("../sounds/Cafeteria.wav")
    const fireSound = new Audio("../sounds/Lareira.wav")

    function playFourestSound(){
        fourestSound.play()
    }

    function playChuva(){
        cloundSound.play()
    }

    function playCafe(){
        houseSound.play()
    }

    function playFire(){
        fireSound.play()
    }

    
    

    return{
        playFourestSound,
        playChuva,
        playCafe,
        playFire,
        fourestSound,
        cloundSound,
        houseSound,
        fireSound
    }
}