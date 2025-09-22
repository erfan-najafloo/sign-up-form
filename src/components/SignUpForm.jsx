import { useState } from "react"

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
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [birthDate, setBirthDate] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <img src="" alt="" />
                <p></p>
                <div>
                    <input type="text" placeholder="نام" value={formData.firstName} onChange={(event) => {
                        setFormData({ ...formData, firstName: event.target.value });
                    }} />
                    <input type="text" placeholder="نام خانوادگی" value={formData.lastName} onChange={(event) => {
                        setFormData({ ...formData, lastName: event.target.value });

                    }} />
                </div>
                <div>
                    <input type="text" placeholder="ایمیل" value={formData.email} onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value });
                    }} />
                </div>
                <div>
                    <input type="text" placeholder="شرکت" value={formData.company} onChange={(event) => {
                        setFormData({ ...formData, company: event.target.value });
                    }} />
                </div>
                <div>
                    <input type="text" placeholder="آدرس" value={formData.address} onChange={(event) => {
                        setFormData({ ...formData, address: event.target.value });

                    }} />
                </div>
                <div>
                    <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
                        <option value="">ماه</option>
                        <option value="1">فروردین</option>
                        <option value="2">اردیبهشت</option>
                        <option value="3">خرداد</option>
                        <option value="4">تیر</option>
                        <option value="5">مرداد</option>
                        <option value="6">شهریور</option>
                        <option value="7">مهر</option>
                        <option value="8">آبان</option>
                        <option value="9">آذر</option>
                        <option value="10">دی</option>
                        <option value="11">بهمن</option>
                        <option value="12">اسفند</option>

                    </select>
                    <select value={birthDay} onChange={(e) => setBirthDay(e.target.value)}>
                        <option value="">روز</option>
                        {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
                        <option value="">سال</option>
                        {Array.from({ length: 101 }, (_, i) => (
                            <option key={1925 + i} value={1925 + i}>{1925 + i}</option>
                        ))}

                    </select>
                    <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />

                </div>
                <div>
                    <input type="password" placeholder="رمز عبور" value={formData.password} onChange={(event) => {
                        setFormData({ ...formData, password: event.target.value });

                    }} />
                </div>
                <div>
                    <input type="password" placeholder="تکرار رمز عبور" value={formData.confirmPassword} onChange={(event) => {
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