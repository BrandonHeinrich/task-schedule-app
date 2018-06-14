import React, { Component } from 'react';
import HomePane from './HomePane';
import CalendarPane from './CalendarPane';

class ContentPane extends Component {
    render() {
        switch(this.props.pane) {
            case "Home":
                    return <HomePane />
            case "C alendar":
                return <CalendarPane />
            default:
                return (
                    <div>
                        Invalid Pane State
                    </div>
                )
        }
    }
}

export default ContentPane;