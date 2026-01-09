export default function Interview() {
  return (
    <section>
      <span className="museum-label">Reflection & Perspective</span>
      <h1>Parent Interview</h1>

      <p>
        I interviewed one of my parents to gain insight into my cognitive,
        social, and moral development, as well as their parenting style.
      </p>

      <div className="event">
        <h3>Q: What was I like as a young child?</h3>
        <p>
          A: You were curious, observant, and eager to explore your surroundings.
        </p>
      </div>

      <div className="event">
        <h3>Q: How did I respond to challenges?</h3>
        <p>
          A: You showed persistence and learned from mistakes rather than giving
          up.
        </p>
      </div>

      <div className="event">
        <h3>Q: How would you describe your parenting style?</h3>
        <p>
          A: Supportive with clear expectations and encouragement for
          independence.
        </p>
      </div>

      <p className="italic mt-10">
        Thank you for taking the time to reflect on my growth and for supporting
        me throughout my life.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
        <a href="/media" className="tag">
          ← Previous Exhibit
        </a>
        <a href="/life-plan" className="tag">
          Next Exhibit →
        </a>
      </div>
    </section>
  );
}
