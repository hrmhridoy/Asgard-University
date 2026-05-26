export const admissionTimeline = [
  {
    period: "Early Decision",
    deadline: "November 1",
    decision: "Mid-December",
  },
  {
    period: "Regular Decision",
    deadline: "January 15",
    decision: "Late March",
  },
  {
    period: "Transfer Applications",
    deadline: "March 1",
    decision: "May 1",
  },
] as const;

export const tuitionFaq = [
  {
    question: "What is the annual tuition?",
    answer:
      "Tuition for the 2025–2026 academic year is $58,400. Asgard University is committed to meeting 100% of demonstrated financial need for admitted students.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes. The Einherjar Merit Scholarship, Bifrost Bridge Grant, and Realm-specific fellowships award over $40 million annually to deserving scholars.",
  },
  {
    question: "What are the application requirements?",
    answer:
      "Submit the Common Application or Coalition Application, official transcripts, two letters of recommendation, a personal essay, and optional standardized test scores.",
  },
  {
    question: "Can international students apply?",
    answer:
      "Absolutely. Our Midgard Exchange Program welcomes scholars from over 80 nations. English proficiency (TOEFL/IELTS) is required for non-native speakers.",
  },
] as const;

export const requirements = [
  "High school diploma or equivalent",
  "Minimum GPA of 3.5 (weighted)",
  "Personal essay (650 words max)",
  "Two letters of recommendation",
  "Extracurricular portfolio (optional but encouraged)",
] as const;
