import React from 'react';
export default props => {
    const unread = props.unreadMsg;
    return (
        <div>
        <p style = { { fontSize: '20px' } }>
    Hello ! &nbsp; { unread.length > 0 && <span style = { { color: 'red'} }> You have { unread.length } unread message. </span> } </p> </div>)
}

