import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar border">
                <ul>
                    <li>
                        <button onClick={this.navigate_to("Home")}> Home Page </button> 
                    </li>
                    <li> 
                        <button onClick={this.navigate_to("Calendar")}> Calendar </button> 
                    </li>
                </ul>
            </div>
        )
    }

    navigate_to(dest) {
        const navigate = this.props.navigator;
        return () => {
            navigate(dest);
        }
    }
}

export default NavBar;