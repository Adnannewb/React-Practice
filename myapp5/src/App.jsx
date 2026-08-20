import { UserProvider } from './UserContext';
import Parent from './parent';
import Parent2 from './parent2';

export default function App() {
  return (
    <UserProvider>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>App Component</h1>
        <Parent />
        <Parent2/>
      </div>
    </UserProvider>
  );
}
