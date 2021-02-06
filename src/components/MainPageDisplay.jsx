import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Grid, Header } from 'semantic-ui-react'

const MainPageDisplay = () => {
  const credentials = useSelector((state) => state.credentials)
  return (
    <>
      {credentials === true && <Redirect to='/foodbags' />}
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column width={13}>
              <Header
                as='h1'
                style={{
                  marginTop: '0.1em',
                  marginBottom: '0.5em',
                  marginLeft: '1.5em',
                }}
              >
                Welcome to weCare
              </Header>
              <Header
                as='h3'
                style={{
                  marginLeft: '2em',
                  marginBottom: '0.5em',
                }}
              >
                Sign up today to make a better tomorrow!
              </Header>
              <p
                style={{
                  marginLeft: '2em',
                  marginBottom: '0.5em',
                }}>
                Every year more than 100 000 tons of food is wasted in stores
                all over Sweden. At the same time there are parants who don’t
                have the economical means to feed their children. We at weCare
                aim to create a bridge between stores and single moms in order
                to reduce food waste and eliminate children not getting enough
                food.
                <br></br>
                <br></br>We at weCare have created a platform where a store can
                register and become a food donor. With our easy to navigate UX a
                store can register food bags and decide when the food bag can be
                picked up. For the moms on the other hand we created a mobile
                app for both Apple and Android users where the user can find
                stores that have available food bags and make a reservation and
                then go to the store and pick it up.
                <br></br>
                {/* <br></br>By registering at weCare you as a store can help not
                only families all over Sweden but also make a huge impact on the
                environment. By reducing food waste we can together stop the
                rapid climate change that is happening right now.
                <br></br> */}
                <br></br>So sign up today, to make a better tomorrow!
              </p>
            </Grid.Column>

            {/* <Grid.Column width={3}>
              <Header
                as='h4'
                floated='right'
                style={{
                  marginTop: '0.5em',
                  marginRight: '2.3em',
                }}
              >
                FOOD PARTNERS
              </Header>
              <Image src='./img/donor1.png' />
              <Image src='./img/donor2.png' />
              <Image src='./img/donor3.png' />
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}

export default MainPageDisplay
