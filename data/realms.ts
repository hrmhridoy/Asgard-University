export type Realm = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  programs: string[];
  icon: string;
};

export const realms: Realm[] = [
  {
    id: "valhalla",
    name: "Realm of Valhalla",
    tagline: "Leadership & Governance",
    description:
      "Forge leaders who command with wisdom and courage. Study policy, ethics, and the art of righteous rule.",
    programs: ["Public Leadership", "Strategic Governance", "Diplomatic Studies"],
    icon: "⚔",
  },
  {
    id: "vanaheim",
    name: "Realm of Vanaheim",
    tagline: "Arts & Humanities",
    description:
      "Celebrate the eternal stories of civilization through literature, philosophy, and the creative arts.",
    programs: ["Epic Literature", "Norse Philosophy", "Performing Arts"],
    icon: "📜",
  },
  {
    id: "alfheim",
    name: "Realm of Alfheim",
    tagline: "Sciences & Innovation",
    description:
      "Illuminate the cosmos through rigorous inquiry—from quantum realms to the stars above.",
    programs: ["Astrophysics", "Biomedical Sciences", "Materials Engineering"],
    icon: "✦",
  },
  {
    id: "nidavellir",
    name: "Realm of Nidavellir",
    tagline: "Engineering & Craft",
    description:
      "Master the forge of creation. Build structures, systems, and machines worthy of the golden halls.",
    programs: ["Civil Engineering", "Robotics", "Sustainable Design"],
    icon: "⚙",
  },
  {
    id: "jotunheim",
    name: "Realm of Jotunheim",
    tagline: "Earth & Environment",
    description:
      "Understand the giants of nature—climate, ecosystems, and the forces that shape our world.",
    programs: ["Environmental Science", "Geology", "Conservation Policy"],
    icon: "🌍",
  },
  {
    id: "midgard",
    name: "Realm of Midgard",
    tagline: "Global Studies & Commerce",
    description:
      "Bridge worlds through economics, international relations, and the commerce of mortals and beyond.",
    programs: ["International Business", "Global Affairs", "Entrepreneurship"],
    icon: "🌐",
  },
];
