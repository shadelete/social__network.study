import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getProfileThunk, setUserProfile} from "../../redux/profile-reducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
        if(!userId){
            userId = 26324;
        }
        this.props.getProfileThunk(userId);
    }

    render() {
        if(!this.props.isAuth){
            return <Navigate to={"/login"}/>
        }
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
  }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profileData,
    isAuth: state.auth.isAuth
})

let userIdDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile,getProfileThunk})(userIdDataComponent);
