import * as C from './styles';
import Logo from '../../assets/logo.png'

const Header = () => {

  return (
    <C.Container>
        <C.Logo>
          <img src={Logo} alt="" />
          {/* mobile */}
          <C.HamburguerMenu />
        </C.Logo>
        
        <C.ListIcon>
          <C.GitHubIcon />
          <C.LinkedinIcon />
          <C.EmailIcon />
        </C.ListIcon>
    </C.Container>
  );
}

export default Header;