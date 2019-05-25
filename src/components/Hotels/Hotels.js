import React from 'react'
import PropTypes from 'prop-types'
import Hotel from '../Hotel/Hotel'

export default function Hotels({data}) {

    return (
        <div>
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    <div className="columns is-multiline">
                        {data.map(hotel => (<div className="column is-one-third">
                            <Hotel key={hotel.slug} {...hotel} ></Hotel>)}
                        </div>))}
                    </div>
                </div>
            </section>
           
        </div>
        
  )
}

Hotels.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        slug: PropTypes.string,
        name: PropTypes.string,
        photo: PropTypes.string,
        description: PropTypes.string,
        availabilityFrom: PropTypes.number,
        availabilityTo: PropTypes.number,
        rooms: PropTypes.number,
        city: PropTypes.string,
        country: PropTypes.string,
        price:  PropTypes.number
    }))
}