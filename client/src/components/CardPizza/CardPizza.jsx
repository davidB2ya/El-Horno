import React from 'react'
import fontPizza from '../../assets/images (4).png'
// import { IoMdPizza } from 'react-icons/io'
import { IoIosHeart } from 'react-icons/io'
import { GiFullPizza } from 'react-icons/gi'
import { ButtonIoIosHeart, ButtonSelect, Card, ContainerPrices, ContainerTitlePizza, Img, InfoCard, TitlePizza } from '../../Styles/Styled.js'

const CardPizza = ({data}) => {

    const { title, description, price } = data

return (

    <Card >
        <Img src={fontPizza} alt="foto-pizza"/>
        <InfoCard>
            <ContainerTitlePizza>
                <TitlePizza>{title}</TitlePizza>
                <ButtonIoIosHeart><IoIosHeart style={{color:'#fff'}}/></ButtonIoIosHeart>
            </ContainerTitlePizza>
            <span>{description}</span>
            <br/>
            <ContainerPrices>
                <span>Precio: ${price}</span>
                <ButtonSelect>Pedir <GiFullPizza style={{fontSize:'20px'}}/></ButtonSelect>
            </ContainerPrices>
        </InfoCard>
    </Card>
)
}

export default CardPizza