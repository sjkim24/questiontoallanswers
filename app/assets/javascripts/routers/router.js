Genius.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.lyrics = new Genius.Collections.Lyrics ();
    this.artists = new Genius.Collections.Artists ();
    this.annotations = new Genius.Collections.Annotations ();
    this.users = new Genius.Collections.Users ();
    this.upvotes = new Genius.Collections.Upvotes ();
    this.comments = new Genius.Collections.Comments ();
  },

  routes: {
    '': 'lyricsIndex',
    'lyrics/new': 'lyricNew',
    'lyrics/:id': 'lyricShow',
    'lyrics/:id/edit': 'lyricEdit',
    'artists': 'artistsIndex',
    'artists/:id': 'artistShow',
    'users/:id': 'userShow',
    'search': 'search'
  },

  lyricsIndex: function () {
    this.lyrics.fetch();
    var indexView = new Genius.Views.LyricsIndex ({ collection: this.lyrics });
    this._swapView(indexView);
  },

  lyricNew: function () {
    var lyric = new Genius.Models.Lyric ();
    var formView = new Genius.Views.LyricForm ({
      model: lyric,
      collection: this.lyrics
    })
    if (formView.currentUserChecker()){
      this._swapView(formView);
    }
  },

  lyricShow: function (id) {
    var lyric = this.lyrics.getOrFetch(id);
    var showView = new Genius.Views.LyricShow ({
      model: lyric,
      annotations: this.annotations,
      $rootEl: this.$rootEl,
      upvotes: this.upvotes,
      comments: this.comments
     });
    this._swapView(showView);
  },

  lyricEdit: function (id) {
    var lyric = this.lyrics.getOrFetch(id);
    var formView = new Genius.Views.LyricForm ({
      model: lyric,
      collection: this.lyrics
    })
    if (formView.currentUserChecker()){
      this._swapView(formView);
    }
  },

  artistsIndex: function () {
    this.artists.fetch();
    var indexView = new Genius.Views.ArtistsIndex ({ collection: this.artists })
    this._swapView(indexView);
  },

  artistShow: function (id) {
    var artist = this.artists.getOrFetch(id);
    var showView = new Genius.Views.ArtistShow ({
      model: artist
    });
    this._swapView(showView);
  },

  userShow: function(id) {
    var user = this.users.getOrFetch(id);
    var showView = new Genius.Views.UserShow ({
      model: user
    });

    this._swapView(showView);
  },

  search: function () {
    var searchView = new Genius.Views.Search ();
    // this._swapView(searchView)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
    var searchView = new Genius.Views.Search ({
      $rootEl: this.$rootEl
    });
    $('#search-bar-header').html(searchView.render().$el)
  }

})
