import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images.png'
import {HiShoppingCart} from 'react-icons/hi'
import { Button,  ContainerButton,  Content, Logo } from '../../Styles/Styled.js'

const NavBar = () => {

return (
    <Content>
        <a href="/"><Logo src={logo} alt="Logo"></Logo></a>

        <ContainerButton>
            <Link to="/login"><Button>Registrarse</Button></Link>
            <Link to="/login"><Button>Entrar</Button></Link>
            <Link to="/buys"><HiShoppingCart style={{fontSize:'40px', cursor:'pointer', color:'black'}}/></Link>
        </ContainerButton>
    </Content>

)
}

export default NavBar