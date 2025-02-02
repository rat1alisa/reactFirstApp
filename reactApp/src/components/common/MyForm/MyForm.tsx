import { useForm, FieldErrors } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import "./MyForm.css";
//import { useHistory } from 'react-router-dom';

import React from 'react';


interface FormValues {
    name: string;
    email: string;
    password: string;
}

const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();

    // function onSubmit(data: FormValues) {
    //     console.log(data);
    // };

    const onSubmit = (data: FormValues) => {
        console.log("Form Submitted:", data);
        navigate('/counter');
    };

    return (
        <div className='form'>
            <h4>Sign up</h4>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <input
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 6,
                            message: "Name must be at least 6 characters",
                        },
                        maxLength: {
                            value: 24,
                            message: "Name must be no more than 24 characters",
                        },
                    })}
                    className="input"
                    placeholder="Name"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input
                    {...register("email", {
                        required: "Email is required",
                        minLength: {
                            value: 12,
                            message: "Email must be at least 12 characters",
                        },
                        maxLength: {
                            value: 40,
                            message: "Email must be no more than 40 characters",
                        },
                    })}
                    className="input"
                    placeholder="Email"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input
                    {...register("password", {
                        required: "Password is required",
                        validate: (value: string) => value.length === 8 || "Password must be 8 characters",
                    })}
                    className="input"
                    placeholder="Password"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

               <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;




{/*const Form = () => {

    const { register, handleSubmit, formState: { errors} } 
    = useForm();
    const navigate = useNavigate();

    function onSubmit(data) {
        console.log(data);
    };

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        navigate('/counter');
    };

    return (
        <div className='form'>
            <h4>Sign up</h4>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <input 
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 6,
                            message: "Name must be at least 6 characters",
                        },
                        maxLength: {
                            value: 24,
                            message: "Name must be no more than 24 characters",
                        },
                    })}
                    className="input"
                    placeholder="Name"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input
                    {...register("email", {
                        required: "Email is required",
                        minLength: {
                            value: 12,
                            message: "Email must be at least 12 characters",
                        },
                        maxLength: {
                            value: 40,
                            message: "Email must be no more than 40 characters",
                        },
                    })}
                    className="input"
                    placeholder="Email"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input 
                    {...register("password", {
                        required: "Password is required",
                        length: 8,
                    })}
                    className="input"
                    placeholder="Password"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
                
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Form;*/}