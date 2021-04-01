export const types = {
  SET_GLOBAL_STATUS: 'SET_GLOBAL_STATUS'
};

export const actions = {
  setGlobalStatus: (globalStatus: boolean) => {
    return {
      type: types.SET_GLOBAL_STATUS,
      globalStatus
    };
  }
};

export interface IAppStore {
  globalStatus: boolean;
}
const initState: IAppStore = {
  globalStatus: false
};

export default function app(state = initState, action: any) {
  switch (action.type) {
    case types.SET_GLOBAL_STATUS:
      return {
        ...state,
        globalStatus: action.globalStatus
      };
    default:
      return state;
  }
}
