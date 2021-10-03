import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contribute from './components/Contribute'
import Header from './components/Header'
import ShowCard from './components/ShowCard'
import ShowCardCategory from './components/ShowCardCategory'

const App = () => {
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])

  const getBooks = async () => {
    const response = await fetch('http://localhost:5000/api')
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <BrowserRouter>
      <div>
        <Header
          handleChange={(e) => {
            e.preventDefault()
            setInput(e.target.value)
          }}
        />
        <div>
          <Switch>
            <Route path='/contribute' component={Contribute} />
            <Route
              path='/:name'
              component={() => <ShowCardCategory users={users} input={input} />}
            />
            <Route
              path='/'
              component={() => <ShowCard users={users} input={input} />}
              exact={true}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
