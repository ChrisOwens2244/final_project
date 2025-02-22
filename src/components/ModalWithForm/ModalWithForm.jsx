function ModalWithForm({
  children,
  buttonText,
  title,
  handleCloseClick,
  isOpen,
  onSubmit,
  switchText,
  onSwitch,
  buttonState,
}) {
  return (
    <section>
      <div className={`modal ${isOpen && "modal_opened"}`}>
        <div className="modal__content">
          <h2 className="modal__title">{title}</h2>
          <button
            className="modal__close"
            type="button"
            onClick={handleCloseClick}
          />
          <form className="modal__form" onSubmit={onSubmit}>
            {children}
            <div className="modal__buttons">
              <button
                type="submit"
                className={`modal__submit modal__submit_${buttonState}`}
              >
                {buttonText}
              </button>
              <div className="modal__switch">
                <p className="modal__or">{"or "}</p>
                <button
                  type="button"
                  className="modal__switch-btn"
                  onClick={onSwitch}
                >
                  {switchText}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default ModalWithForm;
