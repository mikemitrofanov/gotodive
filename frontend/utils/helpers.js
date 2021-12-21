export const urlToKebabCase = (url) => url
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
export const convertingUrlToSlug = (url) => url
    .split('')
    .map(item => (item === '/') ? '_' : item)
    .join('')
