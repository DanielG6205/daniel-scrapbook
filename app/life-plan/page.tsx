export default function LifePlan() {
  return (
    <section>
      <span className="museum-label">Looking Ahead</span>
      <h1>My Life in Ten Years</h1>

      <p>
        In ten years, I envision myself navigating Erikson’s stage of Intimacy
        vs. Isolation by finding friends while pursuing a
        job.
      </p>

      <div className="event">
        <h3>Career Goals</h3>
        <p className="text-sm text-gray-500">
          Erikson: Intimacy vs. Isolation
        </p>
        <p>
          I plan to pursue a career that allows me to learn while helping others.
        </p>
      </div>

      <div className="event">
        <h3>Personal Growth</h3>
        <p className="text-sm text-gray-500">
          Lifelong Learning & Identity Development
        </p>
        <p>
          I hope to continue learning and adapting as technology advances.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
        <a href="/interview" className="tag">
          ← Previous Exhibit
        </a>
        <a href="/" className="tag">
          Exit Exhibit →
        </a>
      </div>
    </section>
  );
}
