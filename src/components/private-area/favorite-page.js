import React from 'react';
import { Link } from 'react-router-dom';

class FavoritePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayPlaces: null,
            openDeletePopUp: false,
            cartForDelete: null
        }
    };

    componentDidMount() {
        const { arrayPlaces } = this.props;
        this.setState({ arrayPlaces: arrayPlaces });
    };

    handleCartClick = e => {
        const { value } = e.currentTarget.dataset;
        const { arrayPlaces } = this.state;

        const deleteOpenArrayPlaces = arrayPlaces.map(place => (
            place.path === value ? { ...place, selected: !place.selected } : { ...place }
        ));

        this.setState({ arrayPlaces: deleteOpenArrayPlaces, cartForDelete: value });
    };

    deletePlaceCart = () => {
        const { openDeletePopUp } = this.props;
        const { arrayPlaces, cartForDelete } = this.state;
        const deleteCartFormArray = arrayPlaces.filter(place => (
            place.path !== cartForDelete
        ));

        this.setState({ arrayPlaces: deleteCartFormArray });
        openDeletePopUp();
    };

    render() {
        const { arrayPlaces } = this.state;
        const { stateDeletePopUp, openDeletePopUp } = this.props;

        return (
            arrayPlaces &&
            <section>
                {arrayPlaces.map((place, i) => (
                    <div className='fishing-place__wrapper private-area' key={i}>
                        {place.selected && <button className='delete-button' data-value={place.path} onClick={openDeletePopUp}>Удалить</button>}
                        <div className={`fishing-place__cart ${place.selected ? 'active' : ''}`} data-value={place.path} onClick={this.handleCartClick}>
                            <div className='fishing-place__pic'>
                                <img src={place.pic} alt='fishing-pic' />
                            </div>
                            <div className='fishing-place__desc'>
                                <h3>{place.title}</h3>
                                <p>{place.shortDesc}</p>
                                <h4>{place.region}</h4>
                                <div className='desc_footer'>
                                    <p className='likes-count'>{place.likesCount}</p>
                                    <div className='rating-wrapper'>
                                        <p className='rating'>Средняя оценка</p>
                                        <p className='rating-count'>{place.rating}</p>
                                    </div>
                                    {!place.selected && <button className='show-on-map'>Показать на карте</button>}
                                </div>
                            </div>
                            <div className='fishing-place__types'>
                                <h3>Виды рыб</h3>
                                <p>{place.fishTypes}</p>
                            </div>
                            <div className='fishing-place__details'>
                                <Link to={`/places/${place.path}`}>Подробнее</Link>
                                <p className='work-time'>Время ловли<span>{place.workTime}</span></p>
                                <p className='price'>от {place.price} ₽</p>
                                {place.selected && <button className='show-on-map'>Показать на карте</button>}
                            </div>
                        </div>
                    </div>
                ))}
                {stateDeletePopUp &&
                    <div className='apply-delete_pop-up'>
                        <h2>Удалить место</h2>
                        <p>Вы уверены, что хотите удалить данное место? Место будет удалено, без возможности восстановления.</p>
                        <div>
                            <button onClick={openDeletePopUp}>Нет, отменить</button>
                            <button onClick={this.deletePlaceCart}>Да, удалить</button>
                        </div>
                    </div>
                }
            </section>
        )
    }
}

export default FavoritePage;