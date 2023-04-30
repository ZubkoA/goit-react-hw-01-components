import { Container } from './App.styled';
import Card from 'components/Card/Card';
import CardStats from 'components/CardStats/CardStats';
import CardFriends from 'components/CardFriends/CardFriends';
import CardTransactions from 'components/CardTransactions/CardTransactions';
import { data, user, friends, transactions } from 'components/data';

// import user from 'path/to/user.json';

export default function App() {
  return (
    <Container>
      <Card users={user} />
      <CardStats title="Upload stats" stats={data} />
      <CardFriends friends={friends} />
      <CardTransactions trans={transactions} />
    </Container>
  );
}
