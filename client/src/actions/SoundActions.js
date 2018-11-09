// desired actions
// fetch all sounds
// fetch individual sound
// post new sound
export function fetchSounds(){
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_SOUNDS_REQUEST' })
    return fetch('/api/sounds')
    .then(resp => resp.json())
    .then(sounds => dispatch({ type: 'FETCH_SOUNDS', sounds }))
  }
}
