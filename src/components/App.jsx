import { Profile } from 'components/Profile/Profile';
import user from './Profile/user.json';
import { Box } from './Box';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <Box>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stuts" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Box>
  );
};
