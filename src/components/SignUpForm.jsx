import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { handleSubmit } from "../utils/handleSignUpSubmit";
export function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    address: "",
    password: "",
    confirmPassword: "",
    birthDate: null,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  return (
    <>
      <form
        action=""
        onSubmit={(event) =>
          handleSubmit(event, formData, setErrors, setSuccess)
        }
      >
        <img src="" alt="" />
        <p className="form-header">فرم ثبت نام</p>
        <div className="name">
          <div> </div>
          <input
            type="text"
            className={`last-name ${errors.lastName ? "input-error" : ""}`}
            placeholder="نام خود را وارد نمایید"
            value={formData.lastName}
            onChange={(event) => {
              setFormData({ ...formData, lastName: event.target.value });
            }}
          />
        </div>
        {errors.firstName && (
          <p className="error-message">{errors.firstName}</p>
        )}
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        <div className="other-info">
          <div>
            <input
              type="text"
              className={`email ${errors.email ? "input-error" : ""}`}
              placeholder="ایمیل خود را وارد کنید"
              value={formData.email}
              onChange={(event) => {
                setFormData({ ...formData, email: event.target.value });
              }}
            />
          </div>
          {errors.email && <p className="error-message">{errors.email}</p>}
          <div>
            <input
              type="text"
              className={`company ${errors.company ? "input-error" : ""}`}
              placeholder="نام شرکت خود را وارد کنید (اختیاری)"
              value={formData.company}
              onChange={(event) => {
                setFormData({ ...formData, company: event.target.value });
              }}
            />
          </div>
          <div>
            <input
              type="text"
              className={`address ${errors.address ? "input-error" : ""}`}
              placeholder="آدرس خود را وارد کنید"
              value={formData.address}
              onChange={(event) => {
                setFormData({ ...formData, address: event.target.value });
              }}
            />
          </div>
          {errors.address && <p className="error-message">{errors.address}</p>}
          <DatePicker
            inputClass={`date-picker ${errors.birthDate ? "input-error" : ""}`}
            value={formData.birthDate}
            onChange={(date) => setFormData({ ...formData, birthDate: date })}
            calendar={persian}
            locale={persian_fa}
            placeholder="تاریخ تولد خود را وارد کنید"
          />
          {errors.birthDate && (
            <p className="error-message">{errors.birthDate}</p>
          )}
          <div>
            <input
              type="password"
              className={`password ${errors.password ? "input-error" : ""}`}
              placeholder="رمز عبور خود را وارد کنید"
              value={formData.password}
              onChange={(event) => {
                setFormData({ ...formData, password: event.target.value });
              }}
            />
          </div>
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
          <div>
            <input
              type="password"
              className={`confirm-password ${errors.confirmPassword ? "input-error" : ""}`}
              placeholder="تکرار رمز عبور خود را وارد کنید"
              value={formData.confirmPassword}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  confirmPassword: event.target.value,
                });
              }}
            />
          </div>
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}
        </div>
        <button className="sign-up-button">ثبت نام</button>
        {errors.general && (
          <p className="general-error-message">{errors.general}</p>
        )}

        {success && <p className="success-message">{success}</p>}
      </form>
    </>
  );
}
