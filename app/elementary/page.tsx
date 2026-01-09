export default function Elementary() {
  return (
    <section>
      <span className="museum-label">Ages 7–13</span>
      <h1>Elementary & Middle School Years</h1>

      <p>
        During my elementary and middle school years, I developed important
        academic skills, social confidence, and a stronger sense of morality.
        I transitioned into Piaget’s Concrete Operational stage, allowing me to
        think more logically and understand cause and effect.
      </p>

      <div className="event">
        <h3>Learning Responsibility Through Schoolwork</h3>
        <p className="text-sm text-gray-500">
          Piaget: Concrete Operational • Erikson: Industry vs. Inferiority
        </p>
        <p>
          Completing assignments and projects helped me build confidence in my
          abilities and feel capable of success.
        </p>
      </div>

      <div className="event">
        <h3>Joining Clubs and Activities</h3>
        <p className="text-sm text-gray-500">
          Erikson: Industry vs. Inferiority
        </p>
        <p>
          Being part of group activities taught me teamwork, perseverance, and
          pride in my accomplishments.
        </p>
      </div>

      <div className="event">
        <h3>Understanding Rules and Fairness</h3>
        <p className="text-sm text-gray-500">
          Kohlberg: Conventional Morality
        </p>
        <p>
          I began to value rules because they helped maintain fairness and order
          within my school and community.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
        <a href="/early-childhood" className="tag">
          ← Previous Exhibit
        </a>
        <a href="/high-school" className="tag">
          Next Exhibit →
        </a>
      </div>
    </section>
  );
}
