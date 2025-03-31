import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodoPriority } from '../store/todoSlice';

const TaskList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 border-red-200';
      case 'medium': return 'bg-yellow-100 border-yellow-200';
      case 'low': return 'bg-green-100 border-green-200';
      default: return 'bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      {todos.map(todo => (
        <div
          key={todo.id}
          className={`p-4 rounded-lg border ${getPriorityColor(todo.priority)} flex justify-between items-center`}
        >
          <div className="flex-1">
            <p className="text-gray-800">{todo.text}</p>
          </div>
          <div className="flex gap-2">
            <select
              value={todo.priority}
              onChange={(e) => dispatch(updateTodoPriority({ id: todo.id, priority: e.target.value }))}
              className="p-1 rounded border"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;