
const BookingForm = () => {
  return (
    <section className="panel" id="booking-form">

      <h2 className="heading">
        Book a Photography Session
      </h2>

      <form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">

          <input
            type="text"
            placeholder="Full name"
            className="field"
            required
          />

          <input
            type="email"
            placeholder="Email address"
            className="field"
            required
          />

          <input
            type="tel"
            placeholder="Phone number"
            className="field"
            required
          />

          <select className="field" required>
            <option value="">Photography Type</option>
            <option>Wedding</option>
            <option>Portrait</option>
            <option>Event</option>
            <option>Fashion</option>
            <option>Product</option>
          </select>

          <div>
            <label>Booking Date</label>
            <input type="date" className="field" required />
          </div>

          <div>
            <label>Booking Time</label>
            <input type="time" className="field" required />
          </div>

        </div>

        <input
          type="text"
          placeholder="Shoot location"
          className="field"
          required
        />

        <textarea
          placeholder="Additional requirements"
          className="field"
        />

        <button type="submit" className="btn">
          Book Session
        </button>

        <button type="reset" className="ml-4 text-neutral-400">
          Clear
        </button>

      </form>

    </section>
  )
}

export default BookingForm