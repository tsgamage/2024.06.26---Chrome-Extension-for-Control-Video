window.addEventListener("message", (event) => {
    if (event.source !== window) return;
  
    const command = event.data.command;
    const video = document.querySelector('video');
  
    if (video) {
      switch (command) {
        case 'playPause':
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
          break;
        case 'rewind':
          video.currentTime -= 10;
          break;
        case 'fastForward':
          video.currentTime += 10;
          break;
      }
    }
  });
  