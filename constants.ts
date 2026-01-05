
import { GalleryItem, Service } from './types';

// Centralized constants for the application
export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: '1',
        title: 'The White Suit',
        location: 'Dubai Marina',
        specs: 'ISO 100 • f/1.8 • 1/200s',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqW7OYXT_LQpyO6G4-eLTqgaEsMwDCzwGchuRLvBqmsb_b2U_alXnzYiUvDnYxsDnA_dyc14Ih1cUzN5kPxe5T8GTulcx78iHqNFtlAYvF0AE3q2C_ZwyAzlEl_bJW8SyfworGzXU3chyx47H7_b8R8ng6L4XetzDJbE3-i7Kse04IB9b2rtuxfnGCjyKm-ALW524PKh2tVpUNl0g5Ce1eD91EyQLk0pgoWeiSaUIcM4Sgwv62zUMxF4Xsfh-BwRdCKfe5xNSgYly-',
        category: 'The Drive',
        aspectRatio: 'portrait'
    },
    {
        id: '2',
        title: 'Poolside Luxury',
        location: 'Palm Jumeirah',
        specs: 'ISO 50 • f/4.0 • 1/1200s',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTFJrMBxWDCYZiH3DYCOj-O0DwIDqaE5jAX8k8XPPDeoG2lKmLAAB3AFsf5Cs2-7WIL0Nucm0sO0hQJ6ECIepUmHkXyoEZYt1WlW1VCrfoSurCUYpX1OKd6_RQ4gQncugHXQvsv_r7Y_NEmlxxQsnNFx-r2d-t1ZHGjKrsbSOrcN-ovTHaLPMtmtAEOA6Uqq-JRdA9tRj0jooeSbuh3pVPeUndyfJpmByWpqilfuuIwwtPlfgdEaL3kRcoKYjT-TY0KNcYnGnpjtKP',
        category: 'The Drive',
        aspectRatio: 'video'
    },
    {
        id: '3',
        title: 'Porsche Neon Night',
        location: 'Downtown Dubai',
        specs: 'ISO 800 • f/1.4 • 1/60s',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9haZPBcAapOp7jf-8XH7-3ZGtmE_kuh2twwR7PnScL6OXZt5KTXskEmRint8E7g-6CKJC8scOD1Wy7evljwtA2OHGyMnaQdBub7lydwh27IBHrFNRGBGhIRgE1TQwBhbZmpnNiTP1LWZ1DYTn4N7D7lOEOIFUSKH4Y-DHrKzlRZJYwI0KkdsXX3hKD6orb6xH6GzM7Hyz91krreiW7P0bC3AMW0fT6IhmZQsnSn52eUEq9jfhOzQiPwzKiL-x9iZJgrnvHxSpk-yD',
        category: 'The Drive',
        aspectRatio: 'portrait'
    }
];

export const SERVICES: Service[] = [
    { id: '1', number: '01', title: 'Personal Branding', subtitle: 'Defining your digital signature.', icon: 'camera', description: 'Capture the essence of your professional identity.' },
    { id: '2', number: '02', title: 'Automotive Art', subtitle: 'Machine and motion in harmony.', icon: 'directions_car', description: 'Showcase the curves and power of your machine.' },
    { id: '3', number: '03', title: 'Social Legacy', subtitle: 'Moments that echo forever.', icon: 'wine_bar', description: 'Immortalize your most exclusive gatherings.' }
];
