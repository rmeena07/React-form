import './App.css';
import Home from './routes'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import useReducer from './redux/save-password/passwordReducer'

const store = configureStore({
	reducer: useReducer
});

function App() {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	)
}

export default App;
