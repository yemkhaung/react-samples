const isPromis = payload =>
    (typeof payload === "object" || typeof payload === "function") &&
    typeof payload.then === "function";

export const asyncActions = () => next => action => {
    if (isPromis(action.payload)) {
        action.payload.then(result => next({ ...action, payload: result }));
    } else {
        next(action);
    }
};
