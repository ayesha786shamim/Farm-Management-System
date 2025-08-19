import { addData } from "./apiService";

export interface LoginData {
    username: string;
    password: string;
}

export interface LoginResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    accessToken: string;
    refreshToken: string;
}

export interface SignupData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    phone?: string;
}

export interface SignupResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;

}

export const login = (data: LoginData) =>
    addData<LoginData, LoginResponse>("auth/login", data);


export const signup = (data: SignupData) =>
    addData<SignupData, SignupResponse>("users/add", data);
