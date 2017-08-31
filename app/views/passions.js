import React from 'react';
import ImageContainer from '../components/imageContainer';

export default () => {
  return (
    <section className="passions_content">
      <ImageContainer type="baking" imgLink="/images/cherry_cake.jpg" descriptionColor="primary-light-pink" descriptionText="Cherry Cake" />
      <ImageContainer type="baking" imgLink="/images/eclair.jpg" descriptionColor="primary-light-green" descriptionText="Chocolate Eclair filled with Whipped Cream" />
      <ImageContainer type="baking" imgLink="/images/french_macaron.jpg" descriptionColor="primary-light-blue" descriptionText="French Macaron with Chocolate Ganache Filling" />
      <ImageContainer type="baking" imgLink="/images/religieuse.jpg" descriptionColor="primary-light-green" descriptionText="Religieuse (The cream puff nun)" />
    </section>
  );
}
