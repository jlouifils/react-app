import React from 'react';
import  ItemGallery from './ItemGallery';
import PropTypes from 'prop-types';

const Gallery = props => {


  const photos = props.data.map(photo =>
      <GalleryItem 
            farmID={photo.farm} 
            serverID={photo.server}
            id={photo.id}
            secret={photo.secret}
            title={photo.title}
            key={photo.id}
        />
);

  return (
    <div className = "photo-container">
        <h2>{prop.title}</h2>
        <ul>
            {/*Photo Gallery*/}
            {photos}
        </ul>
    </div>
  );
}

Gallery.propTypes = {
  data: propTypes.arrayOf(PropTypes.object),
  title: PropTypes.strings
}

export default Gallery
