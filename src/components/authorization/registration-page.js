import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const RegistrationPage = ({ location, registrationSubmit, userId }) => {
    const registrationSteps = [
        {
            id: 1,
            name: 'Подробное описание',
            state: 'active'
        },
        {
            id: 2,
            name: 'Подписка',
            state: 'disabled'
        },
        {
            id: 3,
            name: 'Готово!',
            state: 'disabled'
        }
    ];

    const [currentStep, setNextStep] = useState(1);
    const [stateRegistrationSteps, setRegistrationSteps] = useState(registrationSteps);
    const [statePassword, changeStatePassword] = useState(false);
    const [applyAgreementChecked, setApplyAgreementChecked] = useState(false);
    const [defaultUserPhoto, setUserPhoto] = useState('/images/authorization/default-photo-icon.png')
    const [userInfo, setUserInfo] = useState(null);

    const userStatus = location.split('/').pop();

    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        watch,
        setError,
        clearErrors
    } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur'
    });

    const watchLogin = watch('login', '').split('');
    const watchPassword = watch('password', '').split('');
    const watchRepeatPassword = watch('password_repeat', '').split('');
    const watchName = watch('name', '').split('');
    const watchMail = watch('mail', '').split('');
    const watchCity = watch('city', '').split('');
    const watchPhoneNumber = watch('number', '').split('');

    const handleUploadPhoto = e => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        if (file.type !== 'image/jpeg' || file.type !== 'image/jpeg') {
            setError('photo', {
                type: 'filetype',
                message: 'Только файлы с расширением .jpg, .jpeg'
            })
        } else if (file.size > 1048576) {
            setError('photo', {
                type: 'filesize',
                message: 'Максимальный размер файла 1 Мб.'
            })
        } else {
            clearErrors();
            reader.onloadend = () => {
                setUserPhoto(reader.result);
            }

            reader.readAsDataURL(file);
        }
    }

    const handleStepClick = e => {
        const { id } = e.currentTarget.dataset;

        stateRegistrationSteps.map(step => (
            step.state === 'completed' && setNextStep(+id)
        ))

        const prevStateRegistrationSteps = stateRegistrationSteps.map(step => (
            step.id === +id && step.state === 'completed' && +id >= step.id ? { ...step, state: 'active' } : {...step, state: 'disabled'}
        ));

        setRegistrationSteps(prevStateRegistrationSteps);
    }

    const onSubmit = data => {
        const changedRegistrationSteps = stateRegistrationSteps.map(step => {
            if (step.id === 1) {
                return { ...step, state: 'completed' };
            } else if (step.id === 2) {
                return { ...step, state: 'active' };
            } else {
                return { ...step, state: 'disabed' };
            }
        });

        setRegistrationSteps(changedRegistrationSteps);
        setUserInfo({ ...data, userPhoto: defaultUserPhoto, userStatus: userStatus });
        setNextStep(2);
    }

    const handleChosenSubscription = e => {
        const { value } = e.target.dataset;

        const changedRegistrationSteps = stateRegistrationSteps.map(step => {
            if (step.id === 1) {
                return { ...step, state: 'completed' };
            } else if (step.id === 2) {
                return { ...step, state: 'completed' };
            } else {
                return { ...step, state: 'active' };
            }
        });

        setRegistrationSteps(changedRegistrationSteps);
        setUserInfo({ ...userInfo, subscription: value });
        setNextStep(3);
        registrationSubmit(userInfo);
    }

    return (
        <section className='registration-page'>
            <ul className='registration-page__steps'>
                {stateRegistrationSteps.map((step, i) => (
                    <li className={step.state} data-id={step.id} onClick={step.state === 'completed' ? handleStepClick : () => {}} key={i}>
                        <p className={`step_icon ${step.state}`}>{step.id}</p>
                        <p className='step_caption'>{step.name}</p>
                    </li>
                ))}
            </ul>
            {currentStep === 1 && <form className='registration-page__form' onSubmit={handleSubmit(onSubmit)}>
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
                    Пароль *
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
                <label className='password'>
                    Повторите пароль *
                    <input
                        type={statePassword ? 'text' : 'password'}
                        className={`${statePassword ? 'active' : ''} ${watchRepeatPassword.length > 6 && !errors.password_repeat ? 'valid' : 'error'}`}
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
                        autoComplete='off'
                        className={watchName.length > 2 && !errors.name ? 'valid' : 'error'}
                        {...register('name', {
                            minLength: {
                                value: 2,
                                message: 'Имя должно содержать от 2 до 16 символов.'
                            },
                            maxLength: {
                                value: 16,
                                message: 'Логин должен содержать от 2 до 16 символов.'
                            },
                            pattern: {
                                value: /[а-яА-Яa-zA-Z0-9]/,
                                message: 'Логин введён некорректно.'
                            }
                        })}
                    />
                </label>
                <div className='error-message'>
                    {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
                </div>
                <label>
                    Введите email *
                    <input
                        type='email'
                        placeholder='Введите электронную почту'
                        autoComplete='off'
                        className={watchMail.length > 6 && !errors.mail ? 'valid' : 'error'}
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
                <div className='error-message'>
                    {errors?.photo && <p>{errors?.photo?.message || 'Error!'}</p>}
                </div>
                <label>
                    Город
                    <input
                        type='text'
                        placeholder='Введите название города'
                        autoComplete='off'
                        className={watchCity.length > 2 && !errors.city ? 'valid' : 'error'}
                        {...register('city', {
                            minLength: {
                                value: 3,
                                message: 'Название города должно содержать от 3 до 16 символов.'
                            },
                            maxLength: {
                                value: 16,
                                message: 'Название города должно содержать от 3 до 16 символов.'
                            },
                            pattern: {
                                value: /[а-яА-Яa-zA-Z]/,
                                message: 'Название города введено некорректно.'
                            }
                        })}
                    />
                </label>
                <div className='error-message'>
                    {errors?.city && <p>{errors?.city?.message || 'Error!'}</p>}
                </div>
                <label>
                    Телефон
                    <input
                        type='text'
                        placeholder='Введите номер телефона'
                        autoComplete='off'
                        className={watchPhoneNumber.length > 6 && !errors.number ? 'valid' : 'error'}
                        {...register('number', {
                            minLength: {
                                value: 3,
                                message: 'Номер телефона должен содержать от 3 до 16 символов.'
                            },
                            maxLength: {
                                value: 16,
                                message: 'Номер телефона должен содержать от 3 до 16 символов.'
                            },
                            pattern: {
                                value: /[a-zA-Z0-9]/,
                                message: 'Номер телефона введён некорректно.'
                            }
                        })}
                    />
                </label>
                <div className='error-message'>
                    {errors?.number && <p>{errors?.number?.message || 'Error!'}</p>}
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
            </form>}
            {currentStep === 2 && <section className='registration-page__subscription-payment'>
                <div>
                    <img src='/images/subscription/basic-subscription.png' alt='basic' />
                    <ul>
                        <p>Поиск по следующим параметрам:</p>
                        <li>Типы рыбы в зарыблении</li>
                        <li>Расстояние от парковки до места ловли</li>
                        <li>Плановые акции или соревнования</li>
                        <li>Копчение и обработка рыбы</li>
                        <li>Продажа наживца</li>
                        <li>Отзывы и комментарии к местам ловли</li>
                    </ul>
                    <ul>
                        <p>Дополнительные преимущества:</p>
                        <li>Добавление место ловли в избранное</li>
                        <li>Оповещения избранного места ловли</li>
                        <li>Новые зарыбления (оповещение)</li>
                        <li>Доп. информация о место ловли</li>
                    </ul>
                    <div>
                        <p>250 ₽<span>1 месяц</span></p>
                        <button data-value='basic' onClick={handleChosenSubscription}>Купить</button>
                    </div>
                </div>
                <div>
                    <img src='/images/subscription/member-subscription.png' alt='member' />
                    <ul>
                        <p>Поиск по следующим параметрам:</p>
                        <li>Рыбалка зимой</li>
                        <li>Трофейная рыба</li>
                        <li>Плановые акции или соревнования</li>
                        <li>Качество мобильной связи и интернета</li>
                        <li>Продажа живой рыбы</li>
                        <li>Наличие мест для купания</li>
                    </ul>
                    <ul>
                        <p>Дополнительные преимущества:</p>
                        <li>Премущества <span>BASIC</span> подписки</li>
                        <li>Будущие зарыбления (оповещение)</li>
                        <li>Типы рыбы в зарыблении</li>
                    </ul>
                    <div>
                        <p>500 ₽<span>1 месяц</span></p>
                        <button data-value='member' onClick={handleChosenSubscription}>Купить</button>
                    </div>
                </div>
            </section>}
            {currentStep === 3 && <section className='registration-page__complete'>
                <img src='/images/authorization/complete-icon.svg' alt='complete' />
                <p>Готово!</p>
                <Link to={`/profile/${userId}`}>Перейти в личный кабинет</Link>
            </section>}
        </section>
    )
}

export default RegistrationPage;