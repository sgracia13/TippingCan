import React, { lazy } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import AllStar from '../AllStar/component.js'
import Batting from '../Batting/component.js'
import Cutter from '../Cutter/component.js'
import Header from '../Header/component.js'


const App = () => {
  return (
    <div> 
      <Container fluid>
        <Row>
          <Col className='p-0'>
            <Route path='/' component={Header} />
          </Col>
        </Row>
      <Row>
        <Col>
            <Switch>
              <Route exact path='/allstar' component={AllStar}  />
              <Route exact path='/batting' component={Batting} />
              <Route exact path='/cutter' component={Cutter} />
            </Switch>
        </Col>
      </Row>  
   </Container> 
   </div>
  )
}

export default App