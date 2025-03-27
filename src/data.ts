// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Testimonials',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'X',
    url: 'https://x.com/4Hetari',
  },
  {
    label: 'Telegram',
    url: 'https://t.me/e_1_e',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/hetari',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hetari/',
  },
];

const resourceLinks = [
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/community',
  },
];

const heroText =
  'A freelance backend developer, making good shit since 2023, hiding bad shit since 2023.';

const locationPlace = `37°46'39.0"N 122°25'09.0"W`;
const locationCountry = 'San Fancisco, California, USA';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
