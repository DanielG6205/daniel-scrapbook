export default function EarlyChildhood() {
  return (
    <section>
      <span className="museum-label">Ages 0–6</span>
      <h1>Early Childhood</h1>

      <p>
        My early childhood represents the foundation of my cognitive, social,
        and moral development.
      </p>

      <div className="event">
        <h3>Learning to Speak</h3>
        <p className="text-sm text-gray-500">
          Piaget: Preoperational • Erikson: Autonomy vs. Shame
        </p>
        <p>
          Learning language allowed me to express myself and build independence.
        </p>
      </div>

      <div className="event">
        <h3>Understanding Right and Wrong</h3>
        <p className="text-sm text-gray-500">
          Kohlberg: Preconventional Morality
        </p>
        <p>
          I learned moral behavior through consequences and reinforcement.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
        <a href="/" className="tag">
          ← Previous Exhibit
        </a>
        <a href="/elementary" className="tag">
          Next Exhibit →
        </a>
      </div>
    </section>
  );
}
