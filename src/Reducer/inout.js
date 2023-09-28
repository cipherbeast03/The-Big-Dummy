import React from 'react';

const initialState = false;
const changeLoginStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'ISLOGGEDIN':
      return (state = true);
    case 'ISLOGGEDOUT':
      return (state = false);
    default:
      return state;
  }
};

export default changeLoginStatus;
