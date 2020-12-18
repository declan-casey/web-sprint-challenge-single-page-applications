import React, {useEffect, useState} from "react";
import Form from "./components/Form"
import Home from "./components/Home"
import * as yup from "yup"
import schema from "./Schema/formSchema"
import axios from "axios"
import {Switch, Link, Route} from 'react-router-dom'


const initialFormValues = {
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  italianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  glutenFree: false,
  other: ''
}

const initialFormErrors = {
  size: '',
}

const initialPizza = []
const initialDisabled = true

const App = () => {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const inputChange = (pizza, value) => {
    yup.reach(schema, pizza).validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [pizza]: "",
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formValues,
        [pizza]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [pizza]: value
    })
  }

  


  const formSubmit = () => {
    const newPizza = {
      size: formValues.size.trim(),
      sauce:formValues.sauce.trim(),
      other:formValues.other.trim(),
      toppings:["pepperoni", "sausage", "canadianBacon", "italianSausage", "grilledChicken", "onnions", "greenPepper", "dicedTomatos", "blackOlives", "roastedGarlic", "artichokeHearts", "threeCheese", "pineapple", "extraCheese"].filter((toppings) => formValues[toppings]),
    }
    const postNewPizza = setPizza(pizza.concat(newPizza));
      setFormValues(initialFormValues);
        axios
          .post("fakeapi.com", newPizza)
          .then((res) => {
            setPizza([newPizza, ...pizza]);
            setFormValues(initialFormValues);
          })
          .catch((err) => {
          
        });
    postNewPizza(newPizza);
  }

  useEffect(() => {
    const getForm = () => {
      axios
      .get('http://localhost:3000/pizza')
      .then(response => {
        setPizza(response.data)
      }) 
      .catch(err => {
        console.log(err)
      })
  }
  getForm();
},[]);

  return (

    <div>
      <Switch>
        <h1>Lambda Eats</h1>
        <Route path = "/pizza">
          <Form 
          change = {inputChange}
          values = {formValues}
          submit = {formSubmit}
          disabled = {disabled}
          errors = {formErrors}
          />
      </Route>

        <Route path = "/">
          <Home/>
        </Route>
    </Switch>
    </div>
  );
};
export default App;
