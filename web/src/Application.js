import React, { Component } from 'react';
import './Application.css';
import Header from './components/Header'
import NavBar from './components/NavBar';
import ContentPane from './components/ContentPane';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pane: "home"
        };

        this.navigate = this.navigate.bind(this);
    }

    render() {
        return (
            <div className="application">
                <Header />
                <div className="main">
                    <NavBar navigator={this.navigate}/>
                    <ContentPane pane={this.state.pane}/>
                </div>
                <div className="footer border">
                    Footer goes Here
                </div>
            </div>
        );
    }

    navigate(newval) {
        //alert("Navigating to " + newval);
        this.setState({
            pane: newval
        });
    }
}

export default Application;
