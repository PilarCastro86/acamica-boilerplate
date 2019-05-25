import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'


export default function Hero(props) {
    const {country, dateFrom, dateTo, price, rooms} = props.filters

    const countryText = country ? ` en ${country}` : ''
    const priceText = price ? ` por ${price}` : ''
    const roomsText = rooms ? ` de hasta ${rooms} habitaciones` : ''
    const dateFromFormatted = dateFrom.format('dddd[,] D [de] MMMM [de] YYYY')
    const dateToFormatted = dateTo.format('dddd[,] D [de] MMMM [de] YYYY')
  
    return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            desde el <strong>{dateFromFormatted}</strong> hasta el <strong>{dateToFormatted}</strong>{countryText} {priceText} {roomsText}
          </h2>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
   filters : PropTypes.shape({
    dateFrom: PropTypes.instanceOf(dayjs),
    dateTo: PropTypes.instanceOf(dayjs), 
    country: PropTypes.string,
    price: PropTypes.number,
    rooms: PropTypes.number
   })
}