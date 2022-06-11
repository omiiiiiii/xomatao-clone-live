import React from 'react'
import './Fielter.css'
import FilterItem from './FilterItem'

const Fielter = ({fielterlist}) => {
  return (
    <div className='filters' >{fielterlist && fielterlist.map((filter)=>{
        return <FilterItem filter={filter} key={filter.id} />
    })}</div>
  )
}

export default Fielter