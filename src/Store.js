export const store = {
  receptors: [],
  dispatch(action) {
    console.log(action);
    for (const r of store.receptors) r(action);
  },
};

export function useDispatch() {
  return store.dispatch;
}
