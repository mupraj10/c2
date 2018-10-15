import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Pet} from './pet'

const dummyData = [
  {
    id: 1,
    name: 'some name',
    type: 'dog',
    age: '12',
    description: 'Fun loving'
  },
  {
    id: 2,
    name: 'some name',
    type: 'dog',
    age: '12',
    description: 'Fun loving'
  },
  {
    id: 3,
    name: 'some name',
    type: 'dog',
    age: '12',
    description: 'Fun loving'
  },
  {
    id: 4,
    name: 'some name',
    type: 'dog',
    age: '12',
    description: 'Fun loving'
  }
]
export const Gallery = props => {
  const {petList} = props
  console.log(petList)
  return (
    <div className="container columns is-2">
      {petList && petList.map(pet => <Pet key={pet.id} pet={pet} />)}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    petList: state.pet
  }
}

export default connect(mapState)(Gallery)

/**
 * PROP TYPES
 */
Gallery.propTypes = {
  petList: PropTypes.array
}
