import { useState } from "react";
import { useForm } from "react-hook-form";

const AuthorizationPage = ({ navigate, handleLogIn }) => {
    const [statePassword, changeStatePassword] = useState(false);
    const [errorAuth, setError] = useState(null);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem('users'));

        if (users) {
            users.map(user => {
                if (user.login === data.login && user.password === data.password) {
                    handleLogIn({ ...user, isLogged: true });
                    navigate(`/profile/${user.userId}`);
                    setError(false);
                } else {
                    setError(true);
                }
                return user;
            });
        } else {
            setError(true);
        }

        reset();
    }

    return (
        <form className='authorization-form' onSubmit={handleSubmit(onSubmit)}>
            {errorAuth && <div className='error-message'>Неверный логин или пароль.</div>}
            <label>
                Ваше имя (никнейм)
                <input
                    type='text'
                    placeholder='Введите логин'
                    className={errors.login !== undefined ? 'error' : ''}
                    {...register('login', {
                        required: 'Это поле обязательно к заполнению.',
                        minLength: {
                            value: 3,
                            message: 'Логин должен содержать от 3 до 16 символов.'
                        },
                        maxLength: {
                            value: 16,
                            message: 'Логин должен содержать от 3 до 16 символов.'
                        },
                        pattern: {
                            value: /[a-zA-Z0-9]/,
                            message: 'Логин введён некорректно.'
                        }
                    })}
                />
            </label>
            <div className='error-message'>
                {errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}
            </div>
            <label className='password'>
                Пароль
                <input
                    type={statePassword ? 'text' : 'password'}
                    className={`${statePassword ? 'active' : ''} ${errors.password !== undefined ? 'error' : ''}`}
                    placeholder='Введите пароль'
                    {...register('password', {
                        required: 'Это поле обязательно к заполнению.',
                        minLength: {
                            value: 6,
                            message: 'Пароль должен содержать от 6 до 16 символов.'
                        },
                        maxLength: {
                            value: 16,
                            message: 'Пароль должен содержать от 6 до 16 символов.'
                        },
                        pattern: {
                            value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
                            message: 'Недостаточно сложный пароль'
                        }
                    })}
                />
                <p className={statePassword ? 'active' : ''} onClick={() => changeStatePassword(!statePassword)}></p>
            </label>
            <div className='error-message'>
                {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
            </div>
            <input type='submit' value='Войти' />
        </form>
    )
}

export default AuthorizationPage;