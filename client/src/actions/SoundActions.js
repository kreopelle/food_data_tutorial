// fetch all sounds
// fetch individual sound
// post new sound

  export function fetchSounds(){
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_SOUNDS_REQUEST' })
      return fetch('/api/sounds')
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        } else {
          alert('Something went wrong')
        }
        })
      .then(sounds => dispatch({ type: 'FETCH_SOUNDS', sounds }))
      .catch((error) => {
        console.log(error)
      })
    }
  }

  export function postSound(sound){
    return (dispatch) => {
      // dispatch({ type: 'START_POST_SOUND_REQUEST' })
      const soundData = new FormData()
      soundData.append("sound[title]", sound.title)
      soundData.append("sound[description]", sound.description)
      soundData.append("sound[file]", sound.file)
      debugger
      return fetch('/api/sounds', {
        method: 'POST',
        body: soundData,
        contentType: false,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }
    })
    .then(resp => resp.json())
    .then(sound => dispatch({ type: 'POST_SOUND', sound }))
    }
  }
