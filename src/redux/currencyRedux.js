import axios from "axios";

/* selectors */
export const getEuroCourse = ({ currency }) => currency.data;
export const getLoadingState = ({ currency }) => currency.loading;

/* action name creator */
const reducerName = "currency";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const CHANGE_CURRENCY_VALUE = createActionName("CHANGE_CURRENCY_VALUE");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const changeCurrencyValue = (payload) => ({
  payload,
  type: CHANGE_CURRENCY_VALUE,
});

/* thunk creators */
export const fetchEuro = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/A/EUR`)
      .then((response) => {
        const { rates } = response.data;
        console.log("fetchEuro res", rates);
        if (rates) dispatch(fetchSuccess(rates[0].mid));
        else dispatch(fetchSuccess(4.45));
      })
      .catch((error) => fetchError(error.message));
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case CHANGE_CURRENCY_VALUE: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    default:
      return statePart;
  }
};
