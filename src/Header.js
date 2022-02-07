import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {

    const [{cart}, dispatch] = useStateValue();
    return(
        <div>
            <div className="header">
                <Link to="/">
                    <img 
                        className="headerLogo" 
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                        alt="amazon-logo"
                    /> 
                </Link>
                

                <div
                className="headerSearch">
                    <input
                    className="headerSearchInput"
                    type="text"/>
                    <SearchIcon className="headerSearchIcon"/>
                </div>

                <div
                className="headerNav">
                    <Link to="/login">
                        <div className="headerNavOption">
                            <span className="span1">Hello</span>
                            <span className="span2">Sign in</span>
                        </div>
                    </Link>
                    

                    <div className="headerNavOption">
                        <span className="span1">Returns</span>
                        <span className="span2">& Orders</span>
                    </div>

                    <div className="headerNavOption">
                        <span className="span1">Your</span>
                        <span className="span2">Prime</span>
                    </div>

                    <Link to="/checkout">
                        <div className="headerNavCart">
                            <AddShoppingCartIcon/>
                            <span className="span2 headerCartCount">{cart?.length}</span>
                        </div>
                    </Link>

                    {/* <button>click</button> */}
                    
                </div>

                

            </div>
        </div>
    )
}

export default Header;