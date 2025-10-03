 function LoginForm() {
  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login Form</h2>
      <form>
        <div style={{ display: "flex", marginBottom: "1rem", alignItems: "center" }}>
          <label htmlFor="email" style={{ flex: "0 0 100px" }}>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            style={{ flex: "1", padding: "8px" }}
          />
        </div>

        <div style={{ display: "flex", marginBottom: "1rem", alignItems: "center" }}>
          <label htmlFor="password" style={{ flex: "0 0 100px" }}>Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            style={{ flex: "1", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginForm;