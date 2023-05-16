import { useReducer } from 'react'

export type professionalStateType = {
  fullList: []
  queryFilter: string
  professionFilter: []
  categoryFilter: []
  filteredList: []
}

const initialState: professionalStateType = {
  fullList: [],
  queryFilter: '',
  professionFilter: [],
  categoryFilter: [],
  filteredList: [],
}

function useProfessionalsList() {
  const [state, dispatch] = useReducer()
}
