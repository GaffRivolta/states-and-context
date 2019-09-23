import React from 'react'

const UsernameContext = React.createContext({})

export const UsernameProvider = UsernameContext.Provider
export const UsernameConsumer = UsernameContext.Consumer
export default UsernameContext