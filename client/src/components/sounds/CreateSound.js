import React, { Component } from 'react'

class CreateSound extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      file: null
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    debugger
    const sound = {sound: this.state}
    this.props.postSound(sound)
    this.setState({
      title: '',
      description: '',
      file: null
    })
  }

  handleUpload = event => {
    this.setState({
      file: event.target.files[0]
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>create sound: </label>
          <input type="text" name="title" id="title" placeholder="title" onChange={this.handleOnChange} value={this.state.title} />
          <input type="text" name="description" id="description" placeholder="description" value={this.state.description} onChange={this.handleOnChange} />
          <input type="file" name="file" id="file" onChange={this.handleUpload} />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default CreateSound
