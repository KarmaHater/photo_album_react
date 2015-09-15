var DeleteBtn = React.createClass({
  deletePhoto: function(id) {
    var id = this.props.id
    this.props.deletePhoto(id);
  },
  render: function() {
    return (
      <span className="deleteBtn" onClick={this.deletePhoto}>X</span>
    );
  }

});
