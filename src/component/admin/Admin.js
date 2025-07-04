import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import EyeIcon from '../../assets/eyeIcon.png';
import EyeSlashIcon from '../../assets/eyeHiddenIcon.png';
import { useGettokenLazyQuery  } from "../../generated/User.tsx";

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [getToken, { data }] = useGettokenLazyQuery();

    const handleLogin = async (e) => {
        e.preventDefault();
        const newErrors = { email: "", password: "" };
        if (!email.trim()) {
            newErrors.email = "Email is required";
        }
        if (!password.trim()) {
            newErrors.password = "Password is required";
        }
        setErrors(newErrors);
        if (!newErrors.email && !newErrors.password) {
            try {
                const response = await getToken({
                    variables: {
                        email,
                        password,
                    },
                });
            const token = response?.data?.gettoken;
            if (token) {
                localStorage.setItem("token", token);
                navigate("/blogs");
            } else {
                setErrors((prev) => ({
                    ...prev,
                    password: "Invalid credentials",
                }));
            }
        } catch (err) {
            console.error("Login API error:", err);
        }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="m-auto max-w-[400px] 2xl:max-w-[500px] w-full bg-white p-5 sm:p-8 rounded border">
                <h3 className="form-heading-content text-center mb-6 mt-4 text-2xl font-bold">
                    Admin Login
                </h3>    
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="form-content">
                        <input
                            type="email"
                            placeholder="Email"
                            className={`px-4 py-3 border border-[#343947] rounded-md w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="relative form-content">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={`px-4 py-3 border border-[#343947] rounded-md w-full ${errors.password ? "border-red-500" : "border-gray-300"}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                            tabIndex={-1}
                        >
                            {showPassword ? (
                                <img
                                    src={EyeSlashIcon}
                                    alt={''}
                                    className="w-5 h-5"
                                />
                            ) : (
                                <img
                                    src={EyeIcon}
                                    alt={''}
                                    className="w-5 h-5"
                                />
                            )}
                        </button>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <button type="submit" className="w-full bg-[#0F54FF] text-white px-4 py-3 font-semibold text-lg rounded-md form-content">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin;