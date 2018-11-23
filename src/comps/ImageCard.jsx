import React from 'react';
import './image-card.css';
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      span: 0
    }
    this.imgRef = React.createRef();
  }
  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;
    const spans = Math.ceil(height / 150 + 1);
    this.setState({span: spans})
  }

  render() {
    const {description, urls} = this.props.image;
    return (
      <div>
        <img
          style={{gridRowEnd: `span ${this.state.span}`}}
          alt={description}
          ref={this.imgRef}
          src={urls.regular}
          />
      </div>
    );
  }
}
export default ImageCard;
