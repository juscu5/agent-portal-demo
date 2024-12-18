import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoryComponent from './pages/manage-category/CategoryComponent';
import LoginComponent from './pages/login/LoginComponent';
import CLientLinks from './pages/manage-client-links/ClientLinks';
import AgentView from './pages/Agent-View/AgentView';
import HeaderOrganism from './organisms/header/Header.organism';
import { Provider } from 'react-redux';
import store from '../redux/store'
import 'bulma/css/bulma.css';
import './App.scss';

const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <>
                    <main className="App">
                        <Switch>
                            <Route exact path={'/'} component={LoginComponent}/>
                            <Route path={'/login'} component={LoginComponent}/>
                            <div className='inner-content'>
                                <HeaderOrganism></HeaderOrganism>
                                <Route exact path={'/manage/links'} component={CLientLinks}/>
                                <Route exact path={'/agent-view'} component={AgentView}/>
                                <Route path={'/manage/category'} component={CategoryComponent}/>
                            </div>
                        </Switch>
                    </main>
                </>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

export default App;
