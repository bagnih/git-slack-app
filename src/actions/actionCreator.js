
export const actionCreator = type =>
  Object.assign((payload) => ({ type, payload }), {
    type,
    test(action) {
      return action.type === type;
    }
  });


export const actionCreatorVoid = type =>
  Object.assign(() => ({ type }), {
    type,
    test(action) {
      return action.type === type;
    }
  });