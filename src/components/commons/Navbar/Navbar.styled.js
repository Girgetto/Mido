import styled from 'styled-components'
import Navbar from './Navbar.component'

export default styled(Navbar).attrs({})`
  height: 40px;
  width: 100vw;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  right: 0;
  left: 0;
  padding: 1% 0%;

  .selected {
    border-bottom: 1px solid;
  }

  .list {
    width: 80vw;
    max-width: 80vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
      color: #fff;
      text-decoration: none;
      margin-left: 20px;
    }
  }
  .language {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20vw;
    max-width: 20vw;
    &__gb,
    &__it,
    &__cn
    &__ru {
      border: 1px solid white;
      width: 30px;
      height: 30px;
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.5;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
    &__gb {
      opacity: ${({ language }) => language === 'en' && '1'};
    }

    &__it {
      opacity: ${({ language }) => language === 'it' && '1'};
    }
    &__ru {
      opacity: ${({ language }) => language === 'ru' && '1'};
    }
  }
  &__ru {
    opacity: ${({ language }) => language === 'cn' && '1'};
  }
`;
