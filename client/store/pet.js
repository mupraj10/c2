import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PET_LIST = 'GET_PET_LIST'
const GET_SINGLE_PET = 'GET_SINGLE_PET'

/**
 * INITIAL STATE
 */
const defaultPet = {
  petList: [],
  singlePet: {}
}

/**
 * ACTION CREATORS
 */
const getPetList = petList => ({
  type: GET_PET_LIST,
  petList
})
const getSinglePet = pet => ({
  type: GET_SINGLE_PET,
  pet
})

/**
 * THUNK CREATORS
 */
export const fetchPetList = () => async dispatch => {
  try {
    const res = await axios.get('/api/pets')
    dispatch(getPetList(res.data || defaultPet.petList))
  } catch (err) {
    console.error(err)
  }
}

export const fetchSinglePet = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/pets/${id}`)
    dispatch(getSinglePet(res.data || defaultPet.singlePet))
  } catch (err) {
    console.error(err)
  }
}


/**
 * REDUCER
 */
export default function (state = defaultPet, action) {
  switch (action.type) {
    case GET_PET_LIST:
      return action.petList
    case GET_SINGLE_PET:
      return action.pet
    default:
      return state
  }
}
