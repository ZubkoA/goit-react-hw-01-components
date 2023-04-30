import PropTypes from 'prop-types';
// import { Head } from './Transactions.styled';

const Transactions = ({ type, amount, currency, index }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};
Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transactions;
