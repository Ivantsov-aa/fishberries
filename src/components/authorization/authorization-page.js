import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AuthorizationPage = ({ navigate, handleLogIn }) => {
    const [statePassword, changeStatePassword] = useState(false);
    const [errorAuth, setError] = useState(null);

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({
        mode: 'onBlur'
    });

    const watchLogin = watch('login', '').split('');
    const watchPassword = watch('password', '').split('');

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem('users'));

        if (users) {
            users.map(user => {
                if (user.login === data.login && user.password === data.password) {
                    handleLogIn({ ...user, isLogged: true });
                    navigate(`/profile/${user.userId}/cabinet`);
                    setError(false);
                } else {
                    setError(true);
                }
                return user;
            });
        } else {
            setError(true);
        }
    }

    return (
        <section className='authorization-page'>
            <h1>Войти в аккаунт</h1>
            <p>Не зарегистрированы? <Link to='/registration'>Зарегистрироваться</Link></p>
            <form className='authorization-form' onSubmit={handleSubmit(onSubmit)}>
                {errorAuth && <div className='error-message error-auth'><p>Неверный логин или пароль.</p></div>}
                <label>
                    Ваше имя (никнейм)
                    <input
                        type='text'
                        placeholder='Введите логин'
                        autoComplete='off'
                        className={watchLogin.length > 3 && !errors.login ? 'valid' : 'error'}
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
                                value: /[а-яА-Яa-zA-Z0-9]/,
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
                        className={`${statePassword ? 'active' : ''} ${watchPassword.length > 6 && !errors.password ? 'valid' : 'error'}`}
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
                                message: 'Недостаточно сложный пароль.'
                            }
                        })}
                    />
                    <p className={statePassword ? 'active' : ''} onClick={() => changeStatePassword(!statePassword)}></p>
                </label>
                <div className='error-message'>
                    {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
                </div>
                <p>Забыли пароль? <Link to='/'>Восстановить</Link></p>
                <input type='submit' value='Войти' />
            </form>
        </section>
    )
}

export default AuthorizationPage;