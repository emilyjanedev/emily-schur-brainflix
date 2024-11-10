import axios from "axios";

class BrainflixApi {
  constructor() {
    this.apiBaseUrl = import.meta.env.VITE_BRAINFLIX_API_BASE_URL;
    this.apiKey = import.meta.env.VITE_BRAINFLIX_API_KEY;
  }

  async getVideos() {
    try {
      const { data } = await axios.get(
        `${this.apiBaseUrl}/videos?api_key=${this.apiKey}`
      );
      return data;
    } catch (error) {
      console.error("Could not fetch videos", error);
      throw new Error("Error getting videos.");
    }
  }

  async postVideo(newVideo) {
    try {
      const { data } = await axios.post(
        `${this.apiBaseUrl}/videos?api_key=?api_key=${this.apiKey}`,
        newVideo
      );
      return data;
    } catch (error) {
      console.error("Could not post video.", error);
      throw new Error("Error posting video.");
    }
  }

  async getComments(activeVideoId) {
    try {
      const { data } = await axios.get(
        `${this.apiBaseUrl}/videos/${activeVideoId}?api_key=${this.apiKey}`
      );
      return data.comments.sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error("Could not get comments", error);
      throw new Error("Error getting comments.");
    }
  }

  async getVideoById(id) {
    try {
      const { data } = await axios.get(
        `${this.apiBaseUrl}/videos/${id}?api_key=${this.apiKey}`
      );
      return data;
    } catch (error) {
      console.error("Could not fetch video", error);
      throw new Error("Error getting video.");
    }
  }

  async postComment(activeVideoId, comment) {
    try {
      const { data } = await axios.post(
        `${this.apiBaseUrl}/videos/${activeVideoId}/comments?api_key=${this.apiKey}`,
        comment
      );
      return data;
    } catch (error) {
      console.error("Could not post comment", error);
      throw new Error("Error posting comment.");
    }
  }

  async likeVideo(activeVideoId) {
    try {
      const { data } = await axios.put(
        `${this.apiBaseUrl}/videos/${activeVideoId}/likes?api_key=${this.apiKey}`
      );
      return data;
    } catch (error) {
      console.error("Could not like video", error);
      throw new Error("Error liking video.");
    }
  }

  async deleteComment(activeVideoId, commentId) {
    try {
      await axios.delete(
        `${this.apiBaseUrl}/videos/${activeVideoId}/comments/${commentId}?api_key=${this.apiKey}`
      );
    } catch (error) {
      console.error("Could not delete comment", error);
      throw new Error("Error deleting comment.");
    }
  }

  async likeComment(activeVideoId, commentId) {
    try {
      const { data } = await axios.put(
        `${this.apiBaseUrl}/videos/${activeVideoId}/comments/${commentId}?api_key=${this.apiKey}`
      );
      return data.likes;
    } catch (error) {
      console.error("Could not like comment", error);
      throw new Error("Error liking comment.");
    }
  }
}

export default BrainflixApi;
