export default function Media() {
  return (
    <section>
      <span className="museum-label">Culture & Influence</span>
      <h1>Media Influence</h1>

      <h2>Playlist of My Life</h2>
      <p>
        Music has played an important role in different stages of my
        development, shaping my emotions, motivation, and identity.
      </p>

      <div className="playlist">
        <div className="playlist-card">
          <div className="playlist-left">
            <div className="playlist-cover">Cover</div>
            <div>
              <h3 className="playlist-title">Song 1</h3>
              <p className="playlist-meta">Childhood curiosity</p>
            </div>
          </div>
          <p className="playlist-reason">
            Represents the wonder and imagination that shaped my earliest
            memories.
          </p>
        </div>

        <div className="playlist-card">
          <div className="playlist-left">
            <div className="playlist-cover">Cover</div>
            <div>
              <h3 className="playlist-title">Song 2</h3>
              <p className="playlist-meta">Motivation in school</p>
            </div>
          </div>
          <p className="playlist-reason">
            Helped me stay focused and confident during challenging school
            years.
          </p>
        </div>

        <div className="playlist-card">
          <div className="playlist-left">
            <div className="playlist-cover">Cover</div>
            <div>
              <h3 className="playlist-title">Song 3</h3>
              <p className="playlist-meta">Identity & expression</p>
            </div>
          </div>
          <p className="playlist-reason">
            Captures the shift toward self-discovery and personal style.
          </p>
        </div>

        <div className="playlist-card">
          <div className="playlist-left">
            <div className="playlist-cover">Cover</div>
            <div>
              <h3 className="playlist-title">Song 4</h3>
              <p className="playlist-meta">Friendships</p>
            </div>
          </div>
          <p className="playlist-reason">
            Reminds me of the friends who shaped my growth and confidence.
          </p>
        </div>

        <div className="playlist-card">
          <div className="playlist-left">
            <div className="playlist-cover">Cover</div>
            <div>
              <h3 className="playlist-title">Song 5</h3>
              <p className="playlist-meta">Future goals</p>
            </div>
          </div>
          <p className="playlist-reason">
            Reflects the ambition and focus I carry into the next chapter.
          </p>
        </div>
      </div>

      <div className="divider" />

      <h2>Social Media</h2>
      <p>
        I began using social media in my early teenage years. It has influenced
        how I communicate, learn, and compare myself to others.
      </p>
      <p>
        In the future, I plan to use social media more intentionally — as a tool
        for learning, connection, and creativity rather than comparison.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
        <a href="/high-school" className="tag">
          ← Previous Exhibit
        </a>
        <a href="/interview" className="tag">
          Next Exhibit →
        </a>
      </div>
    </section>
  );
}
