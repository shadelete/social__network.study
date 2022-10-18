const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    { id: 1, message: "message 1" },
    { id: 2, message: "message 2" },
    { id: 3, message: "message 3" },
    { id: 4, message: "message 4" },
    { id: 5, message: "message 5" },
    { id: 6, message: "message 6" },
    { id: 7, message: "message 7" },
  ],
  newMessageText: ''
};

const dialogReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy = {
                ...state,
                newMessageText: action.newMessageText
            }
            return stateCopy;
        }

        case ADD_MESSAGE:
            let body = state.newMessageText
            stateCopy = {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData,{id:6, message: body}],
            }
            state.newMessageText = ''
            return stateCopy;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
      type: ADD_MESSAGE
    }
  }
  export const updateNewMessageActionCreator = (n) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newMessageText: n
    }
  }

export default dialogReducer;