import styled from 'styled-components'
import AboutUs from './AboutUs.component'

export default styled(AboutUs).attrs({})`
  margin: 0 auto;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: white;
  }
`
