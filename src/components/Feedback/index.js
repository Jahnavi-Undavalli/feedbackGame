// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedback: true,
  }

  onClickEmoji = () => this.setState({isFeedbackSelected: false})

  originalContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="emojis-container">
        <h1 className="heading-of-emoji">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="url-images">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emojis"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  opinionContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="love-container">
        <img src={loveEmojiUrl} alt="love Emoji" className="loveemoji" />
        <h1 className="heading-love">Thank You</h1>
        <p className="para-font">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="bg-container">
        <div className="feedback-card">
          {isFeedback ? this.originalContainer() : this.opinionContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
