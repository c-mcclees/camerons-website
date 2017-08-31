import React from 'react';
import PropTypes from 'prop-types';

export default class ImageContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const imageContainerProps = {
      type: `${this.props.type}_image_container`,
      imgLink: this.props.imgLink,
      descriptionClass: `image_description ${this.props.descriptionColor}`,
      descriptionText: this.props.descriptionText
    };
    return (
      <div className={imageContainerProps.type}>
        <div className={imageContainerProps.descriptionClass}>
          <h3>{imageContainerProps.descriptionText}</h3>
        </div>
        <img src={imageContainerProps.imgLink}/>
      </div>
    );
  }
}

ImageContainer.propTypes = {
  type: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  descriptionColor: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired
};
