import React, { Component } from 'react';

class PhotoItem extends Component {

  render() {
    return (
      <li className="Photo">
        <strong className="PhotoTitle">{this.props.photo.title}</strong>
        <img className="PhotoImage" src={this.props.photo.url} alt={this.props.photo.title} width="50px" height="50px" />
      </li>
    );
  }
}

/*
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "http://placehold.it/600/24f355",
    "thumbnailUrl": "http://placehold.it/150/24f355"
*/

// kind of a restriction to assert types
PhotoItem.propTypes = {
  photo: React.PropTypes.object
}


export default PhotoItem;
