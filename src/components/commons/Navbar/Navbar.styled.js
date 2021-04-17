import styled from 'styled-components'
import Navbar from './Navbar.component'

export default styled(Navbar).attrs({})`
  z-index: 9999;
  height: 40px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  right: 0;
  left: 0;
  padding: 2% 0%;
  padding-right: 6%;
  position: fixed;
  background-color: #131313;

  .logo {
    width: 5%;
    height: auto;
  }

  .lazyloaded {
    opacity: 1;
    transition: opacity 0.4s;
    transition-delay: 0ms;
  }

  .selected {
    border-bottom: 1px solid;
  }

  .list {
    width: 60vw;
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
    &__de,
    &__cn,
    &__es,
    &__ru,
    &__fr {
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
    &__de {
      opacity: ${({ language }) => language === 'de' && '1'};
    }
    &__it {
      opacity: ${({ language }) => language === 'it' && '1'};
    }
    &__fr {
      opacity: ${({ language }) => language === 'fr' && '1'};
    }
    &__ru {
      opacity: ${({ language }) => language === 'ru' && '1'};
    }
    &__wa {
      opacity: ${({ language }) => language === 'ru' && '1'};
    }
    &__cn {
      writing-mode: tb-rl;
      line-height: 0.9;
      text-align: center;
      opacity: ${({ language }) => language === 'cn' && '1'};
    }
  }

  @media only screen and (max-width: 768px) {
    .list,
    .language {
      display: none;
    }

    a,
    a:hover {
      color: #fff;
    }
  }
`
