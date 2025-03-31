import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/authSlice';
import Login from './components/Login';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Todo App</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user.username}</span>
            <button
              onClick={() => dispatch(logout())}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;