const BASE_URL = `http://localhost:3000/api/v1`;

export const Product = {
  index() {
    return fetch(`${BASE_URL}/products`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {

      return res.json();
    });
  },

  show(id) {
    return fetch(`${BASE_URL}/products/${id}`)
      .then((res) => res.json())
      .catch(console.error);
  },
  create(params) {
    return fetch(`${BASE_URL}/products`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .catch(console.error);
  },
};