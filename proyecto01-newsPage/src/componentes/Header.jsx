import logo from '../assets/images/logo.svg'
import NavBar from '../componentes/NavBar'

const Header = () => {
    return (
      <header className='bg-red-500 flex place-content-between'>
          <img src={logo} alt="Logo" />
          <NavBar></NavBar>
      </header>
    )
  }
  
  export default Header
  