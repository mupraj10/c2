import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export const Pet = props => {
  const {pet} = props

  return (
    <Link to={`/pet/${props.pet.id}`}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{pet.name}</p>
              <p className="subtitle is-6">Type: {pet.type}</p>
              <p className="subtitle is-6">Age: {pet.age}</p>
            </div>
          </div>
          <div className="content">{pet.description}</div>
        </div>
      </div>
    </Link>
  )
}

Pet.propTypes = {
  pet: PropTypes.object
}
