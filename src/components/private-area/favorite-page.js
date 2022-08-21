import React from 'react';
import { Link } from 'react-router-dom';

import FishingSlider from '../fishing-slider';
import DeletePopUp from './delete-pop-up';

class FavoritePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayPlaces: null,
            cartForDelete: null
        };
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
        const { innerWidth, stateDeletePopUp, openDeletePopUp } = this.props;

        return (
            arrayPlaces &&
            <section className='personal-area__favorite'>
                {innerWidth >= 1024 ?
                    arrayPlaces.map((place, i) => (
                        <div className='fishing-place__wrapper private-area' key={i}>
                            {place.selected && <button className='delete-button' data-value={place.path} onClick={openDeletePopUp}>Удалить</button>}
                            <div className={`fishing-place__cart ${place.selected ? 'active' : ''}`} data-value={place.path} onClick={this.handleCartClick}>
                                <div className='fishing-place__pic'>
                                    <img src={place.pic} alt='fishing-pic' />
                                </div>
                                <div className='fishing-place__desc'>
                                    <h3>{place.title}</h3>
                                    <p>{place.description}</p>
                                    <h4>{place.region}</h4>
                                    <div className='desc_footer'>
                                        <p className='likes-count'>{place.likesCount}</p>
                                        <div className='rating-wrapper'>
                                            <p className='rating'>Средняя оценка</p>
                                            <p className='rating-count'>{place.rating}</p>
                                        </div>
                                        {innerWidth >= 1320 && <button className={`show-on-map ${!place.selected ? 'show' : ''}`}>Показать на карте</button>}
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
                                    <button className={`show-on-map ${place.selected ? 'show' : ''}`}>Показать на карте</button>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <FishingSlider openDeletePopUp={openDeletePopUp} arrayPlaces={arrayPlaces} handleCartClick={this.handleCartClick} />
                }
                {stateDeletePopUp &&
                    <DeletePopUp openDeletePopUp={openDeletePopUp} deletePlaceCart={this.deletePlaceCart} />
                }
            </section>
        )
    }
}

export default FavoritePage;