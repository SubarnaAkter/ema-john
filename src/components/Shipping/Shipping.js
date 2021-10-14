import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="login">
                
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} /> <br />

                    <input defaultValue={user.email} {...register("email", { required: true })} /> <br />

                    {errors.email && <span>Email field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;