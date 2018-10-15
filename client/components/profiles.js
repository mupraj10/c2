import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import{VetCard} from './vet-card';

const dummyData = [
    {
        id: 1,
        name: 'Puppy MD',
        img: '',  
        location: "NYC"
    },
    {
        id: 2,
        name: 'Kitty Doc',
        img: '',  
        location: "Seattle"
    },
    {
        id: 3,
        name: 'Cat MD',
        img: '',  
        location: "Portland"
    },
    {
        id: 4,
        name: 'Puppy Doc',
        img: '',  
        location: "Woodside"
    }
]
export const Profiles = props => {
//   const {pets} = props

  return (
    <div className='container'>
    {dummyData.map(vet => <VetCard key={vet.id} vet={vet}/>
        )}
      
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    vets: state.vets
  }
}

export default connect(mapState)(Profiles)

/**
 * PROP TYPES
 */
Profiles.propTypes = {
  vets: PropTypes.object
}
