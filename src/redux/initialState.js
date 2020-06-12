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
        name: "First transaction",
        EUR: 10,
      },
      {
        id: "95313629-68e3-4b68-8e98-bd9aa8dcd157",
        name: "Second transaction",
        EUR: 20,
      },
    ],
  },
};
