var Overlay = React.createClass({
  hideOverlay: function() {
    this.props.hideOverlay();
    this.startScroll();
  },
  startScroll: function() {
    $('body').css({
      'position': 'relative'
    })
  },
  render: function() {
    return (
      <div id="overlay" onClick={this.hideOverlay}>
         <div id="overlay-image-box">
           <img id="overlayImage" src={this.props.photo.url}/>
         </div>
       </div>
    );
  }
});

