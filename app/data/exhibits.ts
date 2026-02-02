export type ExhibitEvent = {
  title: string;
  theory: string;
  description: string;
};

export type ExhibitPageData = {
  label: string;
  title: string;
  intro: string;
  events: ExhibitEvent[];
  prevHref: string;
  prevLabel: string;
  nextHref: string;
  nextLabel: string;
};

export const EARLY_CHILDHOOD_DATA: ExhibitPageData = {
  label: "Ages 0-6",
  title: "Early Childhood",
  intro:
    "My early childhood represents the foundation of my cognitive, social, and moral development.",
  events: [
    {
      title: "Learning to Read and Do Math",
      theory: "Piaget: Preoperational Stage (Symbolic Thinking & Intuition)",
      description:
        "I was taught English, Chinese, and math at a young age helped develop my curiosity and problem-solving skills. This demonstrates Piaget’s preoperational stage, where I used symbolic thinking to understand letters and numbers. At this time, it was very intuitive and not logical.",
    },
    {
      title: "Structured Parenting",
      theory: "Erikson: Autonomy vs. Shame & Doubt",
      description:
        "My family values learning and their constant encouragement helped me develop confidence and later independence to \"learn\" about other thigns. This experience reflects Erikson’s Autonomy vs. Shame and Doubt stage. My parents' support allowed me to make my own choices and not feel shamed or doubtful.",
    },
    {
      title: "Rules, Fairness, and Right vs. Wrong",
      theory: "Piaget: Preoperational Stage (Egocentrism) | Kohlberg: Preconventional Morality",
      description:
        "I was introduced to rules such as sharing, taking turns, and telling the truth. That shaped my  understanding of correct behavior. This alligned with Kohlberg’s preconventional morality because I followed rules to gain approval and to avoid punishment. However, I was also egocentric by focsing on how rules affected me.",
    }
  ],
  prevHref: "/",
  prevLabel: "Previous Exhibit",
  nextHref: "/elementary",
  nextLabel: "Next Exhibit",
};

export const ELEMENTARY_DATA: ExhibitPageData = {
  label: "Ages 7–13",
  title: "Elementary & Middle School Years",
  intro:
    "During my elementary and middle school years, I developed stronger logical thinking, academic confidence, and a clearer understanding of fairness. I transitioned into Piaget’s Concrete Operational stage, allowing me to think more logically about real-world situations and rules.",
  events: [
    {
      title: "Interest in Math and Logical Thinking",
      theory: "Piaget: Concrete Operational",
      description:
        "Solving math problems and recognizing patterns helped me develop logical reasoning and understand cause-and-effect relationships.",
    },
    {
      title: "Schoolwork",
      theory: "Piaget: Concrete Operational | Erikson: Industry vs. Inferiority",
      description:
        "Completing assignments and long-term projects helped me build confidence in my abilities and feel capable of success.",
    },
    {
      title: "Joining Clubs",
      theory: "Erikson: Industry vs. Inferiority",
      description:
        "Participating in clubs and group activities taught me teamwork, perseverance, and pride in my accomplishments.",
    },
    {
      title: "Learning Programming",
      theory: "Piaget: Concrete Operational",
      description:
        "Learning basic programming concepts introduced me to structured thinking and problem-solving using clear rules and logic.",
    },
    {
      title: "Understanding Rules and Fairness (More)",
      theory: "Kohlberg: Conventional Morality",
      description:
        "I began to value rules because they promoted fairness and order within my school and community, not just to avoid punishment.",
    },
  ],
  prevHref: "/early-childhood",
  prevLabel: "Previous Exhibit",
  nextHref: "/high-school",
  nextLabel: "Next Exhibit",
};

export const HIGH_SCHOOL_DATA: ExhibitPageData = {
  label: "Ages 14–18",
  title: "High School Years",
  intro:
    "High school has been a period of rapid growth, independence, and identity formation. I am navigating Erikson’s Identity vs. Role Confusion stage while developing a clearer sense of my values, goals, and responsibilities.",
  events: [
    {
      title: "Developing My Self-Concept",
      theory: "Erikson: Identity vs. Role Confusion",
      description:
        "Through academics, friendships, and leadership roles, I see myself as a motivated learner who values growth, curiosity, and impact.",
    },
    {
      title: "Learning more about Computer Science",
      theory: "Piaget: Formal Operational",
      description:
        "Advanced coursework and independent projects strengthened my ability to think abstractly, plan strategically, and solve complex problems.",
    },
    {
      title: "Directing Hack The Nest",
      theory: "Erikson: Identity vs. Role Confusion | Kohlberg: Conventional Morality",
      description:
        "Building and leading a large hackathon taught me responsibility, collaboration, and the importance of ethical leadership.",
    },
    {
      title: "Internship at Johns Hopkins Applied Physics Laboratory",
      theory: "Piaget: Formal Operational",
      description:
        "Working on real-world engineering and computer vision problems helped me evaluate tradeoffs and consider the societal impact of technology.",
    },
    {
      title: "Tutoring and Mentoring Other Students",
      theory: "Kohlberg: Conventional to Postconventional Morality",
      description:
        "Helping others learn shifted my focus toward responsibility, empathy, and contributing positively to my community.",
    },
    {
      title: "Co-Directing Howard County Hour of Code",
      theory: "Erikson: Identity vs. Role Confusion | Kohlberg: Postconventional Morality",
      description:
        "Expanding access to computer science education reinforced my belief in equity, service, and using technology to help others.",
    },
    {
      title: "Balancing Academics, Leadership, and Personal Growth",
      theory: "Erikson: Identity vs. Role Confusion",
      description:
        "Managing high expectations and multiple responsibilities helped me develop independence, resilience, and self-discipline.",
    },
  ],
  prevHref: "/elementary",
  prevLabel: "Previous Exhibit",
  nextHref: "/media",
  nextLabel: "Next Exhibit",
};
