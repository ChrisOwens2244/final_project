function SignUpConfirmModal({ isOpen, onSwitch, onClose }) {
  return (
    <section>
      <div className={`modal ${isOpen && "modal_opened"}`}>
        <div className="modal__content">
          <h1 className="modal__title">Registration Successfully Completed!</h1>
          <button className="modal__close" onClick={onClose} type="button" />
          <button
            className="modal__switch-btn"
            onClick={onSwitch}
            type="button"
          >
            Sign in
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignUpConfirmModal;
