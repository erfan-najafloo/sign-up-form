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
    }
    )
 function handleSubmit(event) {
    event.preventDefault();
}
    return (
        <>
            <form action="" onSubmit={(event)=>handleSubmit(event)}>
                <img src="" alt="" />
                <p></p>
                <div>
                    <input type="text" placeholder="نام" value={formData.firstName} onChange={(event) => {
                        setFormData({...formData,firstName:event.target.value});
                    }} />
                    <input type="text" placeholder="نام خانوادگی" value={formData.lastName} onChange={(event) => {
                        setFormData({...formData,lastName:event.target.value});

                    }} />
                </div>
                <div>
                    <input type="text" placeholder="ایمیل" value={formData.email} onChange={(event) => {
                        setFormData({...formData,email:event.target.value});
                    }} />
                </div>
                <div>
                    <input type="text" placeholder="شرکت" value={formData.company} onChange={(event) => {
                        setFormData({...formData,company:event.target.value});
                    }} />
                </div>
                <div>
                    <input type="text" placeholder="آدرس" value={formData.address} onChange={(event) => {
                        setFormData({...formData,address:event.target.value});

                    }} />
                </div>
                <div>
                    <input type="date" placeholder="ماه" />
                    <input type="date" placeholder="روز" />
                    <input type="date" placeholder="سال" />
                </div>
                <div>
                    <input type="password" placeholder="رمز عبور" value={formData.password} onChange={(event) => {
                        setFormData({...formData,password:event.target.value});

                    }} />
                </div>
                <div>
                    <input type="password" placeholder="تکرار رمز عبور" value={formData.confirmPassword} onChange={(event) => {
                        setFormData({...formData,confirmPassword:event.target.value});

                    }} />
                </div>
                <button>
                    Sign Up
                </button>
            </form>
        </>
    )
}