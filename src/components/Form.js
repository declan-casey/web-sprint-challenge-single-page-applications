import React from 'react'
import {useParams, Link, Route} from 'react-router-dom'

function Form(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props
    const onChange = () => {

    }
    return (
        <div onSubmit ={submit}>
            <form>
                <div>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>
                <select
                onChange = {onChange}
                value = {values.size}>
                    <option value ="">-Select a size-</option>
                    <option value = "small">Small - 12in</option>
                    <option value = "medium">Medium - 16in</option>
                    <option value = "large">Large - 20in</option>
                </select>
                <div>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>
                <label>
                    <input 
                    type = "radio"
                    name = "sauce"
                    value = "redSauce"
                    onChange = {onChange}
                    checked = {values.sauce === "redSauce"}
                    >
                    </input>Original Red
                </label>
                <label>
                    <input 
                    type = "radio"
                    name = "sauce"
                    value = "garlicRanch"
                    onChange = {onChange}
                    checked = {values.sauce === "garlicRanch"}
                    >
                    </input>Garlic Ranch
                </label>
                <label>
                    <input 
                    type = "radio"
                    name = "sauce"
                    value = "bbqSauce"
                    onChange = {onChange}
                    checked = {values.sauce === "bbqSauce"}
                    >
                    </input>BBQ Sauce
                </label>
                <label>
                    <input 
                    type = "radio"
                    name = "sauce"
                    value = "spinachAlfredo"
                    onChange = {onChange}
                    checked = {values.sauce === "spinachAlfredo"}
                    >
                    </input>Spinach Alfredo
                </label>
                <div>
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10!</p>
                </div>
                <label>
                    <input 
                    type = "checkbox"
                    name = "pepperoni"
                    checked = {values.pepperoni}
                    onChange = {onChange}>
                    </input>Pepperoni
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "sausage"
                    checked = {values.sausage}
                    onChange = {onChange}>
                    </input> Sausage
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "canadianBacon"
                    checked = {values.canadianBacon}
                    onChange = {onChange}>
                    </input> Canadian Bacon
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "italianSausage"
                    checked = {values.italianSausage}
                    onChange = {onChange}>
                    </input> Spicy Italian Sausage
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "grilledChicken"
                    checked = {values.grilledChicken}
                    onChange = {onChange}>
                    </input> Grilled Chicken
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "onions"
                    checked = {values.onions}
                    onChange = {onChange}>
                    </input> Onions
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "greenPepper"
                    checked = {values.greenPepper}
                    onChange = {onChange}>
                    </input> Green Pepper
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "dicedTomatoes"
                    checked = {values.dicedTomatoes}
                    onChange = {onChange}>
                    </input> Diced Tomatoes
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "blackOlives"
                    checked = {values.blackOlives}
                    onChange = {onChange}>
                    </input> Black Olives
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "roastedGarlic"
                    checked = {values.roastedGarlic}
                    onChange = {onChange}>
                    </input> Roasted Garlic
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "artichokeHearts"
                    checked = {values.artichokeHearts}
                    onChange = {onChange}>
                    </input> Artichoke Hearts
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "threeCheese"
                    checked = {values.threeCheese}
                    onChange = {onChange}>
                    </input> Three Cheese
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "pineapple"
                    checked = {values.pineapple}
                    onChange = {onChange}>
                    </input> Pineapple
                </label>
                <label>
                    <input 
                    type = "checkbox"
                    name = "extraCheese"
                    checked = {values.extraCheese}
                    onChange = {onChange}>
                    </input> Extra Cheese
                </label>
                <div>
                    <h3>Choice of Substitute</h3>
                    <p>$1.00</p>
                </div>
                <label>
                    <input 
                    type = "checkbox"
                    name = "glutenFree"
                    checked = {values.glutenFree}
                    onChange = {onChange}>
                    </input> Gluten Free
                </label>

                <div>
                    <h3>Special Instruction</h3>
                </div>
                <label>
                    <input 
                    type = "text"
                    name = "other"
                    placeholder = "Anything else?"
                    checked = {values.other}
                    onChange = {onChange}>
                    </input> 
                </label>
                
            </form>
        </div>
    )
}

export default Form
