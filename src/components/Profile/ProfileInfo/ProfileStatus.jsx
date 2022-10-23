import React, {Component} from 'react';

class ProfileStatus extends Component {
    state = {
        edit: false
    }
    EditMode = () => {
        let mode = this.state.edit ? false : true
        this.setState({
            edit: mode
        })
    }
    render() {
        return (
            <div>
                {
                    !this.state.edit &&
                    <div>
                        <p onDoubleClick={this.EditMode.bind(this)}>{this.props.text}</p>
                    </div>
                }
                {
                    this.state.edit &&
                    <div>
                        <input autoFocus={this.EditMode} onBlur={this.EditMode.bind(this)} value={this.props.text} type="text"/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;