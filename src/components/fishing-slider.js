import React from "react"
import { Link } from "react-router-dom";
import Slider from 'react-slick';

class FishingSlider extends React.Component {

    render() {
        const { arrayPlaces } = this.props;

        const settingsForPlaceCart = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider {...settingsForPlaceCart}>
                {arrayPlaces.map((place, i) => {
                    const arrayTypes = place.fishTypes.split(',');
                    return <div className='fishing-place__wrapper' key={i}>
                        <div className='fishing-place__cart'>
                            <div className='fishing-place__pic'>
                                <img src={place.pic} alt='fishing-pic' />
                            </div>
                            <div className='fishing-place__desc'>
                                <h3>{place.title}</h3>
                                {/* {innerWidth >= 1024 && <p>{place.shortDesc}</p>}
                                                        {innerWidth >= 1024 && <h4>{place.region}</h4>} */}
                                <div className='desc_footer'>
                                    <p className='likes-count'>{place.likesCount}</p>
                                    <div className='rating-wrapper'>
                                        <p className='rating'>Средняя оценка</p>
                                        <p className='rating-count'>{place.rating}</p>
                                    </div>
                                </div>
                            </div>
                            <select >
                                <option>Виды рыб</option>
                                {arrayTypes.map((type, i) => (
                                    <option disabled key={i}>{type}</option>
                                ))}
                            </select>
                            <div className='fishing-place__details'>
                                <p className='work-time'>Время ловли<span>{place.workTime}</span></p>
                                <p>Цена</p>
                                <p className='price'>от {place.price} ₽</p>
                                <button className='show-on-map'>Показать на карте</button>
                                <Link to={`/places/${place.path}`}>Подробнее</Link>
                            </div>
                        </div>
                    </div>
                })}
            </Slider>
        )
    }
}

export default FishingSlider;