import React from 'react';
import {
    withRouter
} from 'react-router-dom'

//EX1 REDIECT USING WITHROUTER
export const Public = withRouter(({ history }) => {
    if (history.location.pathname === '/public') {
        console.log('redirecting home');
        history.push('/')
    }
    return (
        <h3>Public</h3>
    )
})

//EX2 REDIECT USING ROUTER PROPS ( NCan't find prop to push)
// export const Public = (props, context) => {
//     console.log('props', props);
//     console.log('context', context);
//     if (props.location.pathname === '/public') {
//         console.log('redirecting home');
//         // props.history.location.pathname.push('/')

//         // props.history.push('/')
//     }
//     return (
//         <h3>Public</h3>
//     )
// }