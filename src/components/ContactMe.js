import { useState } from "react";
/*we have imported our Modal function and have defined all th const that we are going to use*/
import Modal from "./Modal";
const ContactMe = ({ }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState(false);
  /*if sumbit is true display the submit box*/
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }
  /*we are making a form with button*/
  return (
    <div><div className="new">
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group mb-3">
          <label className="form-label">Name</label>
          <input
            type="name"
            className="form-control"
            placeholder=""
            value={name}
            /*setName,setEmail,setMessage is used to get the input */
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Message</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
        </div>

        <button className="button">
          Send
        </button>
      </form>
      {/*if the form is submitted then display this box*/}
      {submitted && (
        <div className="mt-3">
          <h3>Message Sent:</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Message: {message}</p>
        </div>
      )}
      {/*we have formed Modal elemet here*/}
    </div><div style={{ color: "white" }} className="containermodal">
        {status && (
          <Modal close={() => setStatus(false)}>
            <div className="containermodal">
              <p>No time slots available</p>
            </div>
          </Modal>
        )}
        {/*by clicking it if set status is true then modal box appears*/}
        <button onClick={() => setStatus(true)} className="modal-btn">BOOK A Call</button>
      </div></div>
  );
};

export default ContactMe;
