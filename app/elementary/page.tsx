import { ELEMENTARY_DATA } from "../data/exhibits";

export default function Elementary() {
  const { label, title, intro, events, prevHref, prevLabel, nextHref, nextLabel } =
    ELEMENTARY_DATA;

  return (
    <section>
      <span className="museum-label">{label}</span>
      <h1>{title}</h1>

      <p>{intro}</p>

      {events.map((event) => (
        <div key={event.title} className="event">
          <h3>{event.title}</h3>
          <p className="text-sm text-gray-500">{event.theory}</p>
          <p>{event.description}</p>
        </div>
      ))}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
        <a href={prevHref} className="tag">
          &larr; {prevLabel}
        </a>
        <a href={nextHref} className="tag">
          {nextLabel} &rarr;
        </a>
      </div>
    </section>
  );
}
