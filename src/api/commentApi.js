import axios from "axios";
const instance = axios.create({
  baseURL: "https://6092b87185ff5100172137f4.mockapi.io/",
});

const commentApi = {
  getComment: () => {
    const path = "/commentMovie";
    return instance.get(path);
  },

  postComment: (newPost) => {
    const path = "/commentMovie";
    return instance.post(path, newPost);
  },
  likeComment: (id, newPost) => {
    const path = `/commentMovie/${id}`;
    return instance.put(path, newPost);
  },
};

export default commentApi;