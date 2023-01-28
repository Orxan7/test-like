export function addPosts(posts) {
  return {
    type: 'ADD_POSTS',
    payload: {
        posts: posts
    }
  }
}

export function likePost(id) {
  return {
    type: 'LIKE_POST',
    payload: {
        id: id
    }
  }
}

export function unlikePost(idx) {
  return {
    type: 'UNLIKE_POST',
    payload: {
        idx: idx
    }
  }
}

export function deletePost(idy) {
  return {
    type: 'DELETE_POST',
    payload: {
        idy: idy
    }
  }
}

