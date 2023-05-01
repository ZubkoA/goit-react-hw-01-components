import PropTypes from 'prop-types';
import { TransactionHistory, Head, Header } from './Transactions.styled';

const TransactionsEl = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

function Transactions({ trans }) {
  return (
    <TransactionHistory>
      <Header>
        <Head>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Head>
      </Header>
      <tbody>
        {trans.map(({ id, type, amount, currency }) => (
          <Head key={id}>
            <TransactionsEl type={type} amount={amount} currency={currency} />
          </Head>
        ))}
      </tbody>
    </TransactionHistory>
  );
}

Transactions.propTypes = {
  trans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
