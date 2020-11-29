import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Loader } from './components/loader';
import { AuthPage } from './pages/authPage';

export const useRoutes = () => {
    return(
        <Container>
            <Route path='/auth' component={AuthPage}/>

            <Route path='/register' component={Loader}/>
            <Route path='/main' component={Loader}/>
            <Route path='/change-pass' component={Loader}/>

            <Redirect to='/auth'/>
        </Container>
    );
}
