export const profile = {
  name: 'Akshay M S',
  title: 'Full-Stack Developer',
  tagline: 'MERN · Web & Mobile',
  email: 'akshayms02@gmail.com',
  phone: '+91 9048727372',
  summary:
    'Full-stack developer who ships production apps across web and mobile. Previously at HOGR — food delivery, AI companions, and end-to-end analytics (GA4, GTM, Meta Pixel).',
  status: 'Open to full-stack roles',
  location: 'India · Remote-friendly',
  links: {
    github: 'https://github.com/Akshayms02',
    linkedin: 'https://www.linkedin.com/in/akshay-m-s-058498204/',
    email: 'mailto:akshayms02@gmail.com',
  },
}

export const tags = ['Full-Stack', 'MERN', 'APIs', 'Analytics', 'Flutter']

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
    kind: 'Learning project',
    category: 'Full-Stack',
    blurb:
      'Built while learning software development — appointment booking with JWT auth, real-time notifications, Redis, and AWS S3.',
    href: 'https://github.com/Akshayms02/CureCue',
    image: '/project-curecue.svg',
  },
  {
    name: 'Harmony Hue',
    kind: 'Learning project',
    category: 'E-commerce',
    blurb:
      'Built while learning software development — fashion store with variants, cart, wishlist, Razorpay, and order flows.',
    href: 'https://github.com/Akshayms02/Harmony-hue',
    image: '/project-harmony.svg',
  },
]

export const solutions = [
  {
    num: '01',
    title: 'Full-stack web apps',
    body: 'React + Node products from API design to polished UI.',
  },
  {
    num: '02',
    title: 'Backend & data',
    body: 'Express services, SQL/NoSQL access, and reliable REST integrations.',
  },
  {
    num: '03',
    title: 'Product analytics',
    body: 'GA4, GTM, and Meta Pixel instrumentation for events and conversions.',
  },
  {
    num: '04',
    title: 'Mobile with Flutter',
    body: 'Client work alongside web stacks when the product needs mobile.',
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
