import React from 'react';
import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps';

import AdsBlock from './ads-block';
import FishingPlace from './fishing-block';
import FishingSlider from './fishing-slider';
import Footer from './footer';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterState: false,
            filterArray: [
                {
                    name: 'Рыбалка',
                    selected: false,
                    subcategories: [
                        {
                            name: 'Цена',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Ограничение по вылову',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Виды рыбы',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Последние зарыбление',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые зарыбления',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Рыбалка зимой',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Трофейная рыба',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность отпускать рыбу (принцип ПО)',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые акции, соревнования',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность онлайн заказа',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                    ]
                },
                {
                    name: 'Пруд',
                    selected: false,
                    subcategories: [
                        {
                            name: 'Цена',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Ограничение по вылову',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Виды рыбы',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Последние зарыбление',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые зарыбления',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Рыбалка зимой',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Трофейная рыба',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность отпускать рыбу (принцип ПО)',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые акции, соревнования',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность онлайн заказа',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                    ]
                },
                {
                    name: 'Отдых',
                    selected: false,
                    subcategories: [
                        {
                            name: 'Цена',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Ограничение по вылову',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Виды рыбы',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Последние зарыбление',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые зарыбления',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Рыбалка зимой',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Трофейная рыба',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность отпускать рыбу (принцип ПО)',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые акции, соревнования',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность онлайн заказа',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                    ]
                },
                {
                    name: 'Услуги',
                    selected: false,
                    subcategories: [
                        {
                            name: 'Цена',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Ограничение по вылову',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Виды рыбы',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Последние зарыбление',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые зарыбления',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Рыбалка зимой',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Трофейная рыба',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность отпускать рыбу (принцип ПО)',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые акции, соревнования',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность онлайн заказа',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                    ]
                },
                {
                    name: 'Аналитика',
                    selected: false,
                    subcategories: [
                        {
                            name: 'Цена',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Ограничение по вылову',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Виды рыбы',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Последние зарыбление',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые зарыбления',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Рыбалка зимой',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Трофейная рыба',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность отпускать рыбу (принцип ПО)',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Плановые акции, соревнования',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                        {
                            name: 'Возможность онлайн заказа',
                            subcategories: [
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem',
                                'lorem'
                            ]
                        },
                    ]
                }
            ]
        };
    }

    handleFilterClick = () => {
        const { filterArray } = this.state;
        const chosenCategory = filterArray.map(category => (
            { ...category, selected: false }
        ))

        this.setState({ filterState: !this.state.filterState, filterArray: chosenCategory });
    }

    handleSubcategoriesClick = e => {
        const { value } = e.target.dataset;
        const { filterArray } = this.state;
        const chosenCategory = filterArray.map(category => (
            category.name === value ? { ...category, selected: !category.selected } : { ...category, selected: false }
        ))

        this.setState({ filterArray: chosenCategory });
    }

    render() {
        const { filterState, filterArray } = this.state;
        const { arrayPlaces, innerWidth } = this.props;
        console.log(innerWidth);
        return (
            <>
                <main>
                    <div className='main__title-wrapper'>
                        <section className='main__title'>
                            <h1>
                                Платная рыбалка
                            </h1>
                            <p>
                                Поиск платных прудов и рыболовных баз. Каталог, отзывы, рейтинг.
                            </p>
                            <div>
                                <input type='text' placeholder='Город, область, место' />
                                {innerWidth >= 1024 ? <button>Найти</button> : <button></button>}
                            </div>
                        </section>
                    </div>
                    <AdsBlock />
                    <section className='main__fishing-places'>
                        <div className='fishing-places__title'>
                            <button className={`filter-button ${filterState ? 'open' : ''}`} onClick={this.handleFilterClick}>Фильтр</button>
                            <div>
                                <h2>Выбрать место для рыбалки</h2>
                                <div>
                                    <button className='filter-arrow up'></button>
                                    <button className='filter-arrow down'></button>
                                    <p>По расстоянию</p>
                                </div>
                            </div>
                        </div>
                        <div className='fishing-places__list'>
                            <section className={`fishing-places__filter ${filterState ? 'show' : ''}`}>
                                {filterArray.map((filterName, i) => (
                                    <div key={i}>
                                        <p className='filter-category' data-value={filterName.name} onClick={this.handleSubcategoriesClick}>
                                            {filterName.name}
                                        </p>
                                        <div>
                                            {filterName.subcategories.map((subcategory, i) => (
                                                <p className={`filter-subcategory ${filterName.selected ? 'show' : ''}`} key={i}>{subcategory.name}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </section>
                            {innerWidth >= 1024 ?
                                <div>
                                    <FishingPlace filterState={filterState} arrayPlaces={arrayPlaces} innerWidth={innerWidth} />
                                </div>
                                :
                                <div>
                                    <FishingSlider arrayPlaces={arrayPlaces} />
                                </div>
                            }
                        </div>
                        <button className='show-more'>Показать ещё...</button>
                    </section>
                    <AdsBlock />
                    <section className='main__map'>
                        <h2>Места ловли</h2>
                        <div className='map__wrapper'>
                            <YMaps>
                                <Map
                                    defaultState={{ center: [55.813461, 37.531548], zoom: 7 }}
                                    width='100%'
                                    height='100%'
                                    onLoad={this.createTemplateLayoutFactory}
                                    modules={['templateLayoutFactory', 'layout.ImageWithContent']}
                                >
                                    <Clusterer
                                        options={{
                                            iconLayout: `<div class='clusterer__wrapper'></div>`,
                                            iconImageSize: [123, 123],
                                            gridSize: 250
                                        }}
                                    >
                                        {arrayPlaces.map(place => (
                                            <Placemark
                                                key={place.id}
                                                geometry={place.coords}
                                                modules={[
                                                    'geoObject.addon.balloon'
                                                ]}
                                                properties={{
                                                    balloonContent: `
                                                        <div class='balloon__container'>
                                                            <h2>${place.title}</h2>
                                                            <div>
                                                                <p>${place.likesCount}</p>
                                                                <p>от ${place.price} ₽</p>
                                                            </div>
                                                            <a href=${`/places/${place.path}`}>Подробнеe</a>
                                                        </div>
                                                    `,
                                                    iconContent: `
                                                        <div class='placemark__container'>
                                                            <img src='./images/main/placemark-pic.png' alt='placemark' />
                                                            <div class='placemark__content'>
                                                                <h2>${place.title}</h2>
                                                                <div>
                                                                    <p>${place.likesCount}</p>
                                                                    <p>от ${place.price} ₽</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    `,
                                                }}
                                                options={{
                                                    iconLayout: 'default#imageWithContent',
                                                    iconImageHref: '',
                                                    iconImageSize: [324, 68],
                                                    hideIconOnBalloonOpen: false
                                                }}
                                            />
                                        ))}
                                    </Clusterer>
                                </Map>
                            </YMaps>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}

export default Main;