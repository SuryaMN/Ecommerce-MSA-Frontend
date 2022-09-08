function Logout() {
  localStorage.setItem("user_id", null);
  localStorage.setItem("username", null);
  localStorage.setItem("token", null);
  window.location.href = "/";
  return <h6>Logged Out</h6>;
}

export default Logout;
