import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    getProfileStatus,
    getProfileThunk,
    putProfileStatus,
    setUserProfile,
} from "../../redux/profile-reducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {Redirect} from "../Hoc/Redirect";
import {compose} from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.userId;
        // if(!userId){
        //     userId = 26324;
        // }
        this.props.getProfileThunk(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        // debugger
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
};



let mapStateToProps = (state) => ({
    profile: state.profilePage.profileData,
    profileStatus: state.profilePage.profileStatus,
    myId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {setUserProfile,getProfileThunk,getProfileStatus,putProfileStatus}),
    Redirect
)(withRouter(ProfileContainer))
