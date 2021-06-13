import styled from 'styled-components'
import Home from './Home.component'

export default styled(Home).attrs({})`
  margin: 0 auto;
  width: 80%;

  .firstSection {
    height: 724px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;

    .mainTitle {
      font-weight: 500;
      color: white;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media (max-width: 768px) {
    #gallery {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .logo-header {
      width: 300px !important;
    }
  }
`
