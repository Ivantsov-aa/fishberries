import React from "react"
import { Link } from "react-router-dom";

class FishingPlace extends React.Component {
    render() {
        const { arrayPlaces } = this.props;

        return (
            arrayPlaces.map((place, i) => (
                <div className='fishing-place__cart' key={i}>
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
                        <button>Показать на карте</button>
                    </div>
                </div>
            ))
        )
    }
}

export default FishingPlace;