import styled from 'styled-components'
import Home from './Home.component'

export default styled(Home).attrs({})`
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

  @media only screen and (max-width: 600px) {
    .logo-header {
      width: 300px !important;
    }
  }
`
