export type Alumnus = {
  name: string;
  title: string;
  realm: string;
  quote: string;
};

export const hallOfLegends: Alumnus[] = [
  {
    name: "Dr. Freya Lindstrom",
    title: "Nobel Laureate in Physics",
    realm: "Alfheim",
    quote: "Asgard taught me that curiosity is the true Bifrost to discovery.",
  },
  {
    name: "Commander Erik Volund",
    title: "Director, United Nations Peacekeeping",
    realm: "Valhalla",
    quote: "Leadership here is forged in gold and tempered by wisdom.",
  },
  {
    name: "Aria Stormgard",
    title: "Founder, Aurora Clean Energy",
    realm: "Nidavellir",
    quote: "The forge of Nidavellir gave me the tools to reshape an industry.",
  },
  {
    name: "Professor Magnus Heimdall",
    title: "Historian & Bestselling Author",
    realm: "Vanaheim",
    quote: "Every saga begins with a single lesson in the halls of Vanaheim.",
  },
];
