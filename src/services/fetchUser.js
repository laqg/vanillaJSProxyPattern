export default function fetchUser(id) {
  return new Promise((resolve) => {
    //setTimeout to simulate extra delay in service
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => {
          resolve({ data: json });
        })
        .catch(() => {
          resolve({ error: true });
        });
    }, Math.random() * (1000 - 0) + 0);
  });
}
