import React, {Component} from 'react';

class ProfileStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {currentValue: this.props.profileStatus ,edit: false}
        // debugger
    }
    handleChange(event) {
        this.setState({currentValue: event.target.value});
    }
    putStatus = (event) => {
        this.setState({edit: false})
        this.props.putProfileStatus(event.target.value)
    }
    EditMode = () => {
        this.setState({edit: true})
    }
    render() {
        return (
            <div>
                {
                    !this.state.edit &&
                    <div>
                        <p onDoubleClick={
                            this.props.myId === this.props.currentId ? this.EditMode.bind(this) : null
                        }>{this.props.profileStatus === '' ? "text here your status" : this.props.profileStatus}</p>
                    </div>
                }
                {
                    this.state.edit &&
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.putStatus}
                            value={this.state.currentValue}
                            onChange={this.handleChange.bind(this)}
                            type="text"/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;