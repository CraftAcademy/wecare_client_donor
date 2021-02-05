import React from 'react'
import { useSelector } from 'react-redux'
import { Image, Menu, Button } from 'semantic-ui-react'
import RegistrationForm from './RegistrationForm'
import { NavLink } from 'react-router-dom'

const MenuHeader = () => {
  const currentUser = useSelector(state => state.currentUser)
  return (
    <Menu
      inverted
      style={{
        backgroundColor: '#9370DB',
      }}
    >
      <Menu.Item>
        <Image src='./img/heart_logo.png' size='medium' />
      </Menu.Item>
      {currentUser && (
        <Menu.Item>
          <Button data-cy='edit-profile-btn' fluid as={NavLink} to={`/profile`}
             style={{
              backgroundColor: '#6699FF',
              color: 'white',
            }}
          >
            Edit Your Profile
          </Button>
        </Menu.Item>
      )}
      <Menu.Item position='right'>
        {!currentUser && <RegistrationForm />}
      </Menu.Item>
      <Menu.Item>  <Image src='./img/purple.png' size='mini' /> </Menu.Item>
    </Menu>
  )
}

export default MenuHeader
