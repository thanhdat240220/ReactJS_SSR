import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_USERS, fetchUsers } from '../actions';

class UserList extends Component {
    componentDidMount() {
        //this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(u => {
            return <li key={u.id}>{u.name}</li>;
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function loadData(store) {
    store.dispatch(fetchUsers());
}

export { loadData }; 

export default connect(mapStateToProps, { fetchUsers })(UserList);