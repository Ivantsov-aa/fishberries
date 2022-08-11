import { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationPage = ({ location }) => {
    const registrationSteps = [
        {
            id: 1,
            name: 'Подробное описание',
            selected: true
        },
        {
            id: 2,
            name: 'Подписка',
            selected: false
        },
        {
            id: 3,
            name: 'Готово!',
            selected: false
        }
    ];

    const [stateRegistrationSteps, setRegistrationSteps] = useState(registrationSteps);
    const [statePassword, changeStatePassword] = useState(false);
    const [applyAgreementChecked, setApplyAgreementChecked] = useState(false);
    const [defaultUserPhoto, setUserPhoto] = useState('/images/authorization/default-photo-icon.png')

    const userStatus = location.split('/').pop();

    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({
        mode: 'onBlur'
    });

    const handleUploadPhoto = e => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setUserPhoto(reader.result);
        }

        reader.readAsDataURL(file);
    }

    console.log(defaultUserPhoto);

    return (
        <section className='registration-page'>
            <ul className='registration-page__steps'>
                {stateRegistrationSteps.map((step, i) => (
                    <li className={step.selected ? 'active' : ''} data-id={step.id} key={i}>
                        <p className={`step_icon ${step.selected ? 'active' : ''}`}>{step.id}</p>
                        <p className='step_caption'>{step.name}</p>
                    </li>
                ))}
            </ul>
            <form className='registration-page__form'>
                <p className='user-photo__caption'>Аватар</p>
                <div className='user-photo__container'>
                    <div className='user-photo'>
                        <img src={defaultUserPhoto} alt='user' />
                    </div>
                    <button className='delete-photo' disabled></button>
                </div>
                <label>
                    Логин *
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
                    Пароль *
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
                                message: 'Недостаточно сложный пароль.'
                            }
                        })}
                    />
                    <p className={statePassword ? 'active' : ''} onClick={() => changeStatePassword(!statePassword)}></p>
                </label>
                <div className='error-message'>
                    {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
                </div>
                <label className='password'>
                    Повторите пароль *
                    <input
                        type={statePassword ? 'text' : 'password'}
                        className={`${statePassword ? 'active' : ''} ${errors.password !== undefined ? 'error' : ''}`}
                        placeholder='Введите пароль'
                        {...register('password_repeat', {
                            required: 'Это поле обязательно к заполнению.',
                            validate: value => {
                                const { password } = getValues();
                                return value === password || 'Пароли не совпадают.'
                            }
                        })}
                    />
                    <p className={statePassword ? 'active' : ''} onClick={() => changeStatePassword(!statePassword)}></p>
                </label>
                <div className='error-message'>
                    {errors?.password_repeat && <p>{errors?.password_repeat?.message || 'Error!'}</p>}
                </div>
                <label>
                    Ваше имя
                    <input
                        type='text'
                        placeholder='Введите имя'
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
                <label>
                    Введите email *
                    <input
                        type='text'
                        placeholder='Введите электронную почту'
                        className={errors.login !== undefined ? 'error' : ''}
                        {...register('mail', {
                            required: 'Это поле обязательно к заполнению.',
                            pattern: {
                                value: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/,
                                message: 'E-mail введён некорректно.'
                            }
                        })}
                    />
                </label>
                <div className='error-message'>
                    {errors?.mail && <p>{errors?.mail?.message || 'Error!'}</p>}
                </div>
                <p className='user-photo__caption upload'>Аватар  (JPEG, макс. 1 Мб )</p>
                <div className='user-photo__container'>
                    <div className='user-photo'>
                        <label htmlFor='upload-photo'></label>
                        <input type='file' id='upload-photo' accept='.jpeg, .jpg' onChange={handleUploadPhoto} />
                    </div>
                    <button className='delete-photo' disabled></button>
                </div>
                <label>
                    Город
                    <input
                        type='text'
                        placeholder='Введите название города'
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
                <label>
                    Телефон
                    <input
                        type='text'
                        placeholder='Введите номер телефона'
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
                <input type='submit' value='Далее' />
                <div className='apply-agreement'>
                    <input type='checkbox' name='apply-agreement' checked={applyAgreementChecked} onChange={() => { }} className={errors?.apply_agreement && 'error'}
                        {...register('apply_agreement', {
                            required: 'Для регистрации необходимо принять условия пользовательского соглашения.'
                        })}
                    />
                    <label htmlFor='apply-agreement' onClick={() => setApplyAgreementChecked(!applyAgreementChecked)}>Я согласен на обработку персональных данных,
                        согласно Политике конфиденциальности.</label>
                </div>
                <div className='error-message'>
                    {errors?.apply_agreement && <p>{errors?.apply_agreement?.message || 'Error!'} Необходимо ознакомиться с условиями.</p>}
                </div>
            </form>
        </section>
    )
}

export default RegistrationPage;