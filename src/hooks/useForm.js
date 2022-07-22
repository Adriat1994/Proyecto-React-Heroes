import { useState } from "react";


//Creamos un custom hook para crear formularios


export const useForm = (initialForm = {}) => {
    //initialForm seria el valor inicial de nuestro formulario

    const [formState, setFormState] = useState(initialForm);
    //formState va a ser igual a initialForm    

    const onInputChange = ({target}) => {
       const {name, value} = target;
       setFormState({
        ...formState,
        [name]: value
       })
    }

    const onResetForm = () => {
        setFormState(initialForm);
        //le decimos que el estado del formulario va a cambiar a la forma inicial, a los valores iniciales
    }


    return {
        ...formState, //desestructuramos formState para luego poder extraer sus componentes de forma sencilla en nuestro formulario
        formState,
        onInputChange,
        onResetForm,    //devolvemos nuestra nueva función para usarla en el formulario
    }
}
