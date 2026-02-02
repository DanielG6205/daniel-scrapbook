export default function Home() {
  return (
    <section>
      <span className="museum-label">Growing Minds Scrapbook</span>

      <h1>The Museum of Me</h1>
      <h2>Daniel Gao</h2>

      <div className="cover-gallery">
        <div className="museum-frame cover-hero">
          <img src="/home/daniel.jpg" alt="Photo of me" />
          <p className="text-xs text-gray-500 mt-2">Exhibit A: Me</p>
        </div>

        <div className="cover-grid">
          <div className="museum-frame">
            <img src="/home/comp.webp" alt="Things that represent me" />
            <p className="text-xs text-gray-500 mt-2">
              Exhibit B: Computer
            </p>
          </div>

          <div className="museum-frame">
            <img src="/home/code.webp" alt="Another moment that represents me" />
            <p className="text-xs text-gray-500 mt-2">
              Exhibit C: Coding
            </p>
          </div>
        </div>
      </div>

      <div className="divider" />

      <a href="/early-childhood" className="tag mt-10 inline-block text-lg px-10">
        Start Exploring the Museum →
      </a>
    </section>
  );
}
