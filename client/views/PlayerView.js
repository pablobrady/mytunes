// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    if (window.localStorage) {
      this.el.volume = JSON.parse(window.localStorage.volume || "1");
      this.el.muted = JSON.parse(window.localStorage.muted || "false");
    }
    var self = this;
    this.el.onvolumechange = function() {
      window.localStorage.volume = JSON.stringify(self.el.volume);
      window.localStorage.muted = JSON.stringify(self.el.muted);
    };
  },

  events: {
    ended: function() { this.model.ended(); },
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
