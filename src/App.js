import React, { useState, useEffect } from "react";
import Home from './Home';
import Form from './Form';
import Nav from './Nav';
import './App.css'
import { Route, Switch } from 'react-router-dom'
import * as yup from 'yup'
import Schema from './Schema'
import axios from 'axios'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  chicken: false,
  basil: false,
  pineapple: false,
  ham: false,
  olives: false,
  instructions: ''
}

const initialFormErrors = {
  name: 'Enter Name',
  size: 'Choose a Size',
}

export default function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const createPizza = pizza => {
    axios
      .post('https://reqres.in/api/pizza', pizza)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      })
    setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(Schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'sausage', 'chicken', 'basil', 'pineapple', 'ham', 'olives'].filter(topping => formValues[topping])
    }
    createPizza(pizza)
  }
  useEffect(() => {
    Schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
    <Switch>
        <Route path="/Pizza">
          <Nav />
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled} />
        </Route>
        <Route path="/">
          <Nav />
          <Home />
        </Route>
      </Switch>
    </>
    )
  };