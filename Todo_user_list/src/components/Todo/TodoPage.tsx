import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../store/actions/todosActions';
import { RootState } from '../../store/types';
import TodoList from './TodoList';

interface TodoPageProps {
  fetchTodos: (userId: number) => void;
  match?: {
    params: {
      userId: string;
    };
  };
  todos: RootState['todos']['todos'];
}

class TodoPage extends Component<TodoPageProps> {
  componentDidMount() {
    const { fetchTodos, match } = this.props;
    const id : string  = match?.params?.userId? match?.params?.userId : ''
    const userId = parseInt(id, 10);
    fetchTodos(userId);
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        <h1>Todo Page</h1>
        <TodoList todos={todos} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { fetchTodos })(TodoPage);
