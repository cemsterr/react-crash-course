import React, { Component } from 'react';
import PhotoItem from './PhotoItem';

class Photos extends Component {

  render() {
    let photoItems;
    if (this.props.photos) {
      photoItems = this.props.photos.map(photo => {
        return(
          <PhotoItem key={photo.id} photo={photo} />
        );
      })
    }

    return(
      <div className="Photos">
        <h3>10 Photos That Will Shock You!</h3>
        {photoItems}
      </div>
    );

  }
}

// kind of a restriction to assert types
Photos.propTypes = {
  photos: React.PropTypes.array
}

export default Photos;
