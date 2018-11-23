import React from 'react';
import ImageCard from './ImageCard';
import './image-card.css';

const ImageList = (props) => {
  const images = props.result.map((image) => {
    return (

      <ImageCard key={image.id} image={image} />
  );
});
  return (
    <div  className="image-list">
      {images}
    </div>
  );
}

export default ImageList;
