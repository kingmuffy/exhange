import { useState } from 'react'

const RatingForm = () => {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value))
  }

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Here you can implement your logic to save the rating and comment to the database

    // Clear the form after submission
    setRating(0)
    setComment('')
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Rate the Person</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-md p-2"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-lg font-medium mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            className="border border-gray-300 rounded-md p-2"
            min="0"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-lg font-medium mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            className="border border-gray-300 rounded-md p-2"
            rows="4"
            value={comment}
            onChange={handleCommentChange}
            required></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RatingForm
