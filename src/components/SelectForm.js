import React, {PropTypes, Component} from 'react';

export default class SelectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameA: 'a123',
            nameB: 'b321'
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
            <input onChange={::this.setNameA} value={this.state.nameA}/>
            <input onChange={::this.setNameB} value={this.state.nameB}/>
            <button onClick={::this.compareUsers}>Сравнить</button>
        </div>
    }
}
