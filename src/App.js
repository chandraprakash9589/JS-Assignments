// import Article from "./__testing__/Article";
// import './App.css'
// function App() {
//   return (
//     <div data-testid ='myrootdiv'>
//       <Article/>
//     </div>
//   );
// }

// export default App;


// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './redux/Counter';
import MyComponent from './MyComponents/ MyComponent';
import Article from './__testing__/Article';

const App = () => {
  return (
    // <Provider store={store}>
    //   <Counter />
    //   {/* Other components */}
    // </Provider>
    // <MyComponent/>
    <Article/>
  );
};

export default App;
