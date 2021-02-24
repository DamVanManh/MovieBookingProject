import axios from "axios";
const instance = axios.create({
  baseURL: "https://5eea03dfb13d0a00164e40ad.mockapi.io/api",
});

const newsApi = {
  /**
   * News tab
   */
  getNewsPost: () => {
    const path = "/dienanh";
    return instance.get(path);
  },

  postNews: (newPost) => {
    const path = "/dienanh";
    return instance.post(path, newPost);
  },

  deletePost: (id) => {
    const path = `/dienanh/${id}`;
    return instance.delete(path);
  },

  updatePost: (id, newPost) => {
    const path = `/dienanh/${id}`;
    return instance.put(path, newPost);
  },

  /**
   * Review Tab
   */
  getReviewPost: () => {
    const path = "/review";
    return instance.get(path);
  },
  postReviewPost: (newPost) => {
    const path = "/review";
    return instance.post(path, newPost);
  },

  /**
   * Review (Discuss) in detail page
   */
  getDiscussPost: () => {
    const path = "/discuss";
    return instance.get(path);
  },

  postDiscuss: (newPost) => {
    const path = "/discuss";
    return instance.post(path, newPost);
  },
  //update like
  updateDiscuss: (id, newPost) => {
    const path = `/discuss/${id}`;
    return instance.put(path, newPost);
  },
};

export default newsApi;
