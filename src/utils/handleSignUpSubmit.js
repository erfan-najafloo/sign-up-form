import { validateEmail } from "./validateEmail";
import { validatePassword } from "./validatePassword";
export function handleSubmit(event, formData, setErrors, setSuccess) {
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