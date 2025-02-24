import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onLogin, onCloseModal, handleSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonState, setButtonState] = useState("disabled");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  useEffect(() => {
    if (email != "" && password != "") {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email: email,
      password: password,
    });
  };

  return (
    <ModalWithForm
      buttonText="Next"
      title="Log In"
      handleCloseClick={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      switchText="Sign Up"
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
        <p className={`modal__error`}>Invalid Email Adress</p>
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
        <p className="modal__error" id="password">
          Password should be at least 5 characters long
        </p>
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
