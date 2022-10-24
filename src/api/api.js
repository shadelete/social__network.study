import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ea534378-a4c0-408f-985d-7d3ba719cec9'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1,pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unFollow(id)  {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    follow(id)  {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    authMe()  {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId)  {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(id)  {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        // debugger
        return instance.put('profile/status',{status: status})
    }
}



// export const getProfile = (userId) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
//         this.props.setUserProfile(res.data)
//     });
//
// }

