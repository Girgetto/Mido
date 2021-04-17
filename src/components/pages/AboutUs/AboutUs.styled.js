import styled from 'styled-components'

import AboutUs from './AboutUs.component'
import background from '../../../assets/img/about-bg.png'

export default styled(AboutUs).attrs({})`
  .header {
    position: relative;
    background-image: url(${background});  
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    #overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    p {
      color: white;
      font-weight: 500;
      font-size: 26px;
      width: 80%;
      z-index: 2;
    }
  }

  .content {
    margin: 0 auto;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .main-content {
      width: 50%;
    }

    img {
      width: 50%;
      max-width: 400px;
    }

    a {
      text-decoration: none;
      color: white;
    }

    .button {
      border: 1px solid white;
      background-color: transparent;
      color: white;
      padding: 16px 20px;
      position: relative;
      overflow: hidden;
      width: 160px;
      text-align: center;
      cursor: pointer;
      .overLayer {
        transition: 0.5s;
        transform: translateX(-100%);
        width: 100%;
        height: 100%;
        background-color: white;
        color: black;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:hover {
        transition: 0.5s;
        color: #131313;
        .overLayer {
          transform: translateX(0px);
          color: black;
        }
      }
    }
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }

    .main-content {
      width: 100% !important;
    }
  }
`
