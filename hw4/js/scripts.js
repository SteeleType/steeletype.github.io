var playlist = [
    'wav/EightMelodies.wav',
    'wav/Greenhill.wav',
    'wav/Zelda.wav'
  ];

  var currentIndex = 0;
  var sound2 = new Howl({
    src: [playlist[currentIndex]],
    volume: 0.5,
    loop: true,
    autoplay: false,
    onend: function() {
      console.log('Finished playing:', playlist[currentIndex]);
      //Skips to next song
      currentIndex = (currentIndex + 1) % playlist.length;
      sound2.stop();
      sound2 = new Howl({
        src: [playlist[currentIndex]],
        volume: 0.5,
        loop: true,
        autoplay: true
      });
    }
  });
  
  //Starts to play the song and repeats if pressed again
  document.getElementById('button1').addEventListener("click", function() {
    if (sound2.playing()) {
      sound2.stop();
    }
    sound2.play();
  });
  
  //Play/Pause function
  document.getElementById('button2').addEventListener("click", function() {
    if (sound2.playing()) {
      sound2.pause();
    } else {
      sound2.play();
    }
  });
  
  //Skips to the next song in the playlist
  document.getElementById('button3').addEventListener("click", function() {
    sound2.stop();
    currentIndex = (currentIndex + 1) % playlist.length;
    sound2 = new Howl({
      src: [playlist[currentIndex]],
      volume: 0.5,
      loop: true,
      autoplay: true
    });
  });
  