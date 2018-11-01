function setUp() {

  // Vivus.prototype.trace = function () {
  //   var i, progress, path, currentFrame;
  //   currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
  //   for (i = 0; i < this.map.length; i++) {
  //     path = this.map[i];
  //     progress = (currentFrame - path.startAt) / path.duration;
  //     progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
  //     if (path.progress !== progress) {
  //       path.progress = progress;
  //       path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
  //       this.renderPath(i);
  //     }
  //     if (stroke Dashoffset>800) {
  //       path.style.backgoundColor = green;

  //     }
  //   }
  // };

  var letter1 = new Vivus('layer1', {
    duration: 800,
    start: 'manual',
  });

  document.getElementById('layer1').addEventListener('mouseenter', function(){
     letter1.reset().play(2);
  })


  var letter2 = new Vivus('layer2', {
    duration: 100,
    start:'manual',
  });

  document.getElementById('layer2').addEventListener('mouseenter', function(){
     letter2.reset().play(2);
  })
}

window.onload = setUp