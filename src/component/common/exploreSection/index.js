import React from 'react'
import ExploreCard from './exploreCard'
import './exploreSection.css'

const ExploreSection = ({list,collectioname}) => {
  return (
    <div className='max-width explore-section'> 
    <div className='collection-title'>
        {collectioname}
    </div>
    <div className='explore-grid'>
    {list.map((retourents)=>{
        return <ExploreCard retourents={retourents} key={retourents.info.resId} />
    })}
    </div>
    </div>
  )
}

export default ExploreSection