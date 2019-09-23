import React from 'react'

const AvatarImageContext = React.createContext({})

export const AvatarImageProvider = AvatarImageContext.Provider
export const AvatarImageConsumer = AvatarImageContext.Consumer
export default AvatarImageContext