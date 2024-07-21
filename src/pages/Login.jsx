import React, { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import {LoginService} from "../services/auth.service";
import { useDispatch } from "react-redux";
import { login } from "../redux/feature/authSlice";
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const payload = { email, password };
        const response = await LoginService(payload);
        dispatch(login({
            jwt: response.jwt,
            userRole: response.userRole,
            userId: response.userId
        }));
        toast.success('Successfully logged in!');
        navigate("/dashboard/cars");
        
    } catch (error) {
        
        toast.error("Login failed."+error.message);
    }
};

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="py-6">Welcome Back! Please log in to continue.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            
            <div className="form-control mt-2">
              <Button placeholder="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
