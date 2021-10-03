import html from './utils.js';
const root = document.getElementById('root');
const todos= [
  'todo 1',
  'todo 2',
  'todo 3',
]
const todosHtml = html`
  ${true && true}
  ${0}
  ${false}
  ${0 && 0}
  <ul>
    ${todos.map(todo => `<li>${todo}</li>`)}
  </ul>
`
console.log('html', todosHtml);
root.innerHTML = todosHtml;
