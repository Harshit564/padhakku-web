import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  const BarStyling = {
    width: '20rem',
    background: '#F2F1F9',
    border: 'none',
    padding: '0.5rem',
  }
  return (
    <Form onSubmit={submitHandler} inline>
      {/* <Button type='submit' variant='outline-success' className='p-2'>
        <i class='fa fa-search'></i>
      </Button> */}
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
        style={BarStyling}
      ></Form.Control>
    </Form>
  )
}

export default SearchBox
