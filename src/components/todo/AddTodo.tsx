import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import todoAtom from '../../recoil/todo';

const AddTodo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState(todoAtom);

  const handleSubmit = (): void => {
    setTodoList(prevList => [
      ...prevList,
      { id: prevList.length + 1, text: inputValue, completed: false },
    ]);
    setInputValue('');
  };

  return (
    <div className='todo-form'>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
