import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.floridareagency.com'),
  title: 'Florida Real Estate Agency | Real Estate Consultant & Premier Brokerage',
  description: 'Premier residential real estate consultancy, builder representation, and elite agent partnership across Tampa Bay, Miami, Palm Beaches, Sarasota, Naples, Orlando, and Jacksonville.',
  keywords: ['Florida Real Estate Agency', 'Tampa real estate', 'Miami luxury homes', 'Naples waterfront', 'Florida real estate brokerage', 'Robert Freyre', 'Christopher Freyre'],
  authors: [{ name: 'Florida Real Estate Agency' }],
  icons: {
    icon: '/assets/logo/frea-primary-logo.png',
    shortcut: '/assets/logo/frea-primary-logo.png',
    apple: '/assets/logo/frea-primary-logo.png',
  },
  openGraph: {
    title: 'Florida Real Estate Agency | Exceptional Florida Living',
    description: 'Bespoke real estate advisory and curated properties throughout Florida’s most iconic communities.',
    url: 'https://www.floridareagency.com/',
    siteName: 'Florida Real Estate Agency',
    images: [
      {
        url: '/assets/logo/frea-primary-logo.png',
        width: 800,
        height: 600,
        alt: 'Florida Real Estate Agency Official Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Real Estate Agency',
    description: 'Premier residential real estate consultancy across Florida.',
    images: ['/assets/logo/frea-primary-logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo/frea-primary-logo.png" />
      </head>
      <body className="font-sans bg-ivory-100 text-charcoal-900 selection:bg-coastal-800 selection:text-ivory-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
