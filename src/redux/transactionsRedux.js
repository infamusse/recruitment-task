import { v4 as uuidv4 } from "uuid";

/* selectors */
export const getTransactions = ({ transactions }) => transactions.data;

/* action name creator */
const reducerName = "transactions";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const ADD_TANSACTION = createActionName("ADD_TANSACTION");
const REMOVE_TANSACTION = createActionName("REMOVE_TANSACTION");

/* action creators */
export const addTransaction = (payload) => ({
  payload,
  type: ADD_TANSACTION,
});
export const removeTransaction = (payload) => ({
  payload,
  type: REMOVE_TANSACTION,
});

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TANSACTION: {
      return {
        data: [
          ...statePart.data,
          {
            id: uuidv4(),
            name: action.payload.name,
            EUR: action.payload.eur,
          },
        ],
      };
    }
    case REMOVE_TANSACTION: {
      return {
        data: statePart.data.filter(({ id }) => id !== action.payload),
      };
    }
    default:
      return statePart;
  }
};
