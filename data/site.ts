export const siteConfig = {
  name: "Asgard University",
  tagline: "Realm of Knowledge",
  description:
    "Where ambition meets the eternal halls of learning. Ascend beyond mortal limits at Asgard University.",
  url: "https://asgard-university.vercel.app",
  founded: 1847,
  email: "admissions@asgard.edu",
  phone: "+1 (555) BIFROST",
  address: "1 Rainbow Bridge Way, Asgard Heights, NY 10001",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/campus", label: "Campus Life" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { label: "Founded", value: "1847" },
  { label: "Students", value: "12,400+" },
  { label: "Realms", value: "6" },
  { label: "Acceptance Rate", value: "18%" },
] as const;
