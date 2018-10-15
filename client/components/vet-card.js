import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export const VetCard = props => {
  const {vet} = props

  return (
    <Link to={`/vet/${props.vet.id}`}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src={vet.img || "https://bulma.io/images/placeholders/96x96.png"}
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{vet.name}</p>
              <p className="subtitle is-6">Location: {vet.location}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

VetCard.propTypes = {
  vet: PropTypes.object
}
