// LISTEN FOR AN EVENT
function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // STOP FUNCTION EXECUTING
    if(!audio) return;
    // REWIND TO THE START
    audio.currentTime = 0;
    // START AUDIO
    audio.play();
    // ADD CLASS PLAYING
    key.classList.add('playing');

}
  
//REMOVE FUNCTION
function removeTransition(e){
    //SKIP PROPERTY NAMEIF ITS'S NOT TRANSFORM
    if(e.propertyName !== 'transform') return; 

    this.classList.remove('playing');
}

//REMOVE EVENT
const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playAudio);
