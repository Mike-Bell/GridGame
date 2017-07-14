import React from 'react';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import autoBind from 'react-autobind';

export default class MainPage extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            activePage: 1
        };
    }
    handleClick() {
        this.setState({
            activePage: this.state.activePage === 1 ? 2 : 1
        });
    }
    render() {
        let PageElement;
        if (this.state.activePage === 1) {
            PageElement = <Page1 />;
        } else {
            PageElement = <Page2 />;
        }

        return (
            <div>
                <button className="toggle-button" onClick={this.handleClick}>toggle</button>
                {PageElement}
            </div>
        );
    }
}