import React from 'react'
import { useSelector } from 'react-redux'
import { Image, Menu, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import { NavLink } from 'react-router-dom'

const MenuHeader = () => {
  const currentUser = useSelector((state) => state.currentUser)
  return (
    <Segment inverted>
      <Menu inverted>
        <Menu.Item as={Link} to={{ pathname: '/' }}>
          <Image src='./img/wecare_logo.png' size='medium' />
        </Menu.Item>
        {currentUser && (
          <Menu.Item>
            <Button
              data-cy='edit-profile-btn'
              fluid
              as={NavLink}
              to={`/profile`}
            >
              Edit Here
            </Button>
          </Menu.Item>
        )}
        <Menu.Item position='right'>
          {!currentUser && <RegistrationForm />}
        </Menu.Item>
      </Menu>
    </Segment>
  )
}

export default MenuHeader
