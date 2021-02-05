import React from 'react'
import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  Message,
  Segment,
} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import FoodBagServices from '../modules/FoodBagServices'

const CreateFoodBagForm = () => {
  const dispatch = useDispatch()
  const { createFoodBagMessage, errorMessage } = useSelector((state) => state)

  return (
    <Container
      style={{
        marginTop: '0.5em',
        marginBottom: '0.2em',
        marginLeft: '0.2em',
      }}
    >
      <Segment
        style={{
          marginTop: '2em',
          width: 800,
        }}
      >
        <Header as='h1'>Create your FoodBag</Header>
        <Icon
          name='shopping bag'
          size='huge'
          style={{
            marginTop: '0.1em',
            marginBottom: '0.2em',
            marginLeft: '2em',
          }}
        />
        <Form
          data-cy='foodbag-form'
          onSubmit={(event) => FoodBagServices.create(event, dispatch)}
        >
          <Form.Field />
          <Form.Field style={{ width: 400 }}>
            <select
              name='pickuptime'
              id='pickuptime'
              data-cy='pickuptime-dropdown'
            >
              <option>Select Pickup Time</option>
              <option value={0}>08-12</option>
              <option value={1}>12-16</option>
              <option value={2}>16-20</option>
            </select>
          </Form.Field>
          <br /> <br />
          <Button
            data-cy='submit-btn'
            type='submit'
            color='purple'
            icon='heart'
            style={{
              marginTop: '0.5em',
              marginBottom: '0.2em',
              marginLeft: '6em',
            }}
          >
            <Icon name='heart'></Icon>
            Donate
          </Button>
          {createFoodBagMessage && (
            <Message
              color='green'
              size='big'
              data-cy='api-response-success-message'
              style={{
                marginTop: '2em',
                width: 400,
              }}
            >
              {createFoodBagMessage}
            </Message>
          )}
          {errorMessage && (
            <Message
              color='red'
              size='big'
              data-cy='api-response-error-message'
              style={{
                marginTop: '2em',
                width: 400,
              }}
            >
              {errorMessage}
            </Message>
          )}
        </Form>
      </Segment>
    </Container>
  )
}

export default CreateFoodBagForm
