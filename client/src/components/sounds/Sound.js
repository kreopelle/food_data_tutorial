// code to render an individual sound card
// should render a comments container for comments related to the specific sound
import React from 'react'
import { Col, Thumbnail } from 'react-bootstrap'

const Sound = ({ sound }) => {
  return (
    <Col xs={6} md={4}>
      <Thumbnail>
        <h3>{sound.title}</h3>
        <p>{sound.description}</p>
        <br />
        <AudioPlayer src={sound.sound_url}>
      </Thumbnail>
    </Col>
  )
}

export default Sound
