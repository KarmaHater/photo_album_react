var AddPhotoForm = React.createClass({
  addPhoto: function(e) {
    e.preventDefault();
    var photo = {
      url: React.findDOMNode(this.refs.url).value,
      title: React.findDOMNode(this.refs.title).value,
      id: this.props.photoId + 1
    }

    this.props.addPhoto(photo)
    this.resetFrom();
  },
  resetFrom: function(url, title) {
    React.findDOMNode(this.refs.url).value = ""
    React.findDOMNode(this.refs.title).value = ""
  },
  render: function() {
    return (
      <article className="sidebar">
        <form onSubmit={this.addPhoto} >
          <input ref="url" type="text" placeholder="url" autofocus />
          <input ref="title" type="text" placeholder="title" />
          <input id="addPhoto" type="submit" />
        </form>
        <p id="doClearAll">
          <a id="clearAll" href="#">Clear All Photos</a>
        </p>
      </article>
    );
  }

});

