export const isDev = process.env.NODE_ENV === 'development'
export const localStorageTokenKeyName = 'token'

const config = {
  isDev,
  localStorageTokenKeyName,
}

export default config
