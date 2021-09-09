import React from 'react';
import PropTypes from 'prop-types';
import { Text, TotalNumber, Number } from './Statistic.styled';

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <Text>
      Good:{' '}
      <Number>
        <TotalNumber>{good}</TotalNumber>
      </Number>
    </Text>
    <Text>
      Neutral:{' '}
      <Number>
        <TotalNumber>{neutral}</TotalNumber>
      </Number>
    </Text>
    <Text>
      Bad:{' '}
      <Number>
        <TotalNumber>{bad}</TotalNumber>
      </Number>
    </Text>
    <Text>
      Total: <Number>{total}</Number>
    </Text>
    <Text>
      Positive feedback: <Number>{positivePercentage}%</Number>
    </Text>
  </div>
);

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};