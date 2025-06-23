import React from "react";

const LoginForm = () => {
  return (
    <div style={styles.wrapper}>
      <form style={styles.form}>
        <h1 style={styles.heading}>Login</h1>

        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="Username"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputBox}>
          <input
            type="password"
            placeholder="Password"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.forgot}>
          <a href="#" style={styles.link}>Forgot Password?</a>
        </div>

        <button type="submit" style={styles.button}>Login</button>

        <p style={styles.orText}>or login with social platforms</p>

        <div style={styles.socialIcons}>
          <a href="#" style={styles.icon}><i className="hi hi-google"></i></a>
          <a href="#" style={styles.icon}><i className="hi hi-facebook"></i></a>
          <a href="#" style={styles.icon}><i className="hi hi-github"></i></a>
          <a href="#" style={styles.icon}><i className="hi hi-linkedin"></i></a>
        </div>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(90deg, #e2e2e2, #c9d6ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
    boxSizing: "border-box",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  inputBox: {
    marginBottom: "18px",
    boxSizing: "border-box",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
  },
  forgot: {
    textAlign: "right",
    marginBottom: "20px",
  },
  link: {
    fontSize: "14px",
    color: "#333",
    textDecoration: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#7494ec",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    boxSizing: "border-box",
  },
  orText: {
    textAlign: "center",
    margin: "20px 0 10px",
    fontSize: "14px",
    color: "#666",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  },
  icon: {
    fontSize: "22px",
    padding: "10px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    color: "#333",
    width: "40px",
    height: "40px",
    textAlign: "center",
    lineHeight: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
};

export default LoginForm;
