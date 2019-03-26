import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CardsStyled = styled.div `
    border-radius: 20px;
    width: 650px;
    height: 700px;

    h1{
      margin-top: 90px;
    }
    img{
      height: 45vh;
    }

    .box{
      height: 45vh;
    }

`


const Cards = (props) => {
  return(
    <CardsStyled>
        <h1> {props.name} </h1>
        <div className="box"><img src={props.image} /></div>
        <h3> {props.description}</h3>

    </CardsStyled>
  )
}

Cards.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  food_pairing: PropTypes.array
}
export default Cards;
