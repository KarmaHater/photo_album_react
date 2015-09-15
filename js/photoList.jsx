var PhotoList = React.createClass({
  getInitialState: function() {
    return {
      searchString: ''
    };
  },
  filterSearch: function(searchString) {
    this.setState({
      searchString: searchString    
    });
    if(searchString.length > 0) {
      this.results = this.props.photos.filter(function(photo) {
        return photo.title.toLowerCase().match( searchString );
      });
    } else {
      this.results = this.props.photos
    }
  },
  render: function() {
    var photos = this.results || this.props.photos
    var photos = _.map( photos, function(p) {
      return <Photo displayOverlay={this.props.displayOverlay} id={p.id} title={p.title} url={p.url} deletePhoto={this.props.deletePhoto}/>
    }.bind(this))
    return (
      <div>
        <SearchForm filterSearch={this.filterSearch}/>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
});

