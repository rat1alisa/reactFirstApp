import { useForm } from 'react-hook-form';
import "./MyForm.css";
//import { useHistory } from 'react-router-dom';

const Form = () => {

    const { register } = useForm();

    function onSubmit(data) {
        console.log(data);
    };

    return (
        <div>
            <h4>Sign up</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" 
                ref={register({
                    required: true,
                    minLength: 6,
                    maxLength: 24,
                })} 
                placeholder="Name" 
                style={style.input} 
                />
                <input 
                name="email" 
                ref={register({
                    required: true,
                    minLength: 12,
                    maxLength: 40,
                })} 
                placeholder="Email" 
                />
                <input 
                name="password" 
                ref={register({
                    required: true,
                    length: 8,
                })}  
                placeholder="Password" 
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;