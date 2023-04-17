import ReactDOM from 'react-dom/client'
import store from './stateManagement/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)