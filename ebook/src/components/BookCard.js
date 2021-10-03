import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

export default function BookCard(book) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='300'
          image={book.image}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='subtitle1' component='div'>
            {book.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          color='primary'
          variant='contained'
          href={book.viewlink}
        >
          View
        </Button>
        <Button
          size='small'
          color='primary'
          variant='contained'
          href={book.downloadlink}
          // onClick={changeDownload}
        >
          Download
        </Button>
      </CardActions>
    </Card>
  )
}
