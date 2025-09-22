import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Card, CardContent, CardTitle } from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';

interface DepartmentCardProps {
  id: string;
  nameKey: string;
  Icon: LucideIcon;
  color: string;
}

const DepartmentCard = ({ id, nameKey, Icon, color }: DepartmentCardProps) => {
  const { t } = useLanguage();

  return (
    <Link to={`/department/${id}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        <CardContent className="p-6">
          <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <CardTitle>{t(nameKey)}</CardTitle>
          <div className="mt-4 flex items-center text-blue-600">
            <span className="text-sm font-medium">{t('departmentDetails')}</span>
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DepartmentCard;