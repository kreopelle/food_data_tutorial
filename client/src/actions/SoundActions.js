// fetch all sounds

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

// post new sound

  export function postSound(sound){
    return (dispatch) => {
      dispatch({ type: 'START_POST_SOUND_REQUEST' })
      const soundData = new FormData()
      soundData.append("sound[title]", sound.sound.title)
      soundData.append("sound[description]", sound.sound.description)
      soundData.append("sound[file]", sound.sound.file)
      return fetch('/api/sounds', {
        method: 'POST',
        body: soundData,
        contentType: false,
      })
      .then(resp => resp.json())
      .then(sound => dispatch({ type: 'POST_SOUND', sound }))
    }
  }

// delete sound

  export function deleteSound(soundId){
    return {type: 'DELETE_SOUND', soundId }
  }

// favoriteSound

  export function favoriteSound(soundId){
    return {type: 'FAVORITE_SOUND', soundId }
  }
