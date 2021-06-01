import {useState} from "react"

export const useForm = (action, method) => {
    const [inputs, setInputs] = useState({})

    const onChange = e => {
        setInputs(() => ({
            ...inputs,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        if (e) {
            e.preventDefault()
        }
    }

    return {
        inputs,
        onChange,
        onSubmit,
        bind: { action, method }
    }
}