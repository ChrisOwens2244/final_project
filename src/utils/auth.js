export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  if (!email || !password) {
    return;
  }
  return new Promise((resolve) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  if (!token) {
    return;
  }
  return new Promise((resolve) => {
    resolve({
      data: {
        name: "fake user",
        email: "fake@example,com",
        password: "password",
        _id: "fake-id",
      },
    });
  });
};

export const register = ({ name, email, password }) => {
  return new Promise((resolve) => {
    resolve({
      data: { name: name, email: email, password: password },
    });
  });
};
