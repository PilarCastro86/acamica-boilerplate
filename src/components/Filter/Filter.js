import React, { Component } from 'react'
import DateFilter from '../DateFilter/DateFilter';
import OptionsFilter from '../OptionsFilter/OptionsFilter';
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const coutryOptions = [ {
    value: undefined, name: 'Todos los países'}, 
    {value: 'Argentina', name: 'Argentina'}, 
    {value: 'Brasil', name: 'Brasil'}, 
    {value: 'Chile', name: 'Chile'}, 
    {value: 'Uruguay', name: 'Uruguay'} 
] 
const priceOptions = [ 
    {value: undefined, name: 'Cualquier precio'}, 
    {value: 1, name: '$'}, {value: 2, name: '$$'}, 
    {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} 
] 
const roomsOptions = [ 
    {value: undefined, name: 'Cualquier tamaño'}, 
    {value: 10, name: 'Hotel pequeño'}, 
    {value: 20, name: 'Hotel mediano'}, 
    {value: 30, name: 'Hotel grande'} 
]


export default class Filter extends Component {

    handleOptionChange = ({name, value}) => {
        const {filters, onFilterChange} = this.props
       // const {name, value} = event.target



        // evito mutaciones usando el spread (...) esto
        // crea un nuevo objetito de 0 con todo lo que tiene filters adentro
        // pero voy a pisar  aquel que tenga name y value
        const newFilters = {...filters, [name] : value} 
        onFilterChange(newFilters)
        console.log('newfilter', newFilters)

    } 
    
    render(){
        const {filters} = this.props
        return (
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter
                    name='dateFrom'
                    date={filters.dateFrom}
                    icon="sign-in-alt" 
                    onDateChange={this.handleOptionChange}
                    />
                </div>
                <div className="navbar-item">
                    <DateFilter
                    name='dateTo'
                    date={filters.dateTo }
                    onDateChange={this.handleOptionChange}
                    icon="sign-out-alt" />
                </div>
    
                <div className="navbar-item">
                    <OptionsFilter
                    name='country'
                    options={coutryOptions }
                    selected={filters.country }
                    icon="globe"
                    onOptionChange={this.handleOptionChange} 
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    name='price'
                    options={priceOptions}
                    selected={filters.price }
                    icon="dollar-sign"
                    onOptionChange={this.handleOptionChange} 
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    name='rooms'
                    options={roomsOptions}
                    selected={filters.rooms }
                    icon="bed"
                    onOptionChange={this.handleOptionChange} 
                    />
                </div>
                </nav>
            )
        }
    }

Filter.propTypes = {
    filters : PropTypes.shape({
     dateFrom: PropTypes.instanceOf(dayjs),
     dateTo: PropTypes.instanceOf(dayjs), 
     country: PropTypes.string,
     price: PropTypes.number,
     rooms: PropTypes.number,
    }),
    onFilterChange: PropTypes.func
 }