import React from 'react';
import PropTypes from 'prop-types';

export default class ImageContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const imageContainerProps = {
      type: `${this.props.type}_image_container`,
      src: `/images/${this.props.imgName}_small.jpg`,
      srcSet: `/images/${this.props.imgName}_large.jpg 1024w, /images/${this.props.imgName}_medium.jpg 640w, /images/${this.props.imgName}_small.jpg 320w`,
      descriptionClass: `image_description ${this.props.descriptionColor}`,
      descriptionText: this.props.descriptionText
    };
    return (
      <div className={imageContainerProps.type}>
        <div className={imageContainerProps.descriptionClass}>
          <h3>{imageContainerProps.descriptionText}</h3>
        </div>
        <img src={imageContainerProps.src} srcSet={imageContainerProps.srcSet}/>
      </div>
    );
  }
}

ImageContainer.propTypes = {
  type: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
  descriptionColor: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired
};
