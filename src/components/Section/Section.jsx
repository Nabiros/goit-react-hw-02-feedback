import React from 'react';
import PropTypes from 'prop-types';
import {Title} from '../Section/Section.styled';

export const Section = ({title, children})=> (
    <>
    <Title>{title}</Title>
    <div>{children}</div>
</>
)

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
}