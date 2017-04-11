import React from 'react';
import { Router, browserHistory, hashHistory, Route, IndexRoute} from 'react-router';
import App from './App';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';
export default class RootRouter extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={HomePage} />
                    <Route path="about" component={AboutPage} />
                    <Route path="course" component={ManageCoursePage} />
                    <Route path="course/:id" component={ManageCoursePage} />
                    <Route path="courses" component={CoursesPage} />
                </Route>
            </Router>
        );
    }
}