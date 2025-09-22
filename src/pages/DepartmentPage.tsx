import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Mail, Phone, MapPin, Clock,
  Zap, Flame, Shield, Landmark, Droplet,
  GraduationCap, Stethoscope, Bus, Building
} from 'lucide-react';

const API_URL = ' http://127.0.0.1:8005//api/news/departments';

const iconMap: Record<string, JSX.Element> = {
  electricity: <Zap size={32} />,
  gas: <Flame size={32} />,
  police: <Shield size={32} />,
  'internal-affairs': <Landmark size={32} />,
  water: <Droplet size={32} />,
  education: <GraduationCap size={32} />,
  health: <Stethoscope size={32} />,
  transport: <Bus size={32} />,
  other: <Building size={32} />,
};

interface Department {
  slug: string;
  nameUz: string;
  descriptionUz: string;
  contactPhone: string;
  contactEmail: string;
  address: string;
  workingHours: string;
  color: string;
  icon: string;
  services?: { titleUz: string }[]; // optional
}

const DepartmentPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [department, setDepartment] = useState<Department | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchDepartment = async () => {
      try {
        const response = await axios.get(`${API_URL}/${slug}/`);
        setDepartment(response.data);
      } catch (error) {
        console.error("Bo‘limni olishda xatolik:", error);
        setDepartment(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartment();
  }, [slug]);

  if (loading) return <div className="p-8">Yuklanmoqda...</div>;

  if (!department) return <div className="p-8 text-center text-red-500">Bo‘lim topilmadi!</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className={`${department.color} py-10 px-6 text-white`}>
        <div className="max-w-5xl mx-auto flex items-center gap-5">
          <div className="bg-white text-yellow-500 rounded-full p-3 shadow">
            {iconMap[department.icon] || <Building size={32} />}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{department.nameUz}</h1>
            <p className="mt-1 text-sm">{department.descriptionUz}</p>
          </div>
        </div>
      </div>

      {/* Kontent */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-10 px-6">
        {/* Aloqa */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Aloqa ma'lumotlari</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-center gap-2"><Phone size={18} /> {department.contactPhone}</li>
            <li className="flex items-center gap-2"><Mail size={18} /> {department.contactEmail}</li>
            <li className="flex items-center gap-2"><MapPin size={18} /> {department.address}</li>
            <li className="flex items-center gap-2"><Clock size={18} /> {department.workingHours}</li>
          </ul>
        </div>

        {/* Xizmatlar (agar mavjud bo‘lsa) */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Xizmatlar</h2>
          {department.services?.length ? (
            <ul className="space-y-4 text-gray-800">
              {department.services.map((service, index) => (
                <li key={index} className="border-b pb-2">{service.titleUz}</li>
              ))}
            </ul>
          ) : (
            <p>Xizmatlar mavjud emas</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
