import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "eZcon Advisory Limited | Global Business Solutions & Strategic Consulting",
    template: "%s | eZcon Advisory Limited"
  },
  description: "eZcon Advisory Limited - A global business solutions provider with a worldwide network spanning multiple continents. Since 2012, we've been delivering innovative services including business intelligence, corporate investigations, and strategic consulting to international clients.",
  
  // Keywords for SEO
  keywords: [
    "business consulting",
    "strategic consulting", 
    "business intelligence",
    "corporate investigations",
    "global business solutions",
    "international consulting",
    "business advisory services",
    "corporate strategy",
    "business analysis",
    "management consulting",
    "eZcon Advisory"
  ],
  
  // Author and publisher info
  authors: [{ name: "eZcon Advisory Limited" }],
  publisher: "eZcon Advisory Limited",
  creator: "eZcon Advisory Limited",
  
  // Robots and indexing
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
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    siteName: 'eZcon Advisory Limited',
    title: 'eZcon Advisory Limited | Global Business Solutions & Strategic Consulting',
    description: 'Leading global business solutions provider delivering innovative consulting services, business intelligence, and strategic advisory since 2012. Trusted by international clients worldwide.',
    url: 'https://ezconadvisory.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'eZcon Advisory Limited - Global Business Solutions',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'eZcon Advisory Limited Logo',
        type: 'image/jpeg',
      }
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@ezconadvisory',
    creator: '@ezconadvisory',
    title: 'eZcon Advisory Limited | Global Business Solutions & Strategic Consulting',
    description: 'Leading global business solutions provider delivering innovative consulting services, business intelligence, and strategic advisory since 2012.',
    images: ['/images/twitter-card.jpg'],
  },
  
  // Additional metadata
  category: 'Business Consulting',
  classification: 'Business Services',
  
  // Verification tags (replace with actual verification codes)
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      bing: ['your-bing-verification-code'],
    },
  },
  
  // Alternate languages/regions
  alternates: {
    canonical: 'https://ezconadvisory.com',
    languages: {
      'en-US': 'https://ezconadvisory.com/en-us',
      'en-GB': 'https://ezconadvisory.com/en-gb',
      'en-CA': 'https://ezconadvisory.com/en-ca',
      'en-AU': 'https://ezconadvisory.com/en-au',
    },
  },
  
  // App-specific metadata
  applicationName: 'eZcon Advisory Limited',
  referrer: 'origin-when-cross-origin',
  
  // Additional structured data hints
  other: {
    'business:contact_data:street_address': 'Your Business Address',
    'business:contact_data:locality': 'City',
    'business:contact_data:region': 'State/Province',
    'business:contact_data:postal_code': 'Postal Code',
    'business:contact_data:country_name': 'Country',
    'business:contact_data:email': 'contact@ezconadvisory.com',
    'business:contact_data:phone_number': '+1-XXX-XXX-XXXX',
    'business:contact_data:website': 'https://ezconadvisory.com',
  },
  
  // Manifest for PWA (if applicable)
  manifest: '/manifest.json',
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  
  // Theme colors
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  
  // Viewport (usually handled globally)
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Archives and bookmarks
  archives: ['https://ezconadvisory.com/archive'],
  bookmarks: ['https://ezconadvisory.com/bookmarks'],
  
  // Additional meta tags for enhanced SEO
  metadataBase: new URL('https://ezconadvisory.com'),
  
  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

// Optional: Export additional metadata for specific pages
export const generatePageMetadata = (
  title: string, 
  description?: string, 
  path?: string
): Metadata => {
  return {
    ...metadata,
    title: `${title} | eZcon Advisory Limited`,
    description: description || metadata.description,
    openGraph: {
      ...metadata.openGraph,
      title: `${title} | eZcon Advisory Limited`,
      description: description || metadata.description as string,
      url: path ? `https://ezconadvisory.com${path}` : metadata.openGraph?.url,
    },
    twitter: {
      ...metadata.twitter,
      title: `${title} | eZcon Advisory Limited`,
      description: description || metadata.description as string,
    },
    alternates: {
      ...metadata.alternates,
      canonical: path ? `https://ezconadvisory.com${path}` : metadata.alternates?.canonical,
    },
  }
}