import React from "react"

const arrayPlaces = [
    {
        pic: '/images/main/ihtiolog.png',
        title: 'Ихтиолог',
        description: 'Рыболовный клуб Ихтиолог – это Платная рыбалка, прокат квадроциклов, пляж, ресторан, снять дом-коттедж...',
        region: 'Московская область',
        likesCount: 22,
        rating: 4.7,
        fishTypes: 'нельма, карп зеркальный, белый амур, налим, галим, язь, форель радужная, карп зололотой, амур белый, амур, карась, карп, лещ, линь, окунь, осетр, плотва, сиг, сом, толстолобик, форель, чир, щука',
        workTime: '09:00-22:00 круглый год',
        price: '500'
    },
    {
        pic: '/images/main/ramenskiy.png',
        title: 'Раменский (Гжелка)',
        description: 'ЗАО «Гжелка» предоставляет следующие услуги: организация всесезонной рыбной ловли (рыбалки) на акватории 20 прудов, общая площадь...',
        region: 'Московская область',
        likesCount: 27,
        rating: 4.9,
        fishTypes: 'нельма, карп зеркальный, белый амур, налим, галим, язь, форель радужная, карп зололотой, амур белый, амур, карась, карп, лещ, линь, окунь, осетр, плотва, сиг, сом, толстолобик, форель, чир, щука',
        workTime: '09:00-22:00 круглый год',
        price: '550'
    },
    {
        pic: '/images/main/white-dacha.png',
        title: 'Белая Дача',
        description: 'Рыболовный клуб Ихтиолог – это Платная рыбалка, прокат квадроциклов, пляж, ресторан, снять дом-коттедж...',
        region: 'Московская область',
        likesCount: 33,
        rating: 4.2,
        fishTypes: 'нельма, карп зеркальный, белый амур, налим, галим, язь, форель радужная, карп зололотой, амур белый, амур, карась, карп, лещ, линь, окунь, осетр, плотва, сиг, сом, толстолобик, форель, чир, щука',
        workTime: '09:00-22:00 круглый год',
        price: '450'
    }
];

class FishingPlace extends React.Component {
    render() {
        return (
            arrayPlaces.map((place, i) => (
                <div className='fishing-place__cart' key={i}>
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
                        </div>
                    </div>
                    <div className='fishing-place__types'>
                        <h3>Виды рыб</h3>
                        <p>{place.fishTypes}</p>
                    </div>
                    <div className='fishing-place__details'>
                        <button>Подробнее</button>
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