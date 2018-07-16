import { createAction } from 'redux-actions'
import { ADD_ITEM } from '../types'

export const addItem = createAction(ADD_ITEM, text => ({ text }))
