export default function html([first, ...strings], ...values){
  return values.reduce(
    (result, current) => result.concat(current, strings.shift()),
    [first]
  )
  .filter(item => item && item !== true || item === 0)
  .join('')
}

// html function get template string
// after evaluate value in template string
// return a string contain html elements
// use innerHTML to render on document