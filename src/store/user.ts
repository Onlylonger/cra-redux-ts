export const types = {
  DEMO: 'DEMO'
};

export const actions = {
  checkLogin: (data: { fn?: void }) => {
    return { type: types.DEMO, data };
  }
};

export interface IUserStore {
  customerId: number;
}

const initState: IUserStore = {
  customerId: 0
};

export default function userLogin(state = initState, action: any) {
  switch (action.type) {
    case types.DEMO:
      return {
        ...state,
        customerId: action.customerId
      };
    default:
      return state;
  }
}
