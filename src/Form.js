import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';


export default function Pizza(props) {
    const { values, submit, change, errors, disabled } = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    return (
        <div className='pizzaFormDiv'>
            <h1>Create Your Pizza!</h1>
            <img src="../Assets/Pizza.jpg"></img>
            <form onSubmit={onSubmit}>
                <div className='errors'>
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                </div>

                <lable>
                    <h3>Name</h3>
                    <input
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                    />
                </lable>

                <lable>
                    <h3>Size</h3>
                    <select
                        onChange={onChange}
                        value={values.size}
                        name='size'>
                        <option value=''>--Size--</option>
                        <option value='personal'>Personal</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='extra large'>Extra Large</option>
                    </select>
                </lable>

                <lable>
                    <h3>Toppings</h3>
                    <h4>Choose your pizza toppings</h4>
                    <lable>Pepperoni
                    <input
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                        />
                    </lable>

                    <lable>Sausage
                    <input
                            type='checkbox'
                            name='sausage'
                            onChange={onChange}
                        />
                    </lable>

                    <lable>Chicken
                    <input
                            type='checkbox'
                            name='chicken'
                            onChange={onChange}
                        />
                    </lable>

                    <lable>Basil
                    <input
                            type='checkbox'
                            name='basil'
                            onChange={onChange}
                        />
                    </lable>

                    <lable>Pineapple
                    <input
                            type='checkbox'
                            name='pineapple'
                            onChange={onChange}
                        />
                    </lable>

                    <lable>Ham
                    <input
                            type='checkbox'
                            name='ham'
                            onChange={onChange}
                        />
                    </lable>

                    <lable>Olives
                    <input
                            type='checkbox'
                            name='olives'
                            onChange={onChange}
                        />
                    </lable>
                </lable>

                <lable>
                    <h3>Special Instructions</h3>
                    <input
                        style={{ width: '90%', marginLeft: '4%' }}
                        name='instructions'
                        type='text'
                        onChange={onChange}
                        value={values.instructions}
                    />
                </lable>

                <button id="submit" disabled={disabled}>Order Pizza!</button>

            </form>
        </div>
    )
}