import React from 'react';
import Home from '../Home/Home.js';
import AlbumOpen from '../AlbumOpen/AlbumOpen';
// import Faq from '../Faq/Faq';
// import MainLayout from '../MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import styles from './App.scss';
//import List from '../List/ListContainer';

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/albumopen' component={AlbumOpen} />
      {/* <Route exact path='/faq' component={} /> */}
    </Switch>
  </BrowserRouter>
  
  // <BrowserRouter>
  //   <MainLayout>
  //     <AnimatedSwitch
  //       atEnter={{ opacity: 0 }}
  //       atLeave={{ opacity: 1 }}
  //       atActive={{ opacity: 1 }}
  //       className={styles.switchWrapper}
  //     >
  //       <Route exact path='/' component={Home} />
  //       <Route exact path='/info' component={Info} />
  //       <Route exact path='/faq' component={Faq} />
  //       <Route exact path="/list/:id" component={List} />
  //       <Route exact path="/search/:searchString" component={SearchResults} /> {/* new rout 17.5 */}
  //     </AnimatedSwitch>
  //   </MainLayout>
  // </BrowserRouter>
);

export default App;