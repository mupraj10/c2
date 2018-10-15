import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import{Pet} from './pet';

const dummyData = [
    {
        id: 1,
        name: 'some name', 
        type: 'dog', 
        age: '12'
    },
    {
        id: 2,
        name: 'some name', 
        type: 'dog', 
        age: '12'
    },
    {
        id: 3,
        name: 'some name', 
        type: 'dog', 
        age: '12'
    },
    {
        id: 4,
        name: 'some name', 
        type: 'dog', 
        age: '12'
    }
]
export const Gallery = props => {
//   const {pets} = props

  return (
    <div className='container'>
    {dummyData.map(pet => <Pet key={pet.id} pet={pet}/>
        )}
      
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    pets: state.pets
  }
}

export default connect(mapState)(Gallery)

/**
 * PROP TYPES
 */
Gallery.propTypes = {
  pets: PropTypes.object
}
