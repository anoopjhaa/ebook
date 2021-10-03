import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { MenuItem, Typography } from '@mui/material'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& .MuiTextField-root': {
      width: '300px',
      marginTop: '1rem',
    },
    '& .MuiButtonBase-root': {
      marginTop: '2rem',
      margin: '2rem',
    },
  },
}))

const currencies = [
  {
    value: 'python',
    label: 'Python',
  },
  {
    value: 'java',
    label: 'Java',
  },
  {
    value: 'cpp',
    label: 'C/C++',
  },
  {
    value: 'html',
    label: 'HTML/CSS',
  },
  {
    value: 'dsa',
    label: 'Data Structures & Algorithms',
  },
  {
    value: 'dbms',
    label: 'Database Management Systems',
  },
  {
    value: 'oops',
    label: 'Object Oriented Programming',
  },
  {
    value: 'network',
    label: 'Computer Networks',
  },
  {
    value: 'system',
    label: 'Operating Systems',
  },
  {
    value: 'cloud',
    label: 'Cloud Computing',
  },
]

const Form = ({ handleClose }) => {
  const classes = useStyles()
  // create state variables for each input
  const [Name, setName] = useState('')
  const [Image, setImage] = useState('')
  const [Viewlink, setViewlink] = useState('')
  const [Downloadlink, setDownloadlink] = useState('')
  const [Category, setCategory] = useState('python')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Name, Image, Viewlink, Downloadlink)
    axios
      .post('https://e-libraryy.herokuapp.com/api', {
        title: Name,
        image: Image,
        viewlink: Viewlink,
        downloadlink: Downloadlink,
        category: Category,
      })
      .then((res) => {
        console.log(res.data)
      })
  }

  return (
    <div>
      <div>
        <Typography variant='h4' flexGrow='1' align='center' marginTop='3rem'>
          Please Contribute ❤️
        </Typography>
        <Typography
          variant='h5'
          flexGrow='1'
          align='center'
          marginTop='1rem'
          marginBottom='2rem'
        >
          Do your part in sharing the knowledge
        </Typography>
      </div>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label='Name of the book'
          variant='filled'
          required
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label='Image link'
          variant='filled'
          required
          value={Image}
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          label='Google drive View link'
          variant='filled'
          required
          value={Viewlink}
          onChange={(e) => setViewlink(e.target.value)}
        />
        <TextField
          label='Google Drive Download Link'
          variant='filled'
          required
          value={Downloadlink}
          onChange={(e) => setDownloadlink(e.target.value)}
        />
        <TextField
          id='outlined-select-currency'
          select
          label='Category'
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
          helperText='Please select category'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
          <Button type='submit' variant='contained' color='primary'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
