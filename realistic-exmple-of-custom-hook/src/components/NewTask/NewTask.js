import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useFetch from '../../hooks/use-fetch';

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useFetch();

  const createTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };
  
  const enterTaskHandler = async (taskText) => {
    const requestConfig = {
      url: 'https://productsmanager-8d63b-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText },
    };
    sendRequest(requestConfig, createTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};
export default NewTask;
