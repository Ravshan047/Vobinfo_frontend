import { registerUser } from '../api/api';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const RegisterPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await registerUser({
        username: formData.username,
        email: formData.email,
        phone_number: formData.phone_number,
        password: formData.password,
      });

      navigate('/');
    } catch (err: any) {
      setError(err?.error || 'An error occurred during registration');
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
          <h1 className="mt-12 text-3xl font-bold text-black">{t('registerTitle')}</h1>
          <p className="mt-2 text-sm text-gray-600">{t('welcomeSubtitle')}</p>
        </div>
      </div>

      {/* Register Form Section */}
      <div className="py-16 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t('registerTitle')}</CardTitle>
                <CardDescription>{t('welcomeSubtitle')}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                      {error}
                    </div>
                  )}

                  <Input
                    label={t('name')}
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    autoComplete="username"
                  />

                  <Input
                    label={t('email')}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />

                  <Input
                    label="Phone Number"
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                  />

                  <Input
                    label={t('password')}
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                  />

                  <Input
                    label={t('confirmPassword')}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                  />

                  <div className="mb-6">
                    <div className="flex items-center">
                      <input
                        id="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the{' '}
                        <Link to="#" className="text-blue-600 hover:text-blue-500">
                          {t('terms')}
                        </Link>{' '}
                        and{' '}
                        <Link to="#" className="text-blue-600 hover:text-blue-500">
                          {t('privacy')}
                        </Link>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    isLoading={isLoading}
                  >
                    {t('register')}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-center">
                <p className="text-sm text-gray-600">
                  {t('haveAccount')}{' '}
                  <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                    {t('login')}
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

export default RegisterPage;
