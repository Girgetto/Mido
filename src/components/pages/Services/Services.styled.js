import styled from 'styled-components'

import Services from './Services.component'

export default styled(Services).attrs({})`
  .header {
    position: relative;
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
      background-image: url('https://www.omidaconsulting.com/wp-content/uploads/2020/06/servizi-cover.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
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
    width: 90%;

    .titles {
      letter-spacing: 0.1rem;
    }

    .lists {
      display: flex;
      justify-content: space-between;
      ul {
        font-family: 'AvenirNext-UltraLight';
        vertical-align: baseline;
        color: #fff;
        background-color: #121212;
        font-size: 18px;
      }
    }

    .flex {
      display: flex;
      height: 300px;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      img {
        width: 389px;
        height: 150px;
      }
      p {
        max-width: 439px;
      }
    }
  }
  .links {
    margin-left: 15%;
    > li > a {
      color: white;
      padding: 5px;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 125px;

    .lists,
    .flex {
      flex-direction: column;
    }

    .flex {
      height: 550px !important;

      img {
        width: 336px !important;
      }
    }
  }
`
