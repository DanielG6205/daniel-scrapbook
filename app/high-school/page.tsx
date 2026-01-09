export default function HighSchool() {
  return (
    <section>
      <span className="museum-label">Ages 14–18</span>
      <h1>High School Years</h1>

      <p>
        High school has been a period of self-discovery, independence, and
        identity formation. I am currently navigating Erikson’s stage of
        Identity vs. Role Confusion while developing a clearer sense of who I am.
      </p>

      <div className="event">
        <h3>Developing My Self-Concept</h3>
        <p className="text-sm text-gray-500">
          Erikson: Identity vs. Role Confusion
        </p>
        <p>
          Through academics, friendships, and activities, I see myself as a
          motivated learner who values growth and curiosity.
        </p>
      </div>

      <div className="event">
        <h3>Making Independent Decisions</h3>
        <p className="text-sm text-gray-500">
          Kohlberg: Postconventional Morality
        </p>
        <p>
          I now consider ethical principles and personal values when making
          decisions rather than relying solely on rules or approval.
        </p>
      </div>

      <div className="event">
        <h3>Balancing Responsibilities</h3>
        <p className="text-sm text-gray-500">
          Erikson: Identity vs. Role Confusion
        </p>
        <p>
          Managing school, activities, and relationships has helped me develop
          independence and self-discipline.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
        <a href="/elementary" className="tag">
          ← Previous Exhibit
        </a>
        <a href="/media" className="tag">
          Next Exhibit →
        </a>
      </div>
    </section>
  );
}
