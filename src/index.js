import "./styles.css";
import userProxy from "./helpers/userProxy";

document.getElementById("app").innerHTML = `
<h1>Proxy</h1>
<input type='number' id='userId' min=1 max=10 value=0>
<button id='clearButton'>clear cache</button>
<br/><br/>
<code id='userData'></code>
`;

document.getElementById("userId").addEventListener("change", async (event) => {
  const input = document.getElementById("userId");
  const userData = document.getElementById("userData");
  input.setAttribute("disabled", true);
  userData.innerHTML = `<small><p>Loading...</p></small>`;
  const response = await userProxy.getUser(event.target.value);
  if (response.data) {
    const { name, username, email } = response.data;
    userData.innerHTML = `<small><p>Name: ${name}</p><p>Username: ${username}</p><p>Email: ${email}</p></small>`;
  }
  if (response.error) {
    userData.innerHTML = `<small><i>There has been an error, please try again</i></small>`;
  }
  input.removeAttribute("disabled");
});

document.getElementById("clearButton").addEventListener("click", () => {
  userProxy.clearCache();
});
