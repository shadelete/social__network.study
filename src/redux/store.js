import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navReducer from "./nav-reducer";


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "post 1", likesCount: 2 },
        { id: 2, message: "post 2", likesCount: 9 },
        { id: 3, message: "post 3", likesCount: 6 },
        { id: 4, message: "post 4", likesCount: 2 },
        { id: 5, message: "post 5", likesCount: 34 },
        { id: 6, message: "post 6", likesCount: 1 },
        { id: 7, message: "post 7", likesCount: 7 },
      ],
      newPostText: ''
    },
    dialogPage: {
      dialogsData: [
        {
          id: 1,
          name: "Sasha",
          avatar: "https://avatarfiles.alphacoders.com/121/121594.jpg",
        },
        {
          id: 2,
          name: "Vika",
          avatar: "https://avatarfiles.alphacoders.com/121/121594.jpg",
        },
        {
          id: 3,
          name: "Kisa",
          avatar: "https://avatarfiles.alphacoders.com/121/121594.jpg",
        },
        {
          id: 4,
          name: "Moosya",
          avatar: "https://avatarfiles.alphacoders.com/121/121594.jpg",
        },
        {
          id: 5,
          name: "Buba",
          avatar: "https://avatarfiles.alphacoders.com/121/121594.jpg",
        },
        {
          id: 6,
          name: "Beluga",
          avatar: "https://avatarfiles.alphacoders.com/121/121594.jpg",
        },
        {
          id: 7,
          name: "Cherry",
          avatar: "https://avatarfiles.alphacoders.com/121/121594.jpg",
        },
      ],
      messageData: [
        { id: 1, message: "hooly ti" },
        { id: 2, message: "eba glyan'" },
        { id: 3, message: "maslinu poymal" },
        { id: 4, message: "tishe bud' huy" },
        { id: 5, message: "Buba pishet" },
        { id: 6, message: "Beluga hochet zhrat'" },
        { id: 7, message: "rot ebal" },
      ],
      newMessageText: ''
    },
    sidebarData: {
      friendsData: [
        {
          id: 3,
          name: "Kisa",
          avatar: "https://avatarfiles.alphacoders.com/121/121594.jpg",
        },
        {
          id: 6,
          name: "Beluga",
          avatar: "https://avatarfiles.alphacoders.com/121/121594.jpg",
        }
      ]
    }
  },
  _callSubscriber() {
    console.log('qwe')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
    this._state.sidebarData = navReducer(this._state.sidebarData, action)

    this._callSubscriber(this._state)
  }
}



export default store;