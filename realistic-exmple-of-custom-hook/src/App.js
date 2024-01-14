import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetch from './hooks/use-fetch';

function App() {
  const [tasks, setTasks] = useState([])
  
  const applyData = useCallback(data => {
    const loadedTasks = []
    for (const key in data) {
      loadedTasks.push({id: key, text: data[key].text})
    }
    setTasks(loadedTasks);
  },[]);

  const {isLoading, error, sendRequest: fetchTasks} = useFetch();

  useEffect(() => {
    fetchTasks({url: 'https://productsmanager-8d63b-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'},applyData);
  },[]);

   const taskAddHandler = (task) => {
     setTasks((prevTasks) => prevTasks.concat(task));
   };
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
