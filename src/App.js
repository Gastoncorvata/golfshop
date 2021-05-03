import NavBar from './components/NavBar/';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from "./Context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/category/:categoryId">
							<ItemListContainer />
						</Route>

						<Route path="/item/:itemId">
							<ItemDetailContainer />
						</Route>

						<Route path="/cart">
							<Cart />
						</Route>

						<Route path="/checkout">
							<Checkout />
						</Route>

						<Route path="*">
							<div className="bg-blueGray-800 flex justify-center w-auto">
								<img
									src="https://images.unsplash.com/photo-1611890798517-07b0fcb4a811?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
									alt="Page not found"
									className="h-auto w-10/12"
								/>
							</div>
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;

