import React from 'react';
import styled from 'styled-components';

export const Button = () => {
  return (
    <StyledWrapper>
      <button className="botao">
        <svg className="mysvg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
          <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Download">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector" />
            </g>
          </g>
        </svg>
        <span className="texto">Resume</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .botao {
    width: 100px;
    height: 45px;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 505;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    text-color: white;
  }

  .botao .mysvg {
    display: none;
  }

  .botao:hover {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: 0.5s linear;
  }

  .botao:hover .texto {
    display: none;
  }

  .botao:hover .mysvg {
    display: inline;
  }

  .botao:hover::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 3px;
    background-color: rgb(59, 190, 230);
    margin-left: -20px;
    animation: animate 0.9s linear infinite;
  }

  .botao:hover::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3.5px solid transparent;
    border-top: 3.5px solid #fff;
    border-right: 3.5px solid #fff;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(20px);
    }
  }`;
