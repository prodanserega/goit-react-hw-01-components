import React from "react";

import PropTypes from "prop-types";

import s from "./transactions.module.scss";

// "id": "c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd",
//       "type": "invoice",
//       "amount": "878.67",
//       "currency": "HKD"
const Transactions = ({ items }) => {
  return (
    <div>
      <table className={s.transactionHistory}>
        <thead className={s.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
