import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onRegister, onCloseModal, handleSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [buttonState, setButtonState] = useState("disabled");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
  }, [isOpen]);

  useEffect(() => {
    if (email != "" && password != "" && name != "") {
      setButtonState("enabled");
    } else {
      setButtonState("disabled");
    }
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      email: email,
      password: password,
      name: name,
    });
  };
  return (
    <ModalWithForm
      buttonText="Next"
      title="Sign Up"
      handleCloseClick={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      switchText="Log In"
      onSwitch={handleSwitch}
      buttonState={buttonState}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          minLength="1"
          required
        />
        <p className="modal__error">Invalid email</p>
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          minLength="2"
          maxLength="39"
          required
        />
        <p className="modal__error">Invalid Password</p>
      </label>
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          maxLength="39"
        />
        <p className="modal__error">Invalid name</p>
      </label>
    </ModalWithForm>
  );
}
export default RegisterModal;
