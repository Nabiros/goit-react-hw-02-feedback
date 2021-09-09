import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './Buttons.styled';

export const Button = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <ButtonStyle type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </ButtonStyle>
  ));

Button.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};