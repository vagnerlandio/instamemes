import React from 'react'
import { Navbar, Form } from 'react-bulma-components/full';

export default () => {
  return (
    <div className="header">
      <Navbar 
        color="primary"
        fixed="fixed"
      >
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            Instamemes
          </Navbar.Item>
          <Navbar.Item>
            <Form.Input />
          </Navbar.Item>
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}
