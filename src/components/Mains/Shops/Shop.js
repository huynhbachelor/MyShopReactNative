import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CartScreen from './Cart/Cart';
import ContactScreen from './Contact/Contact';
import HomeScreen from './Home/Home';
import SearchScreen from './Search/Search';

const shopBotomTabNavigation = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Cart: CartScreen,
        Search: SearchScreen,
        Contact: ContactScreen
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const Shop = createAppContainer(shopBotomTabNavigation);

export default Shop;

