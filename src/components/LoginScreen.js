import React from "react";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import { useLang } from "../hooks/useLang";
import { systemsLangs } from "../lang";
import "../styles/loginScreen.scss";
import { DarkMode } from "./DarkMode";

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "edgarolivar16@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const [language, text, handleLangChange] = useLang("en", "loginScreen");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = isValidForm()

    if (validation.ok) {
      Swal.fire({
        title: text.alert_title,
        html: "<p>Spanish speaker: 'Me voy a ir yendo'</p>",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      })
    }else {
      alert(validation.msg)
    }
  };

  const isValidForm = () => {
    const mailFormt = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email.match(mailFormt)) return {ok: false, msg: text.alert_email};
    if (password.length < 5) return {ok: false, msg: text.alert_pass};
    return {ok: true};
  };

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center h-100">
        <DarkMode/>
        <div className="col col-md-6 col-xl-4 d-flex flex-column">
          <div className="row">
            <div className="col">
              <div className="card login__card">
                <div className="card-body">
                  <img
                    className="login__logo mb-5 mt-3"
                    src={process.env.PUBLIC_URL + "/logo512.png"}
                    alt="logo"
                  />
                  <h5 className="card-title mb-3">{text.title}</h5>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control rounded-12"
                        aria-describedby="emailHelp"
                        placeholder={text.input_email}
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder={text.input_password}
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-link login__link text-left">
                        {text.button_recovery}
                      </button>
                      <button className="btn btn-primary login__submit">
                        {text.button_signIn}
                      </button>
                    </div>
                    <button className="btn btn-link login__link">
                      {text.button_register}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="d-flex justify-content-around">
                <div className="login__footer">
                  <i className="fas fa-cog"></i>
                  <select
                    className="ml-2"
                    onChange={handleLangChange}
                    value={language}
                  >
                    {systemsLangs.map((l) => (
                      <option key={l.code} value={l.code}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="login__footer">
                  <button className="btn btn-link">{text.button_help}</button>
                  <button className="btn btn-link">
                    {text.button_privacy}
                  </button>
                  <button className="btn btn-link">{text.button_terms}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
