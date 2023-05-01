import { Container } from './App.styled';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import Friends from 'components/Friends/Friends';
import Transactions from 'components/Transactions/Transactions';
import { user, data, friends, transactions } from 'components/data';

export default function App() {
  return (
    <Container>
      <Profile users={user} />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transactions trans={transactions} />
    </Container>
  );
}
