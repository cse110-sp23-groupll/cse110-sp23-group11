document.addEventListener('DOMContentLoaded', (event) => {
    const link = document.getElementById('link');
    const audio = document.getElementById('buttonAudio');
  
    link.addEventListener('click', function(event) {
        event.preventDefault();
        audio.play();
        audio.onended = function() {
            window.location.href = link.href;
        };
    });
  
  });