export default function Interview() {
  return (
    <section>
      <span className="museum-label">Reflection & Perspective</span>
      <h1>Parent Interview</h1>

      <p>
        I interviewed my Dad.
      </p>
      <img
        src="/dad.jpg"
        alt="A picture of my Dad"
        className="my-8 mx-auto max-h-96 object-contain">
      </img>

      <div className="event">
        <h3>What was I like as a young child?</h3>
        <p>
          You were very curious and energetic, but you did not listen to us. You didnt really follow the rules.
        </p>
      </div>

      <div className="event">
        <h3>Did my curiosity ever get me into trouble?</h3>
        <p>
          It got you into trouble too much. You sometimes broke things because you wanted to
          figure out how they worked. Sometimes your creativity also was dangerous. 
        </p>
      </div>

      <div className="event">
        <h3>How did I usually respond when I got in trouble?</h3>
        <p>
          You didnt really care about getting in trouble. You shrugged it off fast, and always got into toruble again.
        </p>
      </div>

      <div className="event">
        <h3>How would you describe my thinking and problem-solving skills?</h3>
        <p>
          You preferred learning by doing. You liked figuring things out on your own rather than being given
          answers.
        </p>
      </div>

      <div className="event">
        <h3>How did my social development change as I grew older?</h3>
        <p>
          You were independent and very stubborn when you were younger,
          but as you grew, you became more cooperative.
        </p>
      </div>

      <div className="event">
        <h3>How did my sense of right and wrong develop?</h3>
        <p>
          When you were younger, you only cared about yourself. As you grew older, you understood why rules existed
          and started considering how your actions affected others.
        </p>
      </div>

      <div className="event">
        <h3>When did you notice me becoming more responsible?</h3>
        <p>
          We noticed it when you began taking leadership roles and helping
          others.
        </p>
      </div>

      <div className="event">
        <h3>How would you describe your parenting style?</h3>
        <p>
          We set expectations for your learning. We encouraged your curiosity. We had a strict parenting style.
        </p>
      </div>

      <div className="event">
        <h3>
          How was your parenting style different from how your parents raised
          you?
        </h3>
        <p>
          My parents were less strict because I had self-control.
        </p>
      </div>

      <div className="event">
        <h3>What values did you most want to teach me?</h3>
        <p>
          Learning is the most important thing. Make sure you learn well.
        </p>
      </div>

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
