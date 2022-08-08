import React from "react";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

import AdsBlock from "./ads-block";
import FishingPlace from "./fishing-block";

const placemarks = [
    {
        id: 1,
        coords: [56.246356, 35.946967]
    },
    {
        id: 2,
        coords: [55.564183, 38.323960]
    },
    {
        id: 3,
        coords: [55.659405, 37.849417]
    }
]

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
        }
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

        return (
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
                            <button>Найти</button>
                        </div>
                    </section>
                </div>
                <AdsBlock />
                <section className='main__fishing-places'>
                    <div className='fishing-places__title'>
                        <button className={`filter-button ${filterState ? 'open' : ''}`} onClick={this.handleFilterClick}>Фильтр</button>
                        <h2>Выбрать место для рыбалки</h2>
                        <div>
                            <button className='filter-arrow up'></button>
                            <button className='filter-arrow down'></button>
                            <p>По расстоянию</p>
                        </div>
                    </div>
                    <div className='fishing-places__list'>
                        {
                            filterState &&
                            <section className='fishing-places__filter'>
                                {filterArray.map((filterName, i) => (
                                    <div key={i}>
                                        <p className='filter-category' data-value={filterName.name} onClick={this.handleSubcategoriesClick}>
                                            {filterName.name}
                                        </p>
                                        {filterName.selected && filterName.subcategories.map((subcategory, i) => (
                                            <p className='filter-subcategory' key={i}>{subcategory.name}</p>
                                        ))}
                                    </div>
                                ))}
                            </section>
                        }
                        <div>
                            <FishingPlace />
                        </div>
                    </div>
                    <button className='show-more'>Показать ещё...</button>
                </section>
                <AdsBlock />
                <section className='main__map'>
                    <h2>Места ловли</h2>
                    <div className='map__wrapper'>
                        <YMaps>
                            <Map defaultState={{ center: [55.813461, 37.531548], zoom: 9 }} width='100%' height='100%'>
                                <Clusterer
                                    options={{
                                        preset: 'islands#invertedVioletClusterIcons',
                                        groupByCoordinates: false
                                    }}
                                >
                                    {placemarks.map(placemark => (
                                        <Placemark
                                            key={placemark.id}
                                            geometry={placemark.coords}
                                            modules={[
                                                "geoObject.addon.balloon"
                                            ]}
                                        />
                                    ))}
                                </Clusterer>
                            </Map>
                        </YMaps>
                    </div>
                </section>
            </main>
        )
    }
}

export default Main;