import axios from 'axios';

const BASE_URL = 'https://api.vschool.io/brian/todo';

const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/todos`);

    const todos = res.data;

    console.log(`GET: Here's the list of todos`, todos);

    return todos;
  } catch (e) {
    console.error(e);
  }
};