import React from 'react';
import ReactDOM from 'react-dom';

interface ToggleButtonProps {
    text: string;
}
interface ToggleButtonState {
    toggleOn: boolean;
}

class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState>{
    constructor() {
        super();
        this.state = {};
        this.state.toggleOn = false;
    }
    render() {
        return (
            <a onClick={this._handleClick.bind(this)} className={this.state.toggleOn ? 'toggleOn' : 'toggleOff'} > {this.props.text} </a>);
    }
    _handleClick(event) {
        this.setState({ toggleOn: !this.state.toggleOn });
    }
}
interface FilterBoxProps { }
interface FilterBoxState { }
class FilterBox extends React.Component<FilterBoxProps, FilterBoxState> {
    const FILTERS = [
        { text: 'Click Me!', id: 1 },
        { text: 'No Click Me!', id: 2 }
    ]
    constructor()
    {
        super();
    }
    render() {
        return (
            <ul>
                {this.FILTERS.map((filter) => <li><ToggleButton text={filter.text} key={filter.id} /></li>)}
            </ul>
        )
    }
}

ReactDOM.render(<FilterBox />, document.getElementById("component"));

