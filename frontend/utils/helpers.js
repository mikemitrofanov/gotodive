export const convertingUrlToSlug = (url) => url
    .split('')
    .map(item => (item === '/') ? '_' : item)
    .join('')
