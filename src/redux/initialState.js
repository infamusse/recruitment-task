export const initialState = {
  currency: {
    data: 0,
    loading: {
      active: false,
      error: false,
    },
  },
  transactions: {
    data: [
      {
        id: "95313629-68e3-4b68-8e98-bd9aa8dcd158",
        name: "Some transaction",
        EUR: 10.5,
      },
      {
        id: "95313629-68e3-4b68-8e98-bd9aa8dcd157",
        name: "Another transaction",
        EUR: 20.2,
      },
    ],
  },
};
