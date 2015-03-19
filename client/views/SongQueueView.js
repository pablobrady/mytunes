// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.listenTo(this.model, 'ended', function() {
      this.model.donePlaying();
      //this.$el
    }, this);
    this.listenTo(this.model, 'dequeue', function() {
      this.model.shift();
    }, this);
    this.listenTo(this.model, 'add', function() {
      this.$el.append(new SongQueueEntryView({model: this.model.at(this.model.length-1)}).render());
    }, this);
    this.$el.html('<th>Queue</th>');
    this.render();
  },

  render: function() {
    return this.$el;
  },

  // listen for ended, dequeue, add


});

//<th>Queue</th>