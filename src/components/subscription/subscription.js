import React from "react";

class Subscription extends React.Component {
    render() {
        return (
            <main className='subscription'>
                <div>
                    <section className='subscription__container basic-subscription'>
                        <img src='/images/subscription/basic-subscription.png' alt='basic-subscription' />
                        <h3>250 ₽</h3>
                        <p>1 месяц</p>
                        <ul>
                            <li>Добавление место ловли в избранное</li>
                            <li>Оповещения избранного места ловли</li>
                            <li>Новые зарыбления (оповещение)</li>
                            <li>Доп. информация о место ловли</li>
                            <p>Поиск по следующим параметрам:</p>
                            <li>Типы рыбы в зарыблении</li>
                            <li>Расстояние от парковки до места ловли</li>
                            <li>Плановые акции или соревнования</li>
                            <li>Копчение и обработка рыбы</li>
                            <li>Продажа наживца</li>
                            <li>Отзывы и комментарии к местам ловли</li>
                        </ul>
                        <button>Купить</button>
                    </section>
                    <section className='subscription__container basic-member'>
                        <img src='/images/subscription/member-subscription.png' alt='basic-subscription' />
                        <h3>500 ₽</h3>
                        <p>1 месяц</p>
                        <ul>
                            <li>Премущества <span>BASIC</span> подписки</li>
                            <li>Будущие зарыбления (оповещение)</li>
                            <li>Типы рыбы в зарыблении</li>
                            <p>Поиск по следующим параметрам:</p>
                            <li>Рыбалка зимой</li>
                            <li>Трофейная рыба</li>
                            <li>Плановые акции или соревнования</li>
                            <li>Качество мобильной связи и интернета</li>
                            <li>Продажа живой рыбы</li>
                            <li>Наличие мест для купания</li>
                        </ul>
                        <button>Купить</button>
                    </section>
                </div>
            </main>
        )
    }
}

export default Subscription;