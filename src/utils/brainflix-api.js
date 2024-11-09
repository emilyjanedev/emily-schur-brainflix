import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BRAINFLIX_API_BASE_URL;

export async function getVideos() {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/videos`);
    return data;
  } catch (error) {
    console.error("Could not fetch videos", error);
    throw new Error("Error getting videos.");
  }
}

export async function postVideo(newVideo) {
  try {
    const { data } = await axios.post(`${apiBaseUrl}/videos`, newVideo);
    return data;
  } catch (error) {
    console.error("Could not post video.", error);
    throw new Error("Error posting video.");
  }
}

export async function getComments(activeVideoId) {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/videos/${activeVideoId}`);
    return data.comments.sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    console.error("Could not get comments", error);
    throw new Error("Error getting comments.");
  }
}

export async function getLikeCount(videoId) {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/videos/${videoId}`);
    return data.likes;
  } catch (error) {
    console.error("Could not get like count.", error);
    throw new Error("Error getting like count.");
  }
}

export async function getVideoId(index) {
  try {
    const videoList = await getVideos();
    return videoList[index].id;
  } catch (error) {
    console.error("Could not fetch video id.", error);
    throw new Error("Error getting video id");
  }
}

export async function getVideoById(id) {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/videos/${id}`);
    return data;
  } catch (error) {
    console.error("Could not fetch video", error);
    throw new Error("Error getting video.");
  }
}

export async function postComment(activeVideoId, comment) {
  try {
    const { data } = await axios.post(
      `${apiBaseUrl}/videos/${activeVideoId}/comments`,
      comment
    );
    return data;
  } catch (error) {
    console.error("Could not post comment", error);
    throw new Error("Error posting comment");
  }
}

export async function likeVideo(activeVideoId) {
  try {
    await axios.put(`${apiBaseUrl}/videos/${activeVideoId}/likes`);
  } catch (error) {
    console.error("Could not like video", error);
    throw new Error("Error liking video");
  }
}

export async function deleteComment(activeVideoId, commentId) {
  try {
    await axios.delete(
      `${apiBaseUrl}/videos/${activeVideoId}/comments/${commentId}`
    );
  } catch (error) {
    console.error("Could not delete comment", error);
    throw new Error("Error deleting comment");
  }
}

export async function likeComment(activeVideoId, commentId) {
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
