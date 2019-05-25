import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'


export default function DateFilter({date,name, icon, onDateChange}) {

    const dateFormated = date.format('YYYY[-]MM[-]DD')

   const handleDateChange = event => {
        const {name, value} = event.target
        onDateChange({name, value: dayjs(value)})
    }


    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" name={name} value={dateFormated} onChange={handleDateChange}/>
                <span className="icon is-small is-left">
                <i className={`fas fa-${icon}`}></i>
                </span>
            </div>
        </div>
  )
}

DateFilter.propTypes = {
    icon: PropTypes.oneOf(['sign-in-alt', 'sign-out-alt']),
    date: PropTypes.instanceOf(dayjs),
    name: PropTypes.string,
    onDateChange: PropTypes.func
}