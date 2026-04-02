import Calender from '@/components/svgs/Calender';
import { CertificateIcon } from '@phosphor-icons/react';

export const journeyItems = [
  {
    name: 'My Journey',
    description: 'Overview of my learning and career journey.',
    icon: Calender,
    href: '/journey',
  },
  // {
  //   name: 'Certificates & Achievements',
  //   description: 'A curated list of certificates and achievements.',
  //   icon: CertificateIcon,
  //   href: '/journey/certificates',
  // },
];

const journeyConfig = { journeyItems };

export default journeyConfig;