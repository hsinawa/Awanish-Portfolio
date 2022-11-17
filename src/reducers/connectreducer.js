export const ConnectReducer = (state = {}, action) => {
    switch (action.type) {
      case "Connect_Request":
        return {
          ...state,
          connectProcess: true,
          connect: false,
        };
  
      case "Connect_Success":
        return {
          ...state,
          connectProcess: false,
          connect: true,
          connecting: action.payload,
        };
  
      case "Connect_Error":
        return {
          ...state,
          connectProcess: false,
          connect: false,
          error: true,
        };
  
      default:
        return state;
    }
  };