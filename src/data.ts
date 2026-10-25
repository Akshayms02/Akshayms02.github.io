export const profile = {
  name: 'Akshay M S',
  title: 'Junior Software Developer',
  tagline: 'MERN / Full-Stack',
  email: 'akshayms02@gmail.com',
  phone: '+91 9048727372',
  summary:
    'Full-stack developer who ships production apps across web and mobile. Previously at HOGR — food delivery, AI companions, and end-to-end analytics (GA4, GTM, Meta Pixel).',
  status: 'Open to full-stack roles',
  links: {
    github: 'https://github.com/Akshayms02',
    linkedin: 'https://www.linkedin.com/in/akshay-m-s-058498204/',
    email: 'mailto:akshayms02@gmail.com',
  },
}

export const experience = [
  {
    role: 'Junior Software Developer',
    company: 'HOGR',
    period: 'Nov 2025 – Oct 2026',
    points: [
      'Promoted from intern; owned features across live consumer apps on web and mobile',
      'Built food-delivery platform features with Node.js, React, PHP, and AWS',
      'Shipped AI companions for mental health, calorie tracking, and Butler workflows',
      'Owned product analytics: GA4, GTM, and Meta Pixel across every product',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'HOGR',
    period: 'Apr 2025 – Oct 2025',
    points: [
      'Maintained Node.js / Express services for a food-discovery platform',
      'Worked with MySQL and DynamoDB; integrated AWS S3 for media assets',
      'Designed REST APIs and kept production backends stable through reviews',
    ],
  },
]

export const projects = [
  {
    name: 'CureCue',
    kind: 'Learning project · Doctor booking',
    blurb:
      'Built while learning full-stack: appointment scheduling, JWT auth, real-time notifications, Redis caching, and AWS S3 — React, TypeScript, and Node.',
    href: 'https://github.com/Akshayms02/CureCue',
    image: '/project-curecue.svg',
    accent: 'teal',
  },
  {
    name: 'Harmony Hue',
    kind: 'Learning project · Fashion e-commerce',
    blurb:
      'Built while learning full-stack: product variants, cart and wishlist, Razorpay payments, and order flows on Node/Express with Handlebars.',
    href: 'https://github.com/Akshayms02/Harmony-hue',
    image: '/project-harmony.svg',
    accent: 'rose',
  },
]

export const skills = [
  {
    label: 'Languages & frameworks',
    items: 'JavaScript, TypeScript, Node.js, Express, React, Flutter, PHP',
  },
  {
    label: 'Data & cloud',
    items: 'MongoDB, PostgreSQL, MySQL, DynamoDB, AWS S3 / SSM / CloudWatch / EC2',
  },
  {
    label: 'Product tooling',
    items: 'GA4, GTM, Meta Pixel, Redis, WebSocket, Razorpay, Git',
  },
]
