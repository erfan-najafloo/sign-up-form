import { useState } from "react"
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
export function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        address: "",
        password: "",
        confirmPassword: "",
    });
    const [birthDate, setBirthDate] = useState(null);
    function handleSubmit(event) {
        event.preventDefault();

    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <img src="" alt="" />
                <p></p>
                <div>
                    <input type="text" placeholder=" نام خود را وارد کنید" value={formData.firstName} onChange={(event) => {
                        setFormData({ ...formData, firstName: event.target.value });
                    }} />
                    <input type="text" placeholder="نام خانوادگی خود را وارد کنید" value={formData.lastName} onChange={(event) => {
                        setFormData({ ...formData, lastName: event.target.value });

                    }} />
                </div>
                <div>
                    <input type="text" placeholder="ایمیل خود را وارد کنید" value={formData.email} onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value });
                    }} />
                </div>
                <div>
                    <input type="text" placeholder="نام شرکت خود را وارد کنید" value={formData.company} onChange={(event) => {
                        setFormData({ ...formData, company: event.target.value });
                    }} />
                </div>
                <div>
                    <input type="text" placeholder="آدرس خود را وارد کنید" value={formData.address} onChange={(event) => {
                        setFormData({ ...formData, address: event.target.value });

                    }} />
                </div>
                <DatePicker
                    value={birthDate}
                    onChange={setBirthDate}
                    calendar={persian}
                    locale={persian_fa}
                    placeholder="تاریخ تولد خود را وارد کنید"
                />

                <div>
                    <input type="password" placeholder="رمز عبور خود را ووارد کنید" value={formData.password} onChange={(event) => {
                        setFormData({ ...formData, password: event.target.value });

                    }} />
                </div>
                <div>
                    <input type="password" placeholder="تکرار رمز عبور خود را وارد کنید" value={formData.confirmPassword} onChange={(event) => {
                        setFormData({ ...formData, confirmPassword: event.target.value });

                    }} />
                </div>
                <button>
                    Sign Up
                </button>
            </form>
        </>
    )
}