
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    console.log('Email is:', email)
    console.log('Password is:', password)
    console.log('Remember me:', rememberMe)

    setEmail('')
    setPassword('')
    setRememberMe(false)
    setShowPassword(false)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-950 via-emerald-700 to-green-500 flex flex-col items-center justify-center px-4 py-10">

      {/* Heading */}
      <div className="text-center mb-8">

        <h1 className="text-4xl font-extrabold tracking-wide text-white sm:text-5xl">
          Login Page
        </h1>

        <p className="mt-3 text-sm text-emerald-50 sm:text-base">
          Welcome back! Please sign in to continue.
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/30 bg-white p-8 shadow-2xl sm:p-10">

        <h2 className="mb-2 text-3xl font-bold text-gray-800">
          Welcome Back!
        </h2>

        <p className="mb-8 text-gray-500">
          Enter your details to access your account.
        </p>

        <form onSubmit={submitHandler} className="space-y-5">
          
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-20 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 accent-emerald-600"
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={() => alert('Connect this button to your password reset flow.')}
              className="font-semibold text-emerald-700 hover:text-emerald-900"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-600 py-3.5 font-bold text-white shadow-lg shadow-emerald-200 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-0"
          >
            Log In →
          </button>

        </form>

        {/* Sign Up */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => alert('Connect this button to your registration page.')}
            className="font-bold text-emerald-700 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-white/80">
        © 2026 Your App. All rights reserved.
      </p>

    </div>
  )
}

export default Login
