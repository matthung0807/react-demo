import loadable from '@loadable/component'

import './App.css';

const Hello = loadable(() => import('./greeting/Hello'));

function App() {
  return <Hello name = "John"/>
}

export default App;