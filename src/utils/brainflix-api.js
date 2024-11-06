import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BRAINFLIX_API_BASE_URL;
// const apiKey = import.meta.env.VITE_BRAINFLIX_API_KEY;

export default class BrainflixApi {
  constructor() {
    // this.apiKey = apiKey;
    this.baseUrl = apiBaseUrl;
  }

  async getVideos() {
    try {
      const { data } = await axios.get(`${this.baseUrl}/videos`);
      return data;
    } catch (error) {
      console.error("Could not fetch videos", error);
      throw new Error("Error getting videos.");
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
        `${this.baseUrl}/videos/${activeVideoId}/comments?`,
        comment
      );
      return data;
    } catch (error) {
      console.error("Could not post comment", error);
      throw new Error("Error posting comment");
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
}
