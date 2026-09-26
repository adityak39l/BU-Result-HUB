import JobsExplorer from '@/components/JobsExplorer';

export const metadata = {
  title: 'Off-Campus Jobs & Internships for B.Tech Students',
  description: 'Branch-wise list of top companies hiring B.Tech graduates — CSE, ECE, EIE, ME, BME, BTE & FT. Official career links for off-campus jobs and internships, curated for BU Jhansi IET students.',
  alternates: {
    canonical: 'https://bu-btech-resulthub.vercel.app/jobs/',
  },
  openGraph: {
    title: 'Off-Campus Jobs & Internships | BU IET ResultHub',
    description: 'Branch-wise company career links for BU Jhansi IET B.Tech students — CSE, ECE, EIE, ME, BME, BTE & FT.',
    url: 'https://bu-btech-resulthub.vercel.app/jobs/',
    siteName: 'BU IET ResultHub',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://bu-btech-resulthub.vercel.app/icon.png', width: 512, height: 512, alt: 'BU IET ResultHub Logo' }],
  },
};

export default function JobsPage() {
  return <JobsExplorer />;
}
