import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ButtonStyle = styled.div `
    height: 150px;
    width: 150px;
    background-image:url('./img/cap_button.png');
    background-size: cover;
    cover: no-repeat;
    margin-left 38%;
    margin-top: 60px;

    &:active{
      height: 140px;
      width: 140px;
      margin-left: 39%;
      margin-top: 64px;
    }
`


const Button = ({handleButton}) => {
  return(
    <div>
      <ButtonStyle onClick={handleButton}></ButtonStyle>
    </div>
  )
}

Button.propTypes = {
  inverted: PropTypes.bool
}
export default Button;
