const Login = ({ handleSubmit, email, setEmail,setMessage,setName,name ,message}) => {
    return (
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
  
        <div className="form-group mb-3">
          <label className="form-label">Message</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
  
        <button  className="btn btn-primary">
          Send
        </button>
      </form>
    );
  };
  
  export default Login;
  