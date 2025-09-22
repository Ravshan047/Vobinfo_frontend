import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(emailOrUsername, password); // email OR username
      if (success) {
        navigate('/');
      } else {
        setError('Email yoki parol noto‘g‘ri');
      }
    } catch (err) {
      setError('Tizimga kirishda xatolik yuz berdi');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header FONI */}
      <div className="h-20 bg-blue-800 shadow"></div>

      {/* Header Matni */}
      <div className="mx-auto flex items-center justify-center">
        <div className="text-center p-4 rounded">
          <h1 className="mt-12 text-3xl font-bold text-black">Kirish</h1>
          <p className="mt-2 text-sm text-gray-600">Tizimga kirish uchun login va parolingizni kiriting.</p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="py-16 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Kirish</CardTitle>
                <CardDescription>
                  Tizimga kirish uchun login va parolingizni kiriting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                      {error}
                    </div>
                  )}

                  <div className="mb-4">
                    <Input
                      label="Email yoki username"
                      type="text"
                      id="login"
                      value={emailOrUsername}
                      onChange={(e) => setEmailOrUsername(e.target.value)}
                      required
                      autoComplete="username"
                    />
                  </div>

                  <div className="mb-4">
                    <Input
                      label="Parol"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center text-sm text-gray-700">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2">Eslab qolish</span>
                    </label>

                    <div className="text-sm">
                      <Link to="#" className="text-blue-600 hover:text-blue-500">
                        Parolni unutdingizmi?
                      </Link>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    isLoading={isLoading}
                  >
                    Kirish
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-center">
                <p className="text-sm text-gray-600">
                  Hisobingiz yo‘qmi?{' '}
                  <Link to="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                    Ro‘yxatdan o‘tish
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
