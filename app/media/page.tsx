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
            <div className="playlist-cover">
              <img src="/songs/sky.png" alt="A Sky Full of Stars cover" />
            </div>
            <div>
              <h3 className="playlist-title">A Sky Full of Stars</h3>
              <p className="playlist-meta">Childhood curiosity</p>
            </div>
          </div>
          <p className="playlist-reason">
            This song represents the sense of wonder and imagination that shaped
            how I explored the world during my early childhood.
          </p>
        </div>

        <div className="playlist-card">
          <div className="playlist-left">
            <div className="playlist-cover">
              <img src="/songs/fame.jpg" alt="Hall of Fame cover" />
            </div>
            <div>
              <h3 className="playlist-title">Hall of Fame</h3>
              <p className="playlist-meta">Motivation in school</p>
            </div>
          </div>
          <p className="playlist-reason">
            This song motivated me to work hard in school and believe that effort
            and persistence could lead to success.
          </p>
        </div>

        <div className="playlist-card">
          <div className="playlist-left">
            <div className="playlist-cover">
              <img src="/songs/sia.jpg" alt="Unstoppable cover" />
            </div>
            <div>
              <h3 className="playlist-title">Unstoppable</h3>
              <p className="playlist-meta">Identity & expression</p>
            </div>
          </div>
          <p className="playlist-reason">
            It captures my growing confidence and determination as I began
            forming my own identity and personal goals.
          </p>
        </div>

        <div className="playlist-card">
          <div className="playlist-left">
            <div className="playlist-cover">
              <img src="/songs/see.png" alt="See You Again cover" />
            </div>
            <div>
              <h3 className="playlist-title">See You Again</h3>
              <p className="playlist-meta">Friendships</p>
            </div>
          </div>
          <p className="playlist-reason">
            This song reminds me of the friendships that supported my growth and
            helped shape who I am today.
          </p>
        </div>

        <div className="playlist-card">
          <div className="playlist-left">
            <div className="playlist-cover">
              <img src="/songs/lose.jpg" alt="Lose Yourself cover" />
            </div>
            <div>
              <h3 className="playlist-title">Lose Yourself</h3>
              <p className="playlist-meta">Future goals</p>
            </div>
          </div>
          <p className="playlist-reason">
            It reflects my ambition, focus, and mindset as I prepare for future
            challenges and opportunities.
          </p>
        </div>
      </div>

      <div className="divider" />

      <h2>Social Media</h2>
      <p>
        I began using social media (TikTok, Insta) in my early teenage years, but I have been using social media such as YouTube since I was 5-6. It influecned how I talk (slang) and how I act. I followed what other people were learning in computer science. I used YouTube to both get entertainment and to learn new things.
      </p>
      <p>
        In the future, I plan to use social media for more learning and networking opportunities as I prepare for college and my career. (LinkedIn and YouTube)
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
        <a href="/high-school" className="tag">
          &larr; Previous Exhibit
        </a>
        <a href="/interview" className="tag">
          Next Exhibit &rarr;
        </a>
      </div>
    </section>
  );
}
