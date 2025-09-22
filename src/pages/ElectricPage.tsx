import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Mail, Phone, MapPin, Clock
} from 'lucide-react';

const API_URL = 'http://127.0.0.1:8005/api/news/departments/electricity/';


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
    services?: { titleUz: string }[];
}

//  So‘rov funksiyasi
const fetchElectricDepartment = async (): Promise<Department | []> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Bo‘limni olishda xatolik:", error);
        return [];
    }
};

const ElectricPage = () => {
    const [department, setDepartment] = useState<Department | []>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchElectricDepartment();
            setDepartment(data); 
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) return <div className="p-8">Yuklanmoqda...</div>;
    if (!department) return <div className="p-8 text-center text-red-500">Bo‘lim topilmadi!</div>;

    return (
          <div className="min-h-screen bg-gray-50 pb-16">
            {/* Header FONI */}
            <div className="h-20 bg-blue-800 shadow"></div>

            {/* Header Matni */}
            <div className=" mx-auto flex items-center justify-center">
                <div className="text-center p-4 rounded">
                    <h1 className="mt-12 text-3xl font-bold text-black">Elektir</h1>
                    <p className="mt-2 text-sm text-gray-600"></p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-10 px-6 ">
                {/* Contact Info */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4">Aloqa ma'lumotlari</h2>
                    <ul className="text-gray-700 space-y-3">
                        <li className="flex items-center gap-2"><Phone size={18} /> +998901234567</li>
                        <li className="flex items-center gap-2"><Mail size={18} /> electric@mail.uz</li>
                        <li className="flex items-center gap-2"><MapPin size={18} /> Tuman markazi</li>
                        <li className="flex items-center gap-2"><Clock size={18} /> 09:00 - 18:00 (Du-Sha)</li>
                    </ul>
                </div>

                {/* Services */}
                {department.length > 0 ? (
                    department.map((dep, index) => (
                        <div key={index} className="bg-white shadow rounded-lg p-6 mb-6">
                            <h2 className="text-lg font-semibold mb-2">Sabab: {dep.reason}</h2>
                            {/* <p className="text-gray-700 mb-2">Sabab: {dep.reason}</p> */}

                            <ul className="text-gray-600 space-y-2 mt-4 text-sm">
                                <li><strong>Boshlanish vaqti:</strong> {new Date(dep.start_time).toLocaleString()}</li>
                                <li><strong>Tugash vaqti:</strong> {new Date(dep.end_time).toLocaleString()}</li>
                                <li>
                                    <strong>Mahalla:</strong>{" "}
                                    {dep.mahalla.length > 0
                                        ? dep.mahalla.map((item) => item.name).join(", ")
                                        : "Yo‘q"}
                                </li>

                                <li>
                                    <strong>Qishloq:</strong>{" "}
                                    {dep.village.length > 0
                                        ? dep.village.map((item) => item.name).join(", ")
                                        : "Yo‘q"}
                                </li>
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>Tezkor xabarlar mavjud emas</p>
                )}


            </div>
        </div>
    );
};

export default ElectricPage;
