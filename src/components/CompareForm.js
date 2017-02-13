import React, {PropTypes, Component} from 'react';

export default class CompareForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameA: '',
            nameB: ''
        }
    }

    compareUsers() {
        const {nameA, nameB} = this.state;
        this.props.actions.selectUsers(nameA, nameB);
    }

    setNameA(e) {
        this.setState({
            nameA: e.target.value
        });
    }

    setNameB(e) {
        this.setState({
            nameB: e.target.value
        });
    }

    render() {
        return <div>
            <input onInput={::this.setNameA} value={this.state.nameA}/>
            <input onInput={::this.setNameB} value={this.state.nameB}/>
            <button onClick={::this.compareUsers}>Сравнить</button>
        </div>
    }
}
