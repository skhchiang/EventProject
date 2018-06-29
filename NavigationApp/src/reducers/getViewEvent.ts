import * as actionTypes from '../actions/types';
import { Ievent } from '../models/events';

export interface IviewEventsState {
  events: Ievent[],
}

const initialState = {
  loading: false,
  events: [],
  error: null
}

export const getEventReducer = (state: IviewEventsState = initialState, action) => {
  switch (action.type) {
    case (actionTypes.GET_VIEWEVENT_START):
      return { ...state, loading: true }
    case (actionTypes.GET_VIEWEVENT_SUCCESS):
      return { ...state, loading: false, events: action.events }
    case (actionTypes.GET_VIEWEVENT_FAILURE):
      return { ...state, loading: false, error: action.err }
    default:
      return state
  }
}
