const doGet = async (url, options) => {
  const response = await fetch(url, options);
  return response.json();
};

const doPost = async (url, options) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });
  return response.json();
};

export { doGet, doPost };
