var Photo = React.createClass({
  displayOverlay: function() {
    var id = this.props.id;
    this.props.displayOverlay(id);
    this.stopScroll();
  },
  stopScroll: function() {
    $('body').css({
      'position': 'fixed'
    })
  },  
  render: function() {
    return (
      <li className="entry" >
        <p>{ this.props.title } < DeleteBtn deletePhoto={this.props.deletePhoto} id={this.props.id}/></p>
        <div className="img-box">
          <img src={ this.props.url } onClick={ this.displayOverlay } />
        </div>
      </li>
    );
  }
});
