import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <h1>Manage Course</h1>
        );
    }
}

function mapDispatchToProps(dispatch) {
    "use strict";
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

ManageCoursePage.propTypes = {
//propTYpes
};

function mapStateToProps(state, ownProps) {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
