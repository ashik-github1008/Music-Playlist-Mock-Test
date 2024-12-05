import './index.css'
import {MdDelete} from 'react-icons/md'

const Track = props => {
  const {trackDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDeleteIcon = () => {
    deleteTrack(id)
  }

  return (
    <li className="track-container">
      <img src={imageUrl} alt="track" />
      <p>{name}</p>
      <p>{genre}</p>
      <p>{duration}</p>
      <button type="button" onClick={onClickDeleteIcon} data-testid="delete">
        <MdDelete />
      </button>
    </li>
  )
}

export default Track
