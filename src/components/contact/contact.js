import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterNav: [
                {
                    id: 1,
                    name: 'Все пользователи',
                    selected: true
                },
                {
                    id: 2,
                    name: 'Подписчики',
                    selected: false
                },
                {
                    id: 3,
                    name: 'Владельцы',
                    selected: false
                }
            ],
            arrayFaq: {
                leftContent: [
                    {
                        id: 1,
                        selected: false,
                        title: 'Как поменять пароль?',
                        text: <p>Если вы зарегестрированный пользователь, то воспользуйтесь <a href='/'>данной ссылкой</a>. Если же вам не приходит письмо с ссылкой на смену пароля или какая то другая техническая проблема, пожалуйста сообщите нам на почту <span>fish@berries.com.</span></p>
                    },
                    {
                        id: 3,
                        selected: false,
                        title: 'Как поменять почту или ник?',
                        text: <p>Если вы зарегестрированный пользователь, то воспользуйтесь <a href='/'>данной ссылкой</a>. Если же вам не приходит письмо с ссылкой на смену пароля или какая то другая техническая проблема, пожалуйста сообщите нам на почту <span>fish@berries.com.</span></p>
                    }
                ],
                rightContent: [
                    {
                        id: 2,
                        selected: false,
                        title: 'Как добавить место в избранное и где его потом найти?',
                        text: <p>Если вы зарегестрированный пользователь, то воспользуйтесь <a href='/'>данной ссылкой</a>. Если же вам не приходит письмо с ссылкой на смену пароля или какая то другая техническая проблема, пожалуйста сообщите нам на почту <span>fish@berries.com.</span></p>
                    },
                    {
                        id: 4,
                        selected: false,
                        title: 'Я нашёл ошибку или не точность, как этом сообщить?',
                        text: <p>Если вы зарегестрированный пользователь, то воспользуйтесь <a href='/'>данной ссылкой</a>. Если же вам не приходит письмо с ссылкой на смену пароля или какая то другая техническая проблема, пожалуйста сообщите нам на почту <span>fish@berries.com.</span></p>
                    }
                ]
            }
        }
    }

    handleFilterClick = e => {
        const { filterNav } = this.state;
        const { id } = e.target.dataset;

        const chosenFilter = filterNav.map(filter => (
            filter.id === +id ? { ...filter, selected: true } : { ...filter, selected: false }
        ));

        this.setState({ filterNav: chosenFilter });
    }

    handleLeftContentFaqClick = e => {
        const { arrayFaq } = this.state;
        const { id } = e.target.dataset;

        const onClickFaq = arrayFaq.leftContent.map(faq => (
            faq.id === +id ? { ...faq, selected: !faq.selected } : { ...faq }
        ));

        this.setState({ arrayFaq: { ...arrayFaq, leftContent: onClickFaq } });
    }

    handleRightContentFaqClick = e => {
        const { arrayFaq } = this.state;
        const { id } = e.target.dataset;

        const onClickFaq = arrayFaq.rightContent.map(faq => (
            faq.id === +id ? { ...faq, selected: !faq.selected } : { ...faq }
        ));

        this.setState({ arrayFaq: { ...arrayFaq, rightContent: onClickFaq } });
    }

    render() {
        const { filterNav, arrayFaq } = this.state;

        return (
            <main className='faq'>
                <section className='main__faq'>
                    <h2>Часто задаваемые вопросы</h2>
                    <ul>
                        {filterNav.map((filter, i) => (
                            <li key={i}><button className={filter.selected ? 'active' : ''} data-id={filter.id} onClick={this.handleFilterClick}>{filter.name}</button></li>
                        ))}
                    </ul>
                    <section className='faq__wrapper'>
                        <div>
                            {arrayFaq.leftContent.map((faq, i) => (
                                <div className={`faq__container ${faq.selected ? 'active' : ''}`} key={i}>
                                    <div>
                                        <h3>{faq.title}</h3>
                                        <button className={faq.selected ? 'active' : ''} data-id={faq.id} onClick={this.handleLeftContentFaqClick}></button>
                                    </div>
                                    {faq.selected &&
                                        faq.text
                                    }
                                </div>
                            ))}
                        </div>
                        <div>
                            {arrayFaq.rightContent.map((faq, i) => (
                                <div className={`faq__container ${faq.selected ? 'active' : ''}`} key={i}>
                                    <div>
                                        <h3>{faq.title}</h3>
                                        <button className={faq.selected ? 'active' : ''} data-id={faq.id} onClick={this.handleRightContentFaqClick}></button>
                                    </div>
                                    {faq.selected &&
                                        faq.text
                                    }
                                </div>
                            ))}
                        </div>
                    </section>
                    <p className='main__faq_prompt'>Не нашли ответ? напишите на нашу <a href='mailto:fish@berries.com'>электронную почту.</a></p>
                </section>
            </main>
        )
    }
}

export default Contact;