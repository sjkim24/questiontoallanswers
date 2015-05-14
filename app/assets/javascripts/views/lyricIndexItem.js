Genius.Views.LyricIndexItem = Backbone.CompositeView.extend ({

  tagName: 'li',

  className: 'lyric-track-title',

  template: JST['lyrics/indexItem'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template( {lyric: this.model });
    this.$el.html(content);
    return this;
  }

})
