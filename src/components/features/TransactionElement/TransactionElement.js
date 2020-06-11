import React from "react";

const TransactionElement = ({ transaction, euroCourse, removeTransaction }) => {
  const { name, id } = transaction;

  const handleRemove = () => {
    removeTransaction(id);
  };

  return (
    <div>
      {name} value:{euroCourse}
      <button onClick={handleRemove}>remove</button>
    </div>
  );
};

export default TransactionElement;
