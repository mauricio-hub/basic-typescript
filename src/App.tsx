import { useEffect, useState } from "react";
import { Todo } from "./components/Todo";

interface DataTodo {
  todos: {
    completed: boolean;
    id: number;
    todo: string;
    userId: number;
  }[]; //aqui le decimos que es un array de objeto
  total : number;
  skip : number;
  limit : number;
}

//React.FC significa que es una función de componente de React
export const App: React.FC = () => {
  //<string> es el tipo de dato que se espera
  const [name, setName] = useState<string>("Mafalda");
  //si se especifiaca el tipo de dato no es necesario poner el tipo de dato en el useState
  //ya que se entiende que tipo de dato es
  const [isActived, setIsActived] = useState(false);

  // todolist es un array de objetos que tiene la estructura de DataTodo
  // otro ejemplo igual useState<Array<DataTodo>>([])
  const [todosList, setTodosList] = useState<DataTodo>();

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("https://dummyjson.com/todos");
      const result = await data.json();
      setTodosList(result);
    };

    getTodos();
  }, []);

  return (
    <div>
      {todosList?.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo.todo} status={todo.completed ? 'active' : 'inactive'} />

      })}
    </div>
  );
};
