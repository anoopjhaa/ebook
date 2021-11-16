import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { AiFillDelete } from 'react-icons/ai'
import { Button, CardActionArea, CardActions } from '@mui/material'
import swal from 'sweetalert'
import axios from 'axios'

function Admin(props) {
  const isAdmin = props.isAdmin
  const id = props.id
  if (isAdmin) {
    return (
      <Button
        size='small'
        color='error'
        variant='contained'
        onClick={(e) => {
          e.preventDefault()
          axios
            .delete(`http://localhost:5000/api/delete/${id}`)
            .then(() => {
              // console.log('Deleted!')
            })
            .catch((err) => {
              // console.log('Clciked error')
              console.log(err)
            })
          swal({
            title: 'Deleted successfully!',
            icon: 'success',
          })
        }}
      >
        <AiFillDelete size='2rem' />
      </Button>
    )
  }
  return <> </>
}

export default function BookCard(book) {
  const isAdmin = book.isAdmin
  const id = book.id
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={book.viewlink}>
        <CardMedia component='img' height='300' image={book.image} />
        <CardContent>
          <Typography gutterBottom variant='subtitle1' component='div'>
            {book.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Admin isAdmin={isAdmin} id={id} />
        {/* {
          <Button
            size='small'
            color='primary'
            variant='contained'
            href={book.viewlink}
          >
            <AiFillDelete />
          </Button>
        } */}
        {/* <Button
          size='small'
          color='primary'
          variant='contained'
          href={book.downloadlink}
          // onClick={changeDownload}
        >
          Download
        </Button> */}
      </CardActions>
    </Card>
  )
}
