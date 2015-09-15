var App = React.createClass({
  getInitialState: function() {
    return {
      photos: [],
      overlayStatus: false,
      overlayPhoto: '',
      photoId: null,
    };
  },
  componentWillMount: function() {
    $.ajax({
        type: "GET",
        url: "stock_images.json",
        success: function(data){
          this.setState({
            photos: data,
            photoId: this.state.photos.length
          });
        }.bind(this),
        error: function(){
          console.log("ajax error");
        }
    });
  },
  addPhoto: function(photo) {
    this.setState({
      photos: this.state.photos.concat([photo]),
      photoId: this.state.photos.length + 1
    });
  },
  deletePhoto: function(id) {
    var newCollection = _.reject(this.state.photos, function(p){
      return p.id === id;
    })
    this.setState({
      photos: newCollection
    });
  },
  displayOverlay: function(id) {
    var overlayPhoto = this.setOverlayPhoto(id);
    this.setState({
      overlayStatus: true,
      overlayPhoto: overlayPhoto
    });
  },
  setOverlayPhoto: function(id) {
    return  _.find(this.state.photos, function(photo) {
      return photo.id === id
    }.bind(this))
  },
  hideOverlay: function() {
    this.setState({
      overlayStatus: false,
      overlayPhoto: ''
    });
  },
  render: function() {
    var photos = this.state.photos
    var overlayPhoto = this.state.overlayPhoto
    var overlay = this.state.overlayStatus ? <Overlay photo={overlayPhoto} hideOverlay={this.hideOverlay}/> : ''
    return (
      <div>
        <Header />
        {overlay}
        <div id="container">
          <SortButtons />
          <AddPhotoForm addPhoto={this.addPhoto} photoId={this.state.photoId}/>
          <PhotoList photos={photos} displayOverlay={this.displayOverlay} deletePhoto={this.deletePhoto} photoId={this.state.photoId}/>
        </div>
      </div>
    );
  }

});

React.render(<App />, document.getElementById('app'));
