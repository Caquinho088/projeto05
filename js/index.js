import Controls from "./controls.js" 
import Timer from "./timer.js"

import {
  Buttonplay,
  Buttonpause,
  Buttonset,
  Buttonstop,
  ButtonsoundOff,
  ButtonsoundOn,
  minutesDisplay,
  secondsDisplay,
} from "./config.js"


const controls = Controls({
  Buttonpause,
  Buttonplay,
  Buttonset,
  Buttonstop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset,
})



Buttonplay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  
})

Buttonpause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  
})

Buttonstop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  
})

ButtonsoundOff.addEventListener('click', function(){
  ButtonsoundOn.classList.remove('hide')
  ButtonsoundOff.classList.add('hide')
  

})

ButtonsoundOn.addEventListener('click', function(){
  ButtonsoundOn.classList.add('hide')
  ButtonsoundOff.classList.remove('hide')
  
})

Buttonset.addEventListener('click', function(){
 
  let newminutes = controls.getMinutes()

  if (!newminutes){
    timer.reset()
    return
  }
  timer.updateDisplay(newminutes, 0)
  timer.updateMinutes(newminutes)
})