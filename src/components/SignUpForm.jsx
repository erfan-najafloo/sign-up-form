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
        birthDate: null,
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
 function handleSubmit(event, formData, setErrors, setSuccess) {
    event.preventDefault();
    setErrors({});
    setSuccess('');
    if (
        !formData.firstName &&
        !formData.lastName &&
        !formData.email &&
        !formData.company &&
        !formData.address &&
        !formData.password &&
        !formData.confirmPassword &&
        !formData.birthDate
    ) {
        setErrors({ general: 'ابتدا اطلاعات مورد نیاز را وارد کنید' });
        return;
    }
    let newErrors = {};
    if (!formData.firstName) {
        newErrors.firstName = "وارد کردن نام الزامی است"
    }
    if (!formData.lastName) {
        newErrors.lastName = "وارد کردن نام خانوادگی الزامی است"
    }
    if (!formData.email) {
        newErrors.email = "وارد کردن ایمیل الزامی است"
    } else if (!validateEmail(formData.email)) {
        newErrors.email = "ایمیل نامعتبر است";
    }
    if (!formData.address) {
        newErrors.address = "وارد کردن آدرس الزامی است"
    }
    if (!formData.birthDate) {
        newErrors.birthDate = "وارد کردن تاریخ تولد الزامی است"
    }
    if (!formData.password) {
        newErrors.password = "وارد کردن رمز عبور الزامی است"
    } else if (!validatePassword(formData.password)) {
        newErrors.password = "رمز عبور باید شامل حروف بزرگ و کوچک، عدد و یک کاراکتر خاص باشد"
    }
    if (formData.password) {
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "وارد کردن تکرار رمز عبور الزامی است";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "رمز ها یکسان نیستند";
        }
    }
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
    } else {
        setSuccess("ثبت نام با موفقیت انجام شد");
    }



}
const validateEmail = (em) => {
            return String(em)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };
        function validatePassword(pw) {

            return /[A-Z]/.test(pw) &&
                /[a-z]/.test(pw) &&
                /[0-9]/.test(pw) &&
                /[^A-Za-z0-9]/.test(pw) &&
                pw.length > 4;

        };
    return (
        <>
            <form action="" onSubmit={(event) => handleSubmit(event, formData, setErrors, setSuccess)}>
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
                {errors.firstName && <p>{errors.firstName}</p>}
                {errors.lastName && <p>{errors.lastName}</p>}
                <div>
                    <input type="text" placeholder="ایمیل خود را وارد کنید" value={formData.email} onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value });
                    }} />
                </div>
                {errors.email && <p>{errors.email}</p>}
                <div>
                    <input type="text" placeholder="نام شرکت خود را وارد کنید (اختیاری)" value={formData.company} onChange={(event) => {
                        setFormData({ ...formData, company: event.target.value });
                    }} />
                </div>
                <div>
                    <input type="text" placeholder="آدرس خود را وارد کنید" value={formData.address} onChange={(event) => {
                        setFormData({ ...formData, address: event.target.value });

                    }} />
                </div>
                {errors.address && <p>{errors.address}</p>}
                <DatePicker
                    value={formData.birthDate}
                    onChange={(date) => setFormData({ ...formData, birthDate: date })}
                    calendar={persian}
                    locale={persian_fa}
                    placeholder="تاریخ تولد خود را وارد کنید"
                />
                {errors.birthDate && <p>{errors.birthDate}</p>}
                <div>
                    <input type="password" placeholder="رمز عبور خود را وارد کنید" value={formData.password} onChange={(event) => {
                        setFormData({ ...formData, password: event.target.value });

                    }} />
                </div>
                {errors.password && <p>{errors.password}</p>}
                <div>
                    <input type="password" placeholder="تکرار رمز عبور خود را وارد کنید" value={formData.confirmPassword} onChange={(event) => {
                        setFormData({ ...formData, confirmPassword: event.target.value });

                    }} />
                </div>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                <button>
                    Sign Up
                </button>
                {errors.general && <p>{errors.general}</p>}

                {success && <p className="success-message">{success}</p>}
            </form>
        </>
    )
}