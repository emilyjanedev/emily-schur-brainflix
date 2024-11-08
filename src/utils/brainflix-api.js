import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BRAINFLIX_API_BASE_URL;
// const apiKey = import.meta.env.VITE_BRAINFLIX_API_KEY;

export default class BrainflixApi {
  constructor() {
    // this.apiKey = apiKey;
    this.baseUrl = apiBaseUrl;
  }

  async getVideos(page) {
    try {
      const { data } = await axios.get(`${this.baseUrl}/videos?page=${page}`);
      return data;
    } catch (error) {
      console.error("Could not fetch videos", error);
      throw new Error("Error getting videos.");
    }
  }

  async postVideo(newVideo) {
    try {
      console.log("In brainflix api:", newVideo);
      const { data } = await axios.post(`${this.baseUrl}/videos`, newVideo);
      return data;
    } catch (error) {
      console.error("Could not post video.", error);
      throw new Error("Error posting video.");
    }
  }

  async getComments(activeVideoId) {
    try {
      const { data } = await axios.get(
        `${this.baseUrl}/videos/${activeVideoId}`
      );
      return data.comments.sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error("Could not get comments", error);
      throw new Error("Error getting comments.");
    }
  }

  async getLikeCount(videoId) {
    try {
      const { data } = await axios.get(`${this.baseUrl}/videos/${videoId}`);
      return data.likes;
    } catch (error) {
      console.error("Could not get like count.", error);
      throw new Error("Error getting like count.");
    }
  }

  async getVideoId(index) {
    try {
      const videoList = await this.getVideos();
      return videoList[index].id;
    } catch (error) {
      console.error("Could not fetch video id.", error);
      throw new Error("Error getting video id");
    }
  }

  async getVideoById(id) {
    try {
      const { data } = await axios.get(`${this.baseUrl}/videos/${id}`);
      return data;
    } catch (error) {
      console.error("Could not fetch video", error);
      throw new Error("Error getting video.");
    }
  }

  async postComment(activeVideoId, comment) {
    try {
      const { data } = await axios.post(
        `${this.baseUrl}/videos/${activeVideoId}/comments`,
        comment
      );
      return data;
    } catch (error) {
      console.error("Could not post comment", error);
      throw new Error("Error posting comment");
    }
  }

  async likeVideo(activeVideoId) {
    try {
      await axios.put(`${this.baseUrl}/videos/${activeVideoId}/likes`);
    } catch (error) {
      console.error("Could not like comment", error);
      throw new Error("Error liking comment");
    }
  }

  async deleteComment(activeVideoId, commentId) {
    try {
      await axios.delete(
        `${apiBaseUrl}/videos/${activeVideoId}/comments/${commentId}`
      );
    } catch (error) {
      console.error("Could not delete comment", error);
      throw new Error("Error deleting comment");
    }
  }

  async likeComment(activeVideoId, commentId) {
    try {
      const { data } = await axios.put(
        `${apiBaseUrl}/videos/${activeVideoId}/comments/${commentId}`
      );
      return data.likes;
    } catch (error) {
      console.error("Could not like comment", error);
      throw new Error("Error liking comment");
    }
  }
}
