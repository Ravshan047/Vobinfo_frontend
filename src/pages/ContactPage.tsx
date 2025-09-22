import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header FONI */}
      <div className="h-20 bg-blue-600 shadow"></div>

      {/* Header Matni */}
      <div className="mx-auto flex items-center justify-center">
        <div className="text-center p-4 rounded">
          <h1 className="mt-12 text-3xl font-bold text-black">{t('contactTitle')}</h1>
          <p className="mt-2 text-sm text-gray-600">{t('contactSubtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">{t('contactInfo')}</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{t('address')}</p>
                      <p className="text-gray-600"> Vobkent ,<br />Buxoro, Uzbekistan</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{t('phone')}</p>
                      <p className="text-gray-600">+998 65 222 22 22</p>
                      <p className="text-gray-600">+998 91 830 18 01</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">vobkentinfo@gmail.com</p>
                      <p className="text-gray-600">vobkentuz@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{t('workingHours')}</p>
                      <p className="text-gray-600">Dushanba: - Juma: 9:00 - 18:00</p>
                      <p className="text-gray-600">Shanba: 9:00 - 14:00</p>
                      <p className="text-gray-600">Yakshanba: Yopiq</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">{t('contactTitle')}</h2>

                {submitSuccess ? (
                  <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                    Your message has been sent successfully. We'll get back to you soon!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <Input
                        label={t('name')}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />

                      <Input
                        label={t('email')}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <Input
                      label={t('subject')}
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />

                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {t('message')}
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isSubmitting}
                    >
                      {t('submit')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
