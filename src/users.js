function load() {
  return fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((err) => {
      console.log(err);
    });
}
export default load;
