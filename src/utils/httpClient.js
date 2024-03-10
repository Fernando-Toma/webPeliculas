const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODkzMTI2MzBjZTUwYjdiNjlhMDg0MGJjNTcyMGRkMyIsInN1YiI6IjY1ZWEzOTNmN2M2ZGUzMDE3YzA5ODkyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEaOm-hwYhEGz-urU5IXGBXR2QOy8jz2mmX4fceHD2w",
        "Content-Type": "application/json;charset=utf-8"
      },
    })
    .then((result) => result.json())
}