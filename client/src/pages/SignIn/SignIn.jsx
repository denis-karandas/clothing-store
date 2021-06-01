import React from 'react'
import {useForm} from "../../hooks/useForm"

const SignIn = () => {
    const {inputs, onChange, onSubmit, bind} = useForm('#', 'POST')

    return (
        <div>
            <form {...bind} >
                <input type="text" name="email" value={inputs.email} onChange={onChange} />
                <input type="password" name="password" value={inputs.password} onChange={onChange} />
                <button type="submit" onSubmit={onSubmit}>Send</button>
            </form>
        </div>
    )
}

export default SignIn