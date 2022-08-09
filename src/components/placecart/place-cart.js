import React from "react";
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

class PlaceCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeToCart: null
        }
    }

    componentDidMount() {
        const { arrayPlaces, location } = this.props;
        const currentLocation = location.split('/').pop();
        arrayPlaces.forEach(place => place.path === currentLocation && this.setState({ placeToCart: place }));
    }

    render() {
        const { placeToCart } = this.state;

        return (
            placeToCart &&
            <main className='place-cart__wrapper'>
                <section className='place-cart'>
                    <div className='place-cart__photo'>
                        {placeToCart.photos.map((photo, i) => (
                            <img src={photo} alt={placeToCart.path + i} key={i} />
                        ))}
                    </div>
                    <div className='place-cart__description'>
                        <p className='path'>{'Главная / ' + placeToCart.title.split(' ').shift()}</p>
                        <p className='place-area'>{placeToCart.region}<span>{placeToCart.area}</span></p>
                        <h2>{placeToCart.title}</h2>
                        <p className='organization-type'>{placeToCart.organization}</p>
                        <div className='statistic'>
                            <div>
                                <p className='lake-type'>{placeToCart.lakeType}</p>
                                <p className='likes-count'>{placeToCart.likesCount}</p>
                                <p className='comments'>{placeToCart.comments.length}</p>
                            </div>
                            <div>
                                <div className='rating-wrapper'>
                                    <p className='rating'>Средняя оценка</p>
                                    <p className='rating-count'>{placeToCart.rating}</p>
                                </div>
                            </div>
                            <div>
                                <button className='show-on-map'>Показать на карте</button>
                                <p className='view-count'>{placeToCart.viewed}</p>
                                <button className='share'></button>
                            </div>
                        </div>
                        <p className='place-cart_text'>
                            {placeToCart.description}
                        </p>
                        <div className='additional-info'>
                            <div className='info'>
                                <p className='avg-check'>{placeToCart.averageCheck} ₽<span>Средний чек</span></p>
                                <button className='to-favorite'>В избранное</button>
                                <div className='numbers'>
                                    <div>
                                        <p>+79169564750</p>
                                        <p>+79645795779</p>
                                    </div>
                                </div>
                            </div>
                            <div className='messanger'>
                                <p>Связаться с нами в мессенджерах</p>
                                <ul>
                                    <li><Link to='/'><img src='/images/main/icon-whatsapp.png' alt='whatsapp-icon' /></Link></li>
                                    <li><Link to='/'><img src='/images/main/icon-viber.png' alt='whatsapp-icon' /></Link></li>
                                    <li><Link to='/'><img src='/images/main/icon-telegram.png' alt='whatsapp-icon' /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='place-cart__footer'>
                            <button>Редактировать</button>
                            <div>
                                <button>Вы владелец?</button>
                                <button>Сообщить о неточности</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='place-cart__terms'>
                    <h2>Условия</h2>
                    <div>
                        <div>
                            <h3>Виды рыб</h3>
                            <p>{placeToCart.fishTypes}</p>
                        </div>
                        <div>
                            <h3>Время ловли</h3>
                            <p>Круглый год.</p>
                        </div>
                        <div>
                            <h3>Дополнительно</h3>
                            <ul>
                                <li>Есть подъездная дорогая, асфальт</li>
                                <li>Аренда дома</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='place-cart__rates'>
                    <h2>Цены</h2>
                    <div>
                        <div>
                            <h3>Нагульный пруд № 1</h3>
                            <ul>
                                <li>1 сутки — 1800 ₽</li>
                                <li>3 часа — 500 ₽</li>
                                <li>6 часов — 1000 ₽</li>
                                <li>12 часов — 1500 ₽</li>
                                <li>24 часа — 1800 ₽</li>
                            </ul>
                            <button>Условия</button>
                        </div>
                        <div>
                            <h3>
                                Пруд-садок, Летний-маточный пруд, Песочный пруд и Зимовальный пруд № 6
                            </h3>
                            <ul>
                                <li>2 часа — 1000 руб. Норма вылова — 5 кг.</li>
                                <li>4 часа — 1200 руб. Норма вылова — 6 кг.</li>
                                <li>6 часа — 1400 руб. Норма вылова — 7 кг.</li>
                                <li>8 часов — 1600 руб. Норма вылова — 8 кг.</li>
                                <li>10 часов — 1800 руб. Норма вылова — 9 кг.</li>
                                <li>12 часов — 2000 руб. Норма вылова — 10 кг.</li>
                            </ul>
                            <button>Отлов свыше нормы</button>
                        </div>
                        <div>
                            <h3>Зимовальные пруды № 1, № 2 и № 3</h3>
                            <ul>
                                <li>2 часа — 1500 ₽</li>
                                <li>4 часа — 2000 ₽</li>
                                <li>6 часов — 2500 ₽</li>
                                <li>9 часов — 3000 ₽</li>
                                <li>12 часов — 3500 ₽</li>
                            </ul>
                            <button>Отлов свыше нормы</button>
                        </div>
                    </div>
                </section>
                <section className='place-cart__stocking'>
                    <h2>Зарыбление</h2>
                    <div>
                        <div className='stocking_table'>
                            <table>
                                <col width='126px' />
                                <col width='68px' />
                                <col width='471px' />
                                <col width='79px' />
                                <thead>
                                    <tr>
                                        <th><button>месяц</button></th>
                                        <th><button>год</button></th>
                                        <th><button>вид рыбы</button></th>
                                        <th><button>вес</button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>30 марта</td>
                                        <td>2022</td>
                                        <td>щука</td>
                                        <td>1020 кг</td>
                                    </tr>
                                    <tr>
                                        <td>30 апреля</td>
                                        <td>2022</td>
                                        <td>осетр</td>
                                        <td>1020 кг</td>
                                    </tr>
                                    <tr>
                                        <td>30 мая</td>
                                        <td>2022</td>
                                        <td>щука</td>
                                        <td>1020 кг</td>
                                    </tr>
                                    <tr>
                                        <td>30 июня</td>
                                        <td>2022</td>
                                        <td>щука</td>
                                        <td>1020 кг</td>
                                    </tr>
                                    <tr>
                                        <td>30 июля</td>
                                        <td>2022</td>
                                        <td>стерлядь</td>
                                        <td>1020 кг</td>
                                    </tr>
                                    <tr>
                                        <td>30 августа</td>
                                        <td>2022</td>
                                        <td>сом африканский</td>
                                        <td>1020 кг</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button>Показать ещё...</button>
                        </div>
                        <div className='add-terms'>
                            <h3>Дополнительно</h3>
                            <p>
                                Разрешённые орудия ловли: поплавковая удочка, донная удочка, фидер, спиннинг.
                                Разрешено одновременное использование орудий для ловли на одну лицензию-путёвку не более 3-х.
                                Разрешено в светлое время суток и в специально отведённой зоне одновременное присутствие не более 5 вёсельных плавсредств.
                                Рыбная ловля без оплаты лицензии (путёвки) на всех водоемах принадлежащих ЗАО «Гжелка» является браконьерством и облагается штрафом в 10.000 рублей.
                            </p>
                        </div>
                    </div>
                </section>
                <section className='place-cart__reviews'>
                    <div className='reviews_title'>
                        <div>
                            <button className='filter-arrow up'></button>
                            <button className='filter-arrow down'></button>
                            <p>По дате</p>
                        </div>
                        <h2>Отзывы</h2>
                    </div>
                    <div className='comments__wrapper'>
                        {placeToCart.comments.map((comment, i) => (
                            <div className='comment__container' key={i}>
                                <div className='user-photo'>
                                    <img src={comment.photo} alt='user' />
                                </div>
                                <div className='comment__details'>
                                    <Rating
                                        emptySymbol={<img src='/images/main/icon-empty-rating.svg' alt='rating-star' />}
                                        placeholderSymbol={<img src='/images/main/icon-active-rating.svg' alt="rating-star" />}
                                        fullSymbol={<img src='/images/main/icon-active-rating.svg' alt='rating-star' />}
                                        placeholderRating={comment.rating}
                                        readonly
                                    />
                                    <p className='comment-text'>{comment.text}</p>
                                    <p className='user-name'>{comment.userName}<span>{comment.date}</span></p>
                                    <div className='details__footer'>
                                        <div>
                                            <p className='likes-count'>{comment.likesCount}</p>
                                            <p className='comment-count'>{comment.commentsCount}</p>
                                        </div>
                                        <p>Прочитать полностью</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='show-more'>Показать ещё</button>
                </section>
            </main>
        )
    }
};

export default PlaceCart;