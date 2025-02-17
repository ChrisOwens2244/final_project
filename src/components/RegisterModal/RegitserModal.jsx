import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onRegister, onCloseModal, handleSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
  }, [isOpen]);

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
        <span className="modal__error modal__error_email"></span>
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
          minLength="1"
          maxLength="39"
          required
        />
        <span className="modal__error modal__error_password"></span>
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
        <span className="modal__error modal__error_name"></span>
      </label>
    </ModalWithForm>
  );
}
export default RegisterModal;
