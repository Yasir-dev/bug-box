import axios from "axios";

const FIRE_BASE_APP_URL =
  "https://get-in-bug-box-default-rtdb.europe-west1.firebasedatabase.app";

export const storeBug = async (bug, token) => {
  const response = await axios.post(`${FIRE_BASE_APP_URL}/bugs.json?auth=${token}`, bug);

  return response.data?.name;
};

export const fetchBugs = async token => {
  const response = await axios.get(`${FIRE_BASE_APP_URL}/bugs.json?auth=${token}`);
  const bugs = [];
  
  if (!response.data) {
    return bugs;
  }

  Object.entries(response.data).map(([id, data]) => {
    const { amount, date, developer, title } = data;
    const bug = {
      id,
      amount,
      date: new Date(date),
      developer,
      title,
    };

    bugs.push(bug);
  });

  return bugs;
};

export const deleteBug = (id, token) => {
    return axios.delete(`${FIRE_BASE_APP_URL}/bugs/${id}.json?auth=${token}`);
};

export const editBug = (id, bug, token) => {
    return axios.put(`${FIRE_BASE_APP_URL}/bugs/${id}.json?auth=${token}`, bug);
};
