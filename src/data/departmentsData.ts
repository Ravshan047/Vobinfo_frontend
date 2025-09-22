import { 
  Zap, 
  Flame, 
  Shield, 
  Building, 
  Droplets, 
  GraduationCap, 
  Stethoscope, 
  Bus 
} from 'lucide-react';
import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Department {
  id: string;
  nameKey: string;
  icon: LucideIcon;
  color: string;
  contactPhone: string;
  contactEmail: string;
  address: string;
  workingHours: string;
  descriptionKey?: string;
  services?: Array<{
    titleKey: string;
    descriptionKey: string;
  }>;
}

const departments: Department[] = [
  {
    id: 'electricity',
    nameKey: 'departmentElectricity',
    icon: Zap,
    color: 'bg-yellow-500',
    contactPhone: '+998 71 123 4567',
    contactEmail: 'electricity@cityportal.uz',
    address: 'ул. Энергетиков, 45, Ташкент',
    workingHours: '9:00 - 18:00',
    descriptionKey: 'electricityDepartmentDescription',
    services: [
      {
        titleKey: 'electricityConnection',
        descriptionKey: 'electricityConnectionDescription'
      },
      {
        titleKey: 'electricityBilling',
        descriptionKey: 'electricityBillingDescription'
      },
      {
        titleKey: 'electricityOutage',
        descriptionKey: 'electricityOutageDescription'
      }
    ]
  },
  {
    id: 'gas',
    nameKey: 'departmentGas',
    icon: Flame,
    color: 'bg-blue-500',
    contactPhone: '+998 71 234 5678',
    contactEmail: 'gas@cityportal.uz',
    address: 'ул. Газовая, 12, Ташкент',
    workingHours: '9:00 - 18:00',
    descriptionKey: 'gasDepartmentDescription',
    services: [
      {
        titleKey: 'gasConnection',
        descriptionKey: 'gasConnectionDescription'
      },
      {
        titleKey: 'gasBilling',
        descriptionKey: 'gasBillingDescription'
      },
      {
        titleKey: 'gasSafety',
        descriptionKey: 'gasSafetyDescription'
      }
    ]
  },
  {
    id: 'police',
    nameKey: 'departmentPolice',
    icon: Shield,
    color: 'bg-indigo-600',
    contactPhone: '+998 71 345 6789',
    contactEmail: 'police@cityportal.uz',
    address: 'ул. Амира Темура, 78, Ташкент',
    workingHours: '24/7',
    descriptionKey: 'policeDepartmentDescription',
    services: [
      {
        titleKey: 'policeEmergency',
        descriptionKey: 'policeEmergencyDescription'
      },
      {
        titleKey: 'policeReport',
        descriptionKey: 'policeReportDescription'
      },
      {
        titleKey: 'policePermits',
        descriptionKey: 'policePermitsDescription'
      }
    ]
  },
  // {
  //   id: 'internal-affairs',
  //   nameKey: 'departmentInternalAffairs',
  //   icon: Building,
  //   color: 'bg-gray-700',
  //   contactPhone: '+998 71 456 7890',
  //   contactEmail: 'affairs@cityportal.uz',
  //   address: 'ул. Независимости, 56, Ташкент',
  //   workingHours: '9:00 - 18:00',
  //   descriptionKey: 'internalAffairsDepartmentDescription',
  //   services: [
  //     {
  //       titleKey: 'documentServices',
  //       descriptionKey: 'documentServicesDescription'
  //     },
  //     {
  //       titleKey: 'residencyRegistration',
  //       descriptionKey: 'residencyRegistrationDescription'
  //     },
  //     {
  //       titleKey: 'citizenComplaints',
  //       descriptionKey: 'citizenComplaintsDescription'
  //     }
  //   ]
  // },
  {
    id: 'water',
    nameKey: 'departmentWater',
    icon: Droplets,
    color: 'bg-sky-500',
    contactPhone: '+998 71 567 8901',
    contactEmail: 'water@cityportal.uz',
    address: 'ул. Водоканальная, 23, Ташкент',
    workingHours: '9:00 - 18:00',
    descriptionKey: 'waterDepartmentDescription',
    services: [
      {
        titleKey: 'waterConnection',
        descriptionKey: 'waterConnectionDescription'
      },
      {
        titleKey: 'waterBilling',
        descriptionKey: 'waterBillingDescription'
      },
      {
        titleKey: 'waterQuality',
        descriptionKey: 'waterQualityDescription'
      }
    ]
  },
  {
    id: 'education',
    nameKey: 'departmentEducation',
    icon: GraduationCap,
    color: 'bg-green-600',
    contactPhone: '+998 71 678 9012',
    contactEmail: 'education@cityportal.uz',
    address: 'ул. Науки, 34, Ташкент',
    workingHours: '9:00 - 18:00',
    descriptionKey: 'educationDepartmentDescription',
    services: [
      {
        titleKey: 'schoolEnrollment',
        descriptionKey: 'schoolEnrollmentDescription'
      },
      {
        titleKey: 'educationPrograms',
        descriptionKey: 'educationProgramsDescription'
      },
      {
        titleKey: 'studentServices',
        descriptionKey: 'studentServicesDescription'
      }
    ]
  },
  {
    id: 'health',
    nameKey: 'departmentHealth',
    icon: Stethoscope,
    color: 'bg-red-500',
    contactPhone: '+998 71 789 0123',
    contactEmail: 'health@cityportal.uz',
    address: 'ул. Медицинская, 67, Ташкент',
    workingHours: '24/7',
    descriptionKey: 'healthDepartmentDescription',
    services: [
      {
        titleKey: 'emergencyServices',
        descriptionKey: 'emergencyServicesDescription'
      },
      {
        titleKey: 'hospitalAdmission',
        descriptionKey: 'hospitalAdmissionDescription'
      },
      {
        titleKey: 'vaccinations',
        descriptionKey: 'vaccinationsDescription'
      }
    ]
  },
  // {
  //   id: 'transport',
  //   nameKey: 'departmentTransport',
  //   icon: Bus,
  //   color: 'bg-orange-500',
  //   contactPhone: '+998 71 890 1234',
  //   contactEmail: 'transport@cityportal.uz',
  //   address: 'ул. Транспортная, 89, Ташкент',
  //   workingHours: '9:00 - 18:00',
  //   descriptionKey: 'transportDepartmentDescription',
  //   services: [
  //     {
  //       titleKey: 'publicTransport',
  //       descriptionKey: 'publicTransportDescription'
  //     },
  //     {
  //       titleKey: 'roadMaintenance',
  //       descriptionKey: 'roadMaintenanceDescription'
  //     },
  //     {
  //       titleKey: 'trafficManagement',
  //       descriptionKey: 'trafficManagementDescription'
  //     }
  //   ]
  // }
];

export default departments;