import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// src/services/authService.ts
export const signupUser = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await fetch("http://localhost:8000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Signup failed. Please try again.");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export interface LoginResponse {
  access: string;
  refresh: string;
  role: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
      email,
      password,
    });

    if (!response.data || !response.data.access || !response.data.role) {
      throw new Error("Invalid login response.");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Invalid credentials.");
  }
};


export const refreshAccessToken = async (refreshToken: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/token/refresh/`, { refresh: refreshToken });
  return response.data;
};

