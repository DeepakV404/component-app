import React from 'react';

const UserContext = React.createContext("Deepak");
//Default value is passed as arugument in case of nonmatching default value is used..

const ValueProvider = UserContext.Provider
const ValueConsumer = UserContext.Consumer

export { ValueProvider, ValueConsumer }
export default UserContext