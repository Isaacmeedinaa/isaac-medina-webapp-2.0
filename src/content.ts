export const profile = {
  name: 'Isaac Medina',
  email: 'isaac.medina0118@gmail.com',
  linkedin: 'https://www.linkedin.com/in/isaac-m1/',
  github: 'https://github.com/isaacmeedinaa',
  resume: '/isaac-medina-resume.pdf',
}

export type Project = {
  id: string
  number: string
  name: string
  company: string
  category: 'Enterprise' | 'Consumer'
  role: string
  description: string
  impact: string
  tags: string[]
  brief: string
  contributions: string[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    id: 'finra',
    number: '01',
    name: 'FINRA DR Portal',
    company: 'FINRA',
    category: 'Enterprise',
    role: 'Lead engineer · 0 → 1 mobile launch',
    description:
      'Taking a critical dispute resolution platform from the desktop to the palm of your hand.',
    impact: 'First mobile engineer. Full MVP ownership.',
    tags: ['React Native', 'TypeScript', '.NET APIs'],
    brief:
      'Bring FINRA’s dispute resolution experience to iOS and Android, with a technical foundation that could support the product and a growing mobile team.',
    contributions: [
      'Owned the mobile MVP from architecture and implementation through release management and production launch as the first and sole mobile engineer.',
      'Built 25+ reusable design system components and integrated 25+ REST endpoints with the .NET backend.',
      'Established state management, environment strategy, testing standards, API integration patterns, and release pipelines.',
      'Added production visibility with Firebase Analytics, Crashlytics, Cloud Messaging, and Dynatrace, then supported hiring and mentorship as the mobile practice grew.',
    ],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/finra-dr-portal/id6738960769' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.finra.drportal&hl=en_US',
      },
    ],
  },
  {
    id: 'vivid',
    number: '02',
    name: 'Vivid Seats',
    company: 'Vivid Seats',
    category: 'Consumer',
    role: 'Senior engineer · Mobile commerce',
    description:
      'Helping fans get closer to live experiences through a reliable, scalable ticketing app.',
    impact: 'Feature champion for two major initiatives.',
    tags: ['React Native', 'RTK Query', 'Storybook'],
    brief:
      'Evolve a production ticketing and mobile commerce experience while bringing native iOS and Android functionality into a shared React Native platform.',
    contributions: [
      'Championed two major initiatives, owning technical execution, cross-functional coordination, and delivery across the React Native application.',
      'Built reusable design system components with Storybook documentation to improve consistency and support faster delivery.',
      'Refactored legacy UI, optimized rendering, and investigated platform-specific production issues across iOS and Android.',
      'Implemented OAuth 2.0 with PKCE, added Firebase Analytics, wrote component and flow tests, and supported releases through Bitrise and the app stores.',
    ],
    links: [{ label: 'Explore the app', href: 'https://corporate.vividseats.com/app/' }],
  },
  {
    id: 'walmart',
    number: '03',
    name: 'MyWalmart',
    company: 'Walmart',
    category: 'Enterprise',
    role: 'Mobile engineer · Enterprise scale',
    description: 'Building the everyday tools that help Walmart associates get their work done.',
    impact: '200+ Appium test cases across iOS & Android.',
    tags: ['React Native', 'Redux', 'Appium'],
    brief:
      'Build and maintain associate and customer-facing mobile experiences across Walmart and Sam’s Club, working within a large, multi-team engineering environment.',
    contributions: [
      'Delivered production features, reusable components, hooks, selectors, and navigation flows using React Native and TypeScript.',
      'Contributed modular frontend patterns and shared package delivery to reduce duplication across application domains.',
      'Integrated Okta and OAuth 2.0 authentication, including login, token handling, and session management.',
      'Implemented 200+ Appium automation test cases across iOS and Android during my Walmart tenure, alongside unit tests, code reviews, and cross-functional delivery.',
    ],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/mywalmart/id1459898418' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.walmart.squiggly&hl=en_US',
      },
    ],
  },
]

export const experience = [
  {
    company: 'FINRA',
    period: 'May 2024 — Present',
    role: 'Lead Full Stack Engineer',
    summary: 'Built the mobile foundation. Helped grow the team.',
    details:
      'Led the first mobile launch for the dispute resolution platform, from the initial architecture to production. Established reusable components, API patterns, observability, and release standards, while contributing to hiring, mentorship, and internal AI engineering tools.',
    stack: ['React', 'React Native', 'TypeScript', '.NET'],
  },
  {
    company: 'Vivid Seats',
    period: 'Oct 2023 — May 2024',
    role: 'Senior Full-Stack Engineer',
    summary: 'Consumer experiences, built for production.',
    details:
      'Championed two major mobile initiatives and helped evolve the React Native platform. Delivered shared UI components, secure authentication, performance improvements, automated tests, and production releases alongside engineering, QA, and UX.',
    stack: ['React Native', 'React', 'Next.js', 'Node.js'],
  },
  {
    company: 'Walmart Global Tech',
    period: 'Feb 2018 — Oct 2023',
    role: 'Mobile App Engineer',
    summary: 'Enterprise complexity. Everyday usability.',
    details:
      'Built associate and customer-facing mobile experiences across Walmart and Sam’s Club. Contributed shared frontend architecture, authentication, reusable components, and 200+ Appium automation test cases across iOS and Android.',
    stack: ['React Native', 'TypeScript', 'Redux Saga', 'Appium'],
  },
]

export const capabilities = [
  {
    title: 'Mobile that feels right.',
    text: 'Thoughtful iOS and Android experiences, with shared foundations that make the next release easier.',
    tools: 'React Native / Expo / Swift / Kotlin',
    icon: 'mobile',
  },
  {
    title: 'Web experiences, built to last.',
    text: 'Responsive websites and web applications that feel intuitive to use and are built to grow, with thoughtful interfaces and reliable systems behind them.',
    tools: 'React / Next.js / Node.js / SQL & MongoDB',
    icon: 'layers',
  },
  {
    title: 'Confidence at launch.',
    text: 'Testing, observability, and release pipelines built into the process. Because shipping is only the beginning.',
    tools: 'Jest / Appium / CI/CD / Crashlytics',
    icon: 'shield',
  },
  {
    title: 'Ownership at every step.',
    text: 'Clear technical direction, close collaboration, and mentorship that help a team move forward together.',
    tools: 'Architecture / Technical leadership / UI & UX',
    icon: 'compass',
  },
]
