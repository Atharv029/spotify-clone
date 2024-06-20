document.addEventListener('DOMContentLoaded', function() {
    const homeElement = document.querySelector('.home');
    
    homeElement.addEventListener('click', function() {
      location.reload();
    });
  });



// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            
            const audios = document.querySelectorAll('audio');
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
            
        
            const audioId = this.getAttribute('data-audio');
            const audioElement = document.getElementById(audioId);
            if (audioElement) {
                audioElement.play();
            }
            
        });
    });
});



// const rcAudion = new audio('./songs/rocKsun - SALTANAT { Official Music Video } Prod. By KHAKIEE [TubeRipper.com].m4a')

// rcAudion.play();



