import { useEffect, useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

// API manzil
const API_URL = 'https://lutsifer.pythonanywhere.com/api/departments/education/';

// Interfeys
interface EducationItem {
    id: number;
    message: string;
    date: string;
    mahalla: { id: number; name: string }[];
    village: { id: number; name: string }[];
}

// So‘rov funksiyasi
const fetchEducationDepartment = async (): Promise<EducationItem[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Ta'lim bo‘limini olishda xatolik:", error);
        return [];
    }
};

const EducationPage = () => {
    const [department, setDepartment] = useState<EducationItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchEducationDepartment();
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
                    <h1 className="mt-12 text-3xl font-bold text-black">Ta'lim</h1>
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
                        <li className="flex items-center gap-2"><Mail size={18} /> education@mail.uz</li>
                        <li className="flex items-center gap-2"><MapPin size={18} /> Tuman markazi</li>
                        <li className="flex items-center gap-2"><Clock size={18} /> 09:00 - 18:00 (Du-Sha)</li>
                    </ul>
                </div>

                {/* Education News */}

                    {department.length > 0 ? (
                        department.map((item, index) => (
                            <div key={index} className="bg-white shadow rounded-lg p-6 break-words">
                                <h2 className="text-lg font-semibold mb-2">Xabar: {item.message}</h2>
                                <ul className="text-gray-600 space-y-2 mt-4 text-sm">
                                    <li><strong>Sana:</strong> {new Date(item.date).toLocaleDateString()}</li>
                                    <li>
                                        <strong>Mahalla:</strong>{" "}
                                        {item.mahalla.length > 0
                                            ? item.mahalla.map((m) => m.name).join(", ")
                                            : "Yo‘q"}
                                    </li>
                                    <li>
                                        <strong>Qishloq:</strong>{" "}
                                        {item.village.length > 0
                                            ? item.village.map((v) => v.name).join(", ")
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

export default EducationPage;
