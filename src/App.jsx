import React, { Suspense } from 'react'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import MainPageDisplay from './components/MainPageDisplay'
import CreateFoodBagForm from './components/CreateFoodBagForm'
import { Switch, Route } from 'react-router-dom'
import ProfileForm from './components/ProfileForm'

const App = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <div
          style={{
            background: 'url("../img/wecarebackground.jpg")',
            backgroundSize: 'cover',
            height: '120vh',
            maxWidth: 'auto',
            flex:1
          }}
        ></div>
        <MenuHeader />
        
        <Switch>
          <Route exact path='/' component={MainPageDisplay}></Route>
          <Route exact path='/foodbags' component={CreateFoodBagForm}></Route>
          <Route exact path='/profile' component={ProfileForm}></Route>
        </Switch>
        <br/>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
