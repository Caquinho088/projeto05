export default function controls({
  Buttonpause,
  Buttonplay,
  Buttonset,
  Buttonstop,
}){

  function play(){
    Buttonplay.classList.add('hide')
    Buttonpause.classList.remove('hide')
    Buttonset.classList.add('hide')
    Buttonstop.classList.remove('hide')
  }
  function pause(){
    Buttonpause.classList.add('hide')
    Buttonplay.classList.remove('hide')
  }
  function reset() {
    Buttonplay.classList.remove('hide')
    Buttonpause.classList.add('hide')
    Buttonset.classList.remove('hide')
    Buttonstop.classList.add('hide')
  }

  function getMinutes(){
    let newminutes = prompt('Quantos minutos?')
    if (!newminutes){
      return false
      
    }
  
   return newminutes 
  }

  return{
    reset,
    play,
    pause,
    getMinutes
  }
}




