import React from 'react';
import ImageContainer from '../components/imageContainer';

export default () => {
  return (
    <section className="passions_content">
      <ImageContainer type="baking" imgName="cherry_cake" descriptionColor="primary-light-pink" descriptionText="Cherry Cake" />
      <ImageContainer type="baking" imgName="eclair" descriptionColor="primary-light-green" descriptionText="Chocolate Eclair filled with Whipped Cream" />
      <ImageContainer type="baking" imgName="french_macaron" descriptionColor="primary-light-blue" descriptionText="French Macaron with Chocolate Ganache Filling" />
      <ImageContainer type="baking" imgName="religieuse" descriptionColor="primary-light-green" descriptionText="Religieuse (The cream puff nun)" />
    </section>
  );
}
