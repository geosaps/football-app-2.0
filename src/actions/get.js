export const fetchData = (url) => {
  (dispatch, getState) =>
    fetch(url)
    .then(response) => {dispath(receiveData(response.data))
    .catch(error) => console.log(error)
  }
}

export const receiveData(data) {
  return{
    type: 'RECEIVE_DATA',
    data
  }
}