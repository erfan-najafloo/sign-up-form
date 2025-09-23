import { useState } from "react"
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
<form action="" onSubmit={(event) => handleSubmit(event, formData, setErrors, setSuccess)}>
    <img src="" alt="" />
    <p></p>
    <div>
        <input type="text" className="first-name" placeholder=" نام خود را وارد کنید" value={formData.firstName} onChange={(event) => {
            setFormData({ ...formData, firstName: event.target.value });
        }} />
        <input type="text" className="last-name" placeholder="نام خانوادگی خود را وارد کنید" value={formData.lastName} onChange={(event) => {
            setFormData({ ...formData, lastName: event.target.value });

        }} />
    </div>
    {errors.firstName && <p>{errors.firstName}</p>}
    {errors.lastName && <p>{errors.lastName}</p>}
    <div>
        <input type="text" className="email" placeholder="ایمیل خود را وارد کنید" value={formData.email} onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
        }} />
    </div>
    {errors.email && <p>{errors.email}</p>}
    <div>
        <input type="text" className="company" placeholder="نام شرکت خود را وارد کنید (اختیاری)" value={formData.company} onChange={(event) => {
            setFormData({ ...formData, company: event.target.value });
        }} />
    </div>
    <div>
        <input type="text" className="address" placeholder="آدرس خود را وارد کنید" value={formData.address} onChange={(event) => {
            setFormData({ ...formData, address: event.target.value });

        }} />
    </div>
    {errors.address && <p>{errors.address}</p>}
    <DatePicker
    className="data-picker"
        value={formData.birthDate}
        onChange={(date) => setFormData({ ...formData, birthDate: date })}
        calendar={persian}
        locale={persian_fa}
        placeholder="تاریخ تولد خود را وارد کنید"
    />
    {errors.birthDate && <p>{errors.birthDate}</p>}
    <div>
        <input type="password" className="password" placeholder="رمز عبور خود را وارد کنید" value={formData.password} onChange={(event) => {
            setFormData({ ...formData, password: event.target.value });

        }} />
    </div>
    {errors.password && <p>{errors.password}</p>}
    <div>
        <input type="password" className="confirm-password" placeholder="تکرار رمز عبور خود را وارد کنید" value={formData.confirmPassword} onChange={(event) => {
            setFormData({ ...formData, confirmPassword: event.target.value });

        }} />
    </div>
    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
    <button className="sign-up-button">
        Sign Up
    </button>
    {errors.general && <p>{errors.general}</p>}

    {success && <p className="success-message">{success}</p>}
</form>
</>
)
}