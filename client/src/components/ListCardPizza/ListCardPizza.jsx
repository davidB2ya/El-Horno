import React from 'react'
import Data from '../../data/data.json'
import CardPizza from '../CardPizza/CardPizza'
import { Button, ContainerDelivery, ContainerProducts, List } from '../../Styles/Styled.js'
import {SiCodechef} from 'react-icons/si'

const ListCardPizza = () => {

return (
    <ContainerProducts>
        <ContainerDelivery>
            <a href="/chef"><Button>Hacer mi propia Pizza<SiCodechef  style={{fontSize:'20px', marginLeft: '10px'}}/></Button></a>
        </ContainerDelivery>
        

        <List>
            {Data.map((product) => (
            <CardPizza key={product.id} data={product} />
            ))}
        </List>
    </ContainerProducts>
    
)
}

export default ListCardPizza