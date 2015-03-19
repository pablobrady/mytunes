// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el;
  },

  // events: {
  //   'changed':function(){console.log(8)}
  // }

  // events: {
  //   ended: function() {
  //     this.model.donePlaying();
  //   }
  // }

});
