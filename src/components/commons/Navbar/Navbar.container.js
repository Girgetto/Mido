import { connect } from 'react-redux'
import Navbar from './Navbar.styled'
import { setLanguage } from '../../../state/UI/actionCreators'

const mapStateToProps = (state) => ({
  language: state.ui.language,
})

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (lng) => dispatch(setLanguage(lng)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
