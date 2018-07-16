import { handleActions } from 'redux-actions'
import { ADD_ITEM } from '../types'

export default handleActions(
  {
    [ADD_ITEM](
      state,
      {
        payload: { text },
      },
    ) {
      return {
        ...state,
        list: state.list.concat([text]),
      }
    },
  },
  {
    list: [],
  },
)
