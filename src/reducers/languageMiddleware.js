// Dans votre middleware Redux

import { setLanguage } from "./applicationService/applicationSlice";

const languageMiddleware = (store) => (next) => (action) => {
  if (action.type === "LOCATION_CHANGE") {
    const { pathname } = action.payload.location;
    if (pathname.startsWith("/fr/")) {
      store.dispatch(setLanguage("fr"));
    } else if (pathname.startsWith("/ar/")) {
      store.dispatch(setLanguage("ar"));
    }
  }

  return next(action);
};

export default languageMiddleware;
