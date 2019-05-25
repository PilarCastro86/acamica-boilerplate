import React, { Component } from 'react'
import Hero from '../Hero/Hero'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // load on demand
import Filter from '../Filter/Filter';
import Hotels from '../Hotels/Hotels'
dayjs.locale('es') // use Spanish locale globally

  class App extends Component {
    constructor(props){
    super(props)
    this.state = {
      filters : {
        dateFrom: dayjs(),
        dateTo: dayjs(),
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotelsBackup: [],
      hotelsFiltered: []
    }
  }

  async componentDidMount(){
    try{
      const response = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
      const data = await response.json()
      this.setState({hotelsBackup : data, hotelsFiltered: data})
    }catch(error){
      console.log('error', error)
    }
  }

  handleFilterChange = newFilters => this.setState({filters: newFilters}, () => {
    this.handleApplyFilters()
  })

  handleApplyFilters = () => {
    const { filters, hotelsBackup} = this.state
  }

    render() {
      const {filters, hotelsFiltered} = this.state
      return (
        <div className='container'>
        <Hero filters={filters} />
        <Filter filters={filters} onFilterChange={this.handleFilterChange}/>
        <Hotels data={hotelsFiltered} />
        </div>
      )
    }
  }

export default App
