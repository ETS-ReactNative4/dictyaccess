```js
const BrowserRouter = require("react-router-dom").BrowserRouter
const Provider = require("react-redux").Provider
const createStore = require("redux").createStore
const reducers = require("../../app/reducers/rootReducer").default

let store = createStore(reducers)
;<Provider store={store}>
  <BrowserRouter>
    <BirdsEyeDashboard />
  </BrowserRouter>
</Provider>
```