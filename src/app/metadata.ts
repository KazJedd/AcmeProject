import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    default: 'Acme Solutions - Innovative Business Solutions',
    template: '%s | Acme Solutions',
  },
  description: 'Professional business solutions and services for modern enterprises. Transform your business with our innovative technology solutions.',
  keywords: [
    'business solutions',
    'digital transformation',
    'consulting',
    'technology services',
    'software development',
    'data analytics',
  ],
  authors: [{ name: 'Acme Solutions' }],
  creator: 'Acme Solutions',
  publisher: 'Acme Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://acmesolutions.com',
    siteName: 'Acme Solutions',
    title: 'Acme Solutions - Innovative Business Solutions',
    description: 'Professional business solutions and services for modern enterprises',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Acme Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acme Solutions - Innovative Business Solutions',
    description: 'Professional business solutions and services for modern enterprises',
    creator: '@acmesolutions',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export const getMetadata = (
  title?: string,
  description?: string,
  path?: string
): Metadata => {
  return {
    ...defaultMetadata,
    ...(title && { title }),
    ...(description && { description }),
    ...(path && {
      openGraph: {
        ...defaultMetadata.openGraph,
        url: `https://acmesolutions.com${path}`,
      },
    }),
  };
};

export default defaultMetadata; 