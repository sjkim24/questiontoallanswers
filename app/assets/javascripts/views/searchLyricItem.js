Genius.Views.SearchLyricItem = Backbone.View.extend ({

  tagName: 'li',

  className: 'lyric-search-item',

  template: JST['lyrics/searchItem'],

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.searchView = options.searchView;
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    debugger
    var content = this.template( {lyric: this.model });
    this.$el.html(content);
    return this;
  }

})
