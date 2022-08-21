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
            currentDayIndex: null,
            arrayDays: []
        }
    }

    componentDidMount() {
        const { arrayDays } = this.state;

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

    handleMonthClick = e => {
        const arrayDays = [];
        const { currentYearIndex } = this.state;
        const { value } = e.target.dataset;

        const month = [];
        month['январь'] = '1';
        month['февраль'] = '2';
        month['март'] = '3';
        month['апрель'] = '4';
        month['май'] = '5';
        month['июнь'] = '6';
        month['июль'] = '7';
        month['август'] = '8';
        month['сентябрь'] = '9';
        month['октябрь'] = '10';
        month['ноябрь'] = '11';
        month['декабрь'] = '12';
        const eventMonth = month[value];

        const daysQuantity = daysInMonth(eventMonth, arrayYears[currentYearIndex]);
        for (let i = 1; i <= daysQuantity; i++) {
            arrayDays.push(i);
        };

        this.setState({ arrayDays: arrayDays });
    }

    render() {
        const { arrayDays, currentYearIndex, currentMonthIndex, currentDayIndex } = this.state;

        const settingsYear = {
            className: "center",
            centerMode: true,
            dots: false,
            arrows: false,
            infinite: true,
            centerPadding: '-3px',
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 100,
            swipeToSlide: true,
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
            speed: 100,
            swipeToSlide: true,
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
            speed: 100,
            swipeToSlide: true,
            focusOnSelect: true
        };

        return (
            <section>
                <div className='day'>
                    {currentDayIndex &&
                        <Slider {...settingsDay} initialSlide={currentDayIndex}>
                            {arrayDays.map((day, i) => (
                                <p className='day' data-value={day} key={i}>{day}</p>
                            ))}
                        </Slider>
                    }
                </div>
                <div className='month'>
                    {currentMonthIndex &&
                        <Slider {...settingsMonth} initialSlide={currentMonthIndex}>
                            {arrayMonth.map((month, i) => (
                                <p className='month' data-value={month} onClick={this.handleMonthClick} key={i}>{month}</p>
                            ))}
                        </Slider>
                    }
                </div>
                <div className='year'>
                    {currentYearIndex &&
                        <Slider {...settingsYear} initialSlide={currentYearIndex} >
                            {arrayYears.map((year, i) => (
                                <p className='year' data-value={year} key={i}>{year}</p>
                            ))}
                        </Slider>
                    }
                </div>
            </section>
        )
    }
}

export default CalendarMobile;