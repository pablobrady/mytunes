// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.on('ended', function(model){
    //   this.donePlaying();
    // }, this);
    // this.on('dequeue', function(model) {
    //   this.shift();
    // }, this);
  },
  add: function() {
  	Songs.prototype.add.apply(this,arguments);
  	if(this.length===1) {
  		this.playFirst();
  	}
  },
  playFirst: function() {
    if (this.length > 0) {
      this.at(0).play();
    }
  },
  donePlaying: function() {
  	this.shift();
  	this.playFirst();
  }


});