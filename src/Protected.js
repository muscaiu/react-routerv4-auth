import React from 'react';
import { Route } from 'react-router-dom';

const ButtonToNavigate = ({ title, history }) => (
    <button
        type="button"
        onClick={() => history.push('/my-new-location')}
    >
        {title}
    </button>
);

const SomeComponent = () => (
    <Route path="/" render={(props) => {
        return <ButtonToNavigate {...props} title="Navigate elsewhere" />
    }
    }
    />
)

export const Protected = () => (
    <div>
        <h3>Protected</h3>
        <SomeComponent />
    </div>
)