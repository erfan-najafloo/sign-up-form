import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { handleSubmit } from "../utils/handleSignUpSubmit";
import Inputs from "./custom-inputs";
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
  const form = {
    data: formData,
    setData: setFormData,
    errors: errors,
  };
  return (
    <>
      <form
        action=""
        onSubmit={(event) =>
          handleSubmit(event, formData, setErrors, setSuccess)
        }
      >
        <p className="form-header">فرم ثبت نام</p>
        <div className="name">
          <Inputs
            inputName="lastName"
            placeholder="نام خانوادگی خود را وارد نمایید"
            className="last-name"
            form={form}
          />
          <Inputs
            inputName="firstName"
            placeholder="نام خود را وارد نمایید"
            className="first-name"
            form={form}
          />
        </div>

        <div className="other-info">
          <Inputs
            inputName="email"
            placeholder="ایمیل خود را وارد کنید"
            className="email"
            form={form}
          />

          <Inputs
            inputName="company"
            placeholder="نام شرکت (اختیاری)"
            className="company"
            form={form}
          />

          <Inputs
            inputName="address"
            placeholder="آدرس خود را وارد کنید"
            className="address"
            form={form}
          />
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
          <Inputs
            inputName="password"
            placeholder="رمز عبور خود را وارد کنید"
            className="password"
            form={form}
          />

          <Inputs
            inputName="confirmPassword"
            placeholder="تکرار رمز عبور خود را وارد کنید"
            className="confirm-password"
            form={form}
          />
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
