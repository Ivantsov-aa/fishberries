import React from "react";
import Slider from "react-slick";

const arrayYears = [];
const arrayMonth = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
];

const arrayDays = [];

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

class CalendarMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            currentYearIndex: null,
            currentMonthIndex: null,
            currentDayIndex: null
        }
    }

    componentDidMount() {
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth() + 1;
        const currentDay = date.getDate();
        for (let i = 2020; i < currentYear + 50; i++) {
            arrayYears.push(i);
        };

        const month = [];
        month['1'] = 'январь';
        month['2'] = 'февраль';
        month['3'] = 'март';
        month['4'] = 'апрель';
        month['5'] = 'май';
        month['6'] = 'июнь';
        month['7'] = 'июль';
        month['8'] = 'август';
        month['9'] = 'сентябрь';
        month['10'] = 'октябрь';
        month['11'] = 'ноябрь';
        month['12'] = 'декабрь';

        const daysQuantity = daysInMonth(currentMonth, currentYear);

        for (let i = 1; i <= daysQuantity; i++) {
            arrayDays.push(i);
        };

        const indexYear = arrayYears.indexOf(currentYear);
        const indexMonth = arrayMonth.indexOf(month[currentMonth]);
        const indexDay = arrayDays.indexOf(currentDay);

        this.setState({ currentYearIndex: indexYear, currentMonthIndex: indexMonth, currentDayIndex: indexDay });
    }

    render() {
        const { currentYearIndex, currentMonthIndex, currentDayIndex } = this.state;


        const settingsYear = {
            className: "center",
            centerMode: true,
            dots: false,
            arrows: false,
            infinite: true,
            centerPadding: '-3px',
            slidesToShow: 5,
            speed: 500,
            focusOnSelect: true
        };

        const settingsMonth = {
            className: "center",
            centerMode: true,
            arrows: false,
            dots: false,
            infinite: true,
            centerPadding: '15px',
            slidesToShow: 3,
            speed: 500,
            focusOnSelect: true
        };

        const settingsDay = {
            className: "center",
            centerMode: true,
            dots: false,
            arrows: false,
            infinite: true,
            centerPadding: '8px',
            slidesToShow: 5,
            speed: 500,
            focusOnSelect: true
        };

        return (
            <section>
                <div className='day'>
                    {currentDayIndex &&
                        <Slider {...settingsDay} initialSlide={currentDayIndex}>
                            {arrayDays.map((month, i) => (
                                <p className='month' key={i}>{month}</p>
                            ))}
                        </Slider>
                    }
                </div>
                <div className='month'>
                    {currentMonthIndex &&
                        <Slider {...settingsMonth} initialSlide={currentMonthIndex}>
                            {arrayMonth.map((month, i) => (
                                <p className='month' key={i}>{month}</p>
                            ))}
                        </Slider>
                    }
                </div>
                <div className='year'>
                    {currentYearIndex &&
                        <Slider {...settingsYear} initialSlide={currentYearIndex} >
                            {arrayYears.map((year, i) => (
                                <p key={i}>{year}</p>
                            ))}
                        </Slider>
                    }
                </div>
            </section>
        )
    }
}

export default CalendarMobile;