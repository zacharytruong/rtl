import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button');
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: {
        value: 'Go Grocery Shopping'
      }
    });
    fireEvent.click(buttonElement);
  });
};
describe('Todo', () => {
  it('should render same text passed into title props', async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button');
    fireEvent.change(inputElement, {
      target: {
        value: 'Go Grocery Shopping'
      }
    });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple elements', async () => {
    render(<MockTodo />);
    addTask(['Go Grocery Shopping', 'Pet My Cat', 'Wash My Hand']);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('tasks should not have completed class when initially rendered', async () => {
    render(<MockTodo />);
    addTask(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('tasks should have completed class when clicked', async () => {
    render(<MockTodo />);
    addTask(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
