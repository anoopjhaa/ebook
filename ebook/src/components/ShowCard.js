import { Grid } from '@mui/material'
import React from 'react'
import BookCard from './BookCard'

const ShowCard = ({ users, input }) => {
  console.log(input)
  return (
    <Grid
      container
      spacing={1}
      direction='row'
      justify='flex-start'
      alignItems='flex-start'
    >
      {users
        .filter((book) => {
          if (input === '') {
            return book
          } else if (book.title.toLowerCase().includes(input.toLowerCase())) {
            return book
          }
          return null
        })
        .map((book) => (
          <Grid item xs={6} sm={4} md={2}>
            <BookCard
              id={book.id}
              title={book.title}
              image={book.image}
              viewlink={book.viewlink}
              downloadlink={book.downloadlink}
              category={book.category}
            />
          </Grid>
        ))}
    </Grid>
  )
}

export default ShowCard
