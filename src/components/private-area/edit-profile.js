import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import NavBar from './navbar';

const EditProfilePage = ({ location, navigate, authUser, handleNewPersonalInfo }) => {

    const [statePassword, changeStatePassword] = useState(false);
    const [defaultUserPhoto, setUserPhoto] = useState('/images/authorization/default-photo-icon.png')

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
            reader.onload = () => {
                setUserPhoto(reader.result);
            }

            reader.readAsDataURL(file);
        }
    }

    const handleClickDeleteButton = () => {
        setUserPhoto('/images/authorization/default-photo-icon.png');
    }

    const onSubmit = data => {
        handleNewPersonalInfo({...data, userPhoto: defaultUserPhoto});
        navigate(`/profile/${authUser.userId}/cabinet`);
    }

    return (
        <>
            <NavBar location={location} authUser={authUser} />
            <section className='main__content'>
                <div>
                    <p>Управление аккаунтом</p>
                    <h2>Редактировать профиль</h2>
                    <p className='press-to-edit'>Нажмите <Link to={`/profile/${authUser.userId}/edit-profile`}>здесь</Link>, чтобы редактировать свой аккаунт</p>
                </div>
                <div>
                    <p className='user-photo__caption'>Аватар</p>
                    <div className='user-photo__container'>
                        <div className='user-photo'>
                            <img src={defaultUserPhoto} alt='user' />
                        </div>
                        <button className='delete-photo' onClick={handleClickDeleteButton}></button>
                    </div>
                </div>
                <form className='edit-user__form' onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Логин *
                        <input
                            type='text'
                            placeholder='Введите логин'
                            defaultValue={authUser.login}
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
                            defaultValue={authUser.password && authUser.password}
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
                        Подтвердите пароль *
                        <input
                            type={statePassword ? 'text' : 'password'}
                            className={`${statePassword ? 'active' : ''} ${watchRepeatPassword.length > 6 && !errors.password_repeat ? 'valid' : 'error'}`}
                            placeholder='Введите пароль'
                            defaultValue={authUser.password && authUser.password}
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
                            defaultValue={authUser.name && authUser.name}
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
                            defaultValue={authUser.mail}
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
                            defaultValue={authUser.city && authUser.city}
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
                            defaultValue={authUser.number && authUser.number}
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
                    <input type='submit' value='Подтвердить' />
                </form>
            </section>
        </>
    )
}

export default EditProfilePage;