Genius.Views.ArtistsIndex = Backbone.View.extend ({

  template: JST['artists/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ artists: this.collection });
    this.$el.html(content);
    return this
  }

})
