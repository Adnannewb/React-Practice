import { useUser } from './UserContext';

export default function Child() {
  // Grab user data and updater function directly from context
  const { user, setUser } = useUser();

  const handleLogout = () => {
    setUser({ name: 'Guest', role: 'None', isLoggedIn: false });
  };

  return (
    <div style={{ border: '2px solid #007bff', padding: '20px', marginTop: '10px' }}>
      <h3>Child Component</h3>
      
      {user.isLoggedIn ? (
        <div>
          <p>Welcome, <strong>{user.name}</strong>!</p>
          <p>Role: {user.role}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <p>You are logged out.</p>
      )}
    </div>
  );
}
