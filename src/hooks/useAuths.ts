import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5164/api/auth";

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    const login = async (username: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/login`, { username, password });
            const { token } = response.data;
            setToken(token);
            localStorage.setItem("token", token);
        } catch (error: any) {
            console.error("Login error:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Invalid credentials");
        }
    };

    const register = async (username: string, password: string) => {
        try {
            await axios.post(`${API_URL}/register`, { username, password });
        } catch (error: any) {
            console.error("Registration error:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Registration failed");
        }
    };

    return { login, register, token };
};
