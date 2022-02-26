import React from 'react'
import img from '../../assets/images (5).jfif' 
import { CardPizza, ContainerChef, Input } from '../../Styles/Styled.js'

const CreatePizza = () => {

return (
    <ContainerChef>
        <CardPizza>
            <img src={img} alt="img pizza" style={{width:"400px", height:"140px", marginBottom:"1em"}}></img>
            <div>
            <form >
                <Input
                    // value={name}
                    // onChange={(e) => setName(e.target.value)} 
                    type="text"
                    placeholder="Nombre"
                />
                <br/>
                <Input
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Puede nombrar su Pizza"
                />
                <br/>
                <Input
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    type="phone"
                    placeholder="Teléfono"
                />
                <br/>
                <Input
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    type="select"
                    placeholder="Ingredientes"

                />
                <select >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <br/>
                <input type="submit" value="Hornear 🍕" /> 
                </form>
            </div>
        </CardPizza>
        
    </ContainerChef>
)
}

export default CreatePizza