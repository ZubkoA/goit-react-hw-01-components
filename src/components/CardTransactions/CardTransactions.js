import Transactions from 'components/Transactions/Transactions';
import PropTypes from 'prop-types';
import { TransactionHistory, Head, Header } from './CardTransactions.styled';

function CardTransactions({ trans }) {
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
        {trans.map(tran => (
          <Head key={tran.id}>
            <Transactions
              type={tran.type}
              amount={tran.amount}
              currency={tran.currency}
            />
          </Head>
        ))}
      </tbody>
    </TransactionHistory>
  );
}

CardTransactions.propTypes = {
  trans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default CardTransactions;
