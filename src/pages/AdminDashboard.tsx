import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';

const AdminDashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      navigate('/login');
    }
  }, [isAuthenticated, user, navigate]);
  
  if (!isAuthenticated || user?.role !== 'admin') {
    return null;
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">{t('adminDashboard')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Departments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent News</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">6</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Contact Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Contact Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <div className="flex justify-between">
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Request about electricity connection issues in central district</p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>News Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Recent News</h3>
                    <Button variant="primary" size="sm">Add News</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                        <div className="flex justify-between">
                          <p className="font-medium">Плановое отключение электроэнергии</p>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">2025-06-10</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;