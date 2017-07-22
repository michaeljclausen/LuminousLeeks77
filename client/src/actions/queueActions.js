import axios from 'axios';
import {
  GET_QUEUE_INFO,
  TOGGLE_QUEUE
} from './actionTypes';

const getQueueInfo = (queue_id) => {
  return dispatch => {
    axios.get(`/api/queueInfo/host/${queue_id}`)
    .then(result => {
      dispatch({
        type: GET_QUEUE_INFO,
        payload: result.data
      })
    })
  };
};

const toggleQueue = (queue_id) => {
  return dispatch => {
    axios.put(`/api/queueInfo/toggleQueue/${queue_id}`)
    .then(result => {
      console.log(result);
      dispatch({
        type: TOGGLE_QUEUE,
        payload: result.data
      })
    })
  }
}

export { getQueueInfo, toggleQueue };
