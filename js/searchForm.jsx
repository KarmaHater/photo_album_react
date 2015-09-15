var SearchForm = React.createClass({
  handleSearch: function(e) {
    var searchString = e.target.value.trim().toLowerCase()
    this.props.filterSearch(searchString)
  },
  render: function() {
    return (
      <div>
        <article className="sidebar">
          <label for="searchPhoto"><h1>Search by Title</h1></label>
          <input id="searchPhoto" type="text" placeholder="title" name="title" onChange={this.handleSearch} autofocus required />
        </article>
        <article>
          <ul id="theList" className="sortable list">
          </ul>
        </article>
      </div>
    );
  }
});

