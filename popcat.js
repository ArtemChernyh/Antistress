let cat = document.getElementById('block1');
cat.addEventListener('mousedown', function(){
   cat.style.backgroundImage = "url('cat(opend).png')";

})

cat.addEventListener('mouseup', function(){
    cat.style.backgroundImage = "url('cat(closed).png')";
 
})
audio = new Audio("pop-cat.mp3");
let cit = document.getElementById('block2');
cit.addEventListener('onclick', function(){
    cat.audio
    audio.play();
})
