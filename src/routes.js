import TodoPage from './components/pages/TodoPage.jsx'
import TestPage from './components/pages/TestPage.jsx'
import HomePage from './components/pages/HomePage.jsx'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    exact: true
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoPage
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  }
]

export default routes