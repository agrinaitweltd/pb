'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication (replace with actual API call)
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard after successful login
      router.push('/');
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'var(--bg)' }}
    >
      {/* Login Card */}
      <div
        className="w-full max-w-md rounded-2xl border p-8 shadow-cardHover"
        style={{
          background: 'var(--s)',
          borderColor: 'var(--bl)',
        }}
      >
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'var(--y)' }}
            >
              <svg viewBox="0 0 32 32" width="40" height="40" fill="none">
                <circle cx="16" cy="16" r="14" fill="var(--gd)" opacity=".15" />
                <path
                  d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4z"
                  fill="var(--gd)"
                  opacity=".3"
                />
                <path
                  d="M10 20c0-3.31 2.69-6 6-6s6 2.69 6 6"
                  stroke="var(--gd)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="16" cy="11" r="3" fill="var(--gd)" />
                <path d="M8 22h16" stroke="var(--gd)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-extrabold mb-2" style={{ color: 'var(--t)' }}>
            Welcome Back
          </h1>
          <p className="text-sm" style={{ color: 'var(--t2)' }}>
            Sign in to <span className="font-semibold" style={{ color: 'var(--g)' }}>Pearl Land Safaris</span> Admin
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold mb-2"
              style={{ color: 'var(--t2)' }}
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ stroke: 'var(--t3)' }}
                strokeWidth={2}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="admin@pearlandsafaris.com"
                required
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm outline-none transition-all"
                style={{
                  background: 'var(--s)',
                  borderColor: 'var(--b)',
                  color: 'var(--t)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--g)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--b)')}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold mb-2"
              style={{ color: 'var(--t2)' }}
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ stroke: 'var(--t3)' }}
                strokeWidth={2}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-12 py-2.5 border rounded-lg text-sm outline-none transition-all"
                style={{
                  background: 'var(--s)',
                  borderColor: 'var(--b)',
                  color: 'var(--t)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--g)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--b)')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-green-light rounded transition-colors"
                style={{ color: 'var(--t3)' }}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" strokeWidth={2} />
                ) : (
                  <Eye className="w-4 h-4" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 rounded border-2 cursor-pointer accent-green-primary"
                style={{ borderColor: 'var(--b)' }}
              />
              <span className="text-sm font-medium" style={{ color: 'var(--t2)' }}>
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-sm font-semibold hover:underline"
              style={{ color: 'var(--g)' }}
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            className="w-full !py-3 !text-base !font-bold"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </div>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" style={{ borderColor: 'var(--bl)' }} />
          </div>
          <div className="relative flex justify-center text-xs">
            <span
              className="px-3 text-xs font-medium"
              style={{ background: 'var(--s)', color: 'var(--t3)' }}
            >
              OR
            </span>
          </div>
        </div>

        {/* Demo Login Info */}
        <div
          className="p-4 rounded-lg border text-center"
          style={{ background: 'var(--gl)', borderColor: 'var(--g)' + '40' }}
        >
          <p className="text-xs font-semibold mb-1" style={{ color: 'var(--g)' }}>
            Demo Admin Credentials
          </p>
          <p className="text-xs" style={{ color: 'var(--gd)' }}>
            Email: <span className="font-mono font-bold">admin@pearlandsafaris.com</span>
          </p>
          <p className="text-xs" style={{ color: 'var(--gd)' }}>
            Password: <span className="font-mono font-bold">demo123</span>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs mt-6" style={{ color: 'var(--t3)' }}>
          Need access? Contact your system administrator
        </p>
      </div>

      {/* Background Decoration */}
      <div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{ background: 'var(--bg)' }}
      >
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'var(--g)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'var(--y)' }}
        />
      </div>
    </div>
  );
}
