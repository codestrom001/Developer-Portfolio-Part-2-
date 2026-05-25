import { useState } from "react";

function Feedback() {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Ali",
      rating: 5,
      comment: "Amazing portfolio!"
    },
    {
      name: "Sara",
      rating: 4,
      comment: "Clean and professional design"
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    rating: "",
    comment: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function addFeedback(e) {
    e.preventDefault();

    if (!form.name || !form.rating || !form.comment) return;

    const newFeedback = {
      ...form,
      rating: Number(form.rating)
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setForm({ name: "", rating: "", comment: "" });
  }

  return (
    <section className="feedback" id="feedback">
      <h2>Feedback Wall</h2>

      {/* FORM */}
      <form onSubmit={addFeedback} className="feedback-form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="rating"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={handleChange}
        />

        <textarea
          name="comment"
          placeholder="Comment"
          value={form.comment}
          onChange={handleChange}
        />

        <button type="submit">Add Feedback</button>
      </form>

      {/* LIST */}
      <div className="feedback-list">
        {feedbacks.map((item, index) => (
          <div key={index} className="feedback-card">

            {item.rating === 5 && (
              <span className="star">🌟 Featured</span>
            )}

            <h3>{item.name}</h3>
            <p>Rating: {"⭐".repeat(item.rating)}</p>
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;