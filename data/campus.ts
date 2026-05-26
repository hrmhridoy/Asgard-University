export const housingOptions = [
  {
    name: "Golden Hall Residences",
    description: "Premium suites with panoramic views of the Bifrost Gardens.",
    capacity: "400 students",
  },
  {
    name: "Einherjar Commons",
    description: "Traditional dormitory living with shared study halls and forge workshops.",
    capacity: "1,200 students",
  },
  {
    name: "Vanaheim Village",
    description: "Townhouse-style housing for upperclassmen and graduate scholars.",
    capacity: "600 students",
  },
] as const;

export const clubs = [
  "Aurora Astronomy Society",
  "Norse Debate League",
  "Bifrost Running Club",
  "Golden Forge Robotics",
  "Epic Film Guild",
  "Midgard Cultural Alliance",
  "Valhalla Mock Trial",
  "Sustainable Realms Coalition",
] as const;

export const events = [
  {
    name: "Frost Fair",
    date: "February 14–16",
    description: "Winter festival with ice sculptures, music, and realm competitions.",
  },
  {
    name: "Bifrost Symposium",
    date: "April 10",
    description: "Annual research showcase across all six academic realms.",
  },
  {
    name: "Ascension Ceremony",
    date: "May 24",
    description: "Commencement beneath the eternal golden arch.",
  },
  {
    name: "Aurora Welcome Week",
    date: "August 25–31",
    description: "Orientation for new mortals ascending to Asgard.",
  },
] as const;
