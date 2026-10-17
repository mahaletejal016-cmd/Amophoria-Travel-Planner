
import React, { useState } from "react";

const destinations = [
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
    description: "Beaches, sunsets and coastal adventures.",
    cost: 1800,
    places: [
      {
        name: "Baga Beach",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        cost: 0
      },
      {
        name: "Fort Aguada",
        image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc6c48?auto=format&fit=crop&w=800&q=80",
        cost: 50
      },
      {
        name: "Dudhsagar Falls",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
        cost: 100
      }
    ]
  },
  {
    name: "Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    description: "Mountains, valleys and peaceful views.",
    cost: 2200,
    places: [
      {
        name: "Solang Valley",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        cost: 0
      },
      {
        name: "Mountain Viewpoints",
        image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=800&q=80",
        cost: 0
      },
      {
        name: "Hadimba Temple",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        cost: 30
      }
    ]
  },
  {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    description: "Royal forts, palaces and colourful markets.",
    cost: 1700,
    places: [
      {
        name: "Hawa Mahal",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        cost: 50
      },
      {
        name: "Amber Fort",
        image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
        cost: 100
      },
      {
        name: "Jal Mahal",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
        cost: 0
      }
    ]
  },
  {
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    description: "Green landscapes, backwaters and nature.",
    cost: 2000,
    places: [
      {
        name: "Alleppey Backwaters",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
        cost: 500
      },
      {
        name: "Munnar Hills",
        image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=800&q=80",
        cost: 0
      },
      {
        name: "Kerala Waterfalls",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
        cost: 50
      }
    ]
  }
];

function App() {
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(null);

  function openDestination(place) {
    setSelected(place);
    setPage("details");
  }

  return (
    <div>
      <nav>
        <div className="logo" onClick={() => setPage("home")}>
          Amophoria<span>.</span>
          <small>Discover Places. Create Memories.</small>
        </div>

        <div className="navLinks">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("destinations")}>
            Destinations
          </button>
          <button onClick={() => setPage("plan")}>Plan Your Trip</button>
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
      </nav>

      {page === "home" && (
        <Home
          openDestination={openDestination}
          setPage={setPage}
        />
      )}

      {page === "destinations" && (
        <Destinations openDestination={openDestination} />
      )}

      {page === "details" && (
        <DestinationDetails
          place={selected}
          setPage={setPage}
        />
      )}

      {page === "plan" && <PlanTrip />}
      {page === "login" && <Login />}
      {page === "contact" && <Contact />}
    </div>
  );
}

function Home({ openDestination, setPage }) {
  return (
    <>
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">TRAVEL • EXPLORE • EXPERIENCE</p>
          <h1>Discover the world.<br />Collect memories.</h1>
          <p>
            Your next adventure begins here.
            Find beautiful destinations and plan your journey with Amophoria.
          </p>
          <button className="goldButton" onClick={() => setPage("plan")}>
            Plan Your Journey →
          </button>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">YOUR NEXT ESCAPE</p>
        <h2>Where will you go next?</h2>
        <p className="sectionText">
          Explore new places, discover local attractions and create
          unforgettable travel memories.
        </p>

        <div className="cards">
          {destinations.map((place) => (
            <DestinationCard
              key={place.name}
              place={place}
              openDestination={openDestination}
            />
          ))}
        </div>
      </section>

      <section className="quoteSection">
        <h2>Life is short. The world is wide.</h2>
        <p>Take the trip. Make the memories.</p>
        <button className="goldButton" onClick={() => setPage("plan")}>
          Start Planning
        </button>
      </section>
    </>
  );
}

function DestinationCard({ place, openDestination }) {
  return (
    <div className="destinationCard">
      <img src={place.image} alt={place.name} />

      <div className="cardContent">
        <h3>{place.name}</h3>
        <p>{place.description}</p>

        <button onClick={() => openDestination(place)}>
          Explore {place.name} →
        </button>
      </div>
    </div>
  );
}

function Destinations({ openDestination }) {
  return (
    <section className="section pageSection">
      <p className="eyebrow">EXPLORE INDIA</p>
      <h1>Find your happy place.</h1>
      <p className="sectionText">
        Choose a destination to discover its popular tourist attractions.
      </p>

      <div className="cards">
        {destinations.map((place) => (
          <DestinationCard
            key={place.name}
            place={place}
            openDestination={openDestination}
          />
        ))}
      </div>
    </section>
  );
}

function DestinationDetails({ place, setPage }) {
  if (!place) {
    return (
      <section className="section">
        <h2>Please select a destination.</h2>
        <button onClick={() => setPage("destinations")}>
          View Destinations
        </button>
      </section>
    );
  }

  return (
    <section className="section pageSection">
      <button className="backButton" onClick={() => setPage("destinations")}>
        ← All Destinations
      </button>

      <img className="detailHero" src={place.image} alt={place.name} />

      <p className="eyebrow">YOUR DESTINATION GUIDE</p>
      <h1>Explore {place.name}</h1>
      <p className="sectionText">{place.description}</p>

      <h2>Popular Tourist Places</h2>

      <div className="cards">
        {place.places.map((spot) => (
          <div className="destinationCard" key={spot.name}>
            <img src={spot.image} alt={spot.name} />
            <div className="cardContent">
              <h3>{spot.name}</h3>
              <p>
                Estimated entry cost:{" "}
                {spot.cost === 0 ? "Free" : "₹" + spot.cost + " per person"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="infoBox">
        <h3>Estimated daily trip expenses</h3>
        <p>From ₹{place.cost} per person per day.</p>
        <small>
          Approximate planning estimate. Hotel, transport and activity
          charges may vary.
        </small>
        <br />
        <button className="goldButton" onClick={() => setPage("plan")}>
          Plan a {place.name} Trip
        </button>
      </div>
    </section>
  );
}

function PlanTrip() {
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [days, setDays] = useState("");
  const [people, setPeople] = useState("1");
  const [result, setResult] = useState(null);

  function createPlan(event) {
    event.preventDefault();

    const selectedPlace = destinations.find((item) => item.name === place);
    const totalDays = Number(days);
    const totalPeople = Number(people);

    if (
      !selectedPlace ||
      !date ||
      totalDays < 1 ||
      totalPeople < 1
    ) {
      setResult({ error: "Please complete all fields correctly." });
      return;
    }

    const itinerary = [];

    for (let i = 0; i < totalDays; i++) {
      const spot = selectedPlace.places[i % selectedPlace.places.length];

      itinerary.push({
        day: i + 1,
        spot: spot.name,
        image: spot.image
      });
    }

    setResult({
      destination: selectedPlace,
      itinerary: itinerary,
      days: totalDays,
      people: totalPeople,
      perPerson: selectedPlace.cost * totalDays,
      groupTotal: selectedPlace.cost * totalDays * totalPeople
    });
  }

  return (
    <section className="section pageSection">
      <p className="eyebrow">YOUR ADVENTURE, YOUR WAY</p>
      <h1>Plan Your Trip</h1>
      <p className="sectionText">
        Tell us your travel details to create a day-wise sample itinerary.
      </p>

      <form className="formBox" onSubmit={createPlan}>
        <label>Choose destination</label>
        <select value={place} onChange={(e) => setPlace(e.target.value)} required>
          <option value="">Select destination</option>
          {destinations.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <label>Travel date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Number of days</label>
        <input
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Example: 5"
          required
        />

        <label>Number of travellers</label>
        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          required
        />

        <button className="goldButton" type="submit">
          Create My Itinerary
        </button>
      </form>

      {result && result.error && (
        <p className="error">{result.error}</p>
      )}

      {result && result.destination && (
        <div className="tripResult">
          <img
            className="detailHero"
            src={result.destination.image}
            alt={result.destination.name}
          />

          <p className="eyebrow">YOUR TRAVEL PLAN</p>
          <h2>{result.destination.name} Getaway</h2>
          <p>{result.days} days · {result.people} traveller(s)</p>

          <div className="itinerary">
            {result.itinerary.map((item) => (
              <div className="dayCard" key={item.day}>
                <img src={item.image} alt={item.spot} />
                <div>
                  <p className="eyebrow">DAY {item.day}</p>
                  <h3>{item.spot}</h3>
                  <p>Enjoy sightseeing and explore nearby places.</p>
                </div>
              </div>
            ))}
          </div>

          <div className="infoBox">
            <h3>Estimated trip cost</h3>
            <p>Per person per day: ₹{result.destination.cost}</p>
            <h2>₹{result.perPerson.toLocaleString("en-IN")} per person</h2>
            <p>
              Estimated total for {result.people} traveller(s):
              {" "}₹{result.groupTotal.toLocaleString("en-IN")}
            </p>
            <small>
              This is a sample estimate, not a booking quote.
              Actual hotel, transport, food and attraction prices may vary.
            </small>
          </div>
        </div>
      )}
    </section>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function login(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      setMessage(data.message);
    } catch {
      setMessage("Please start the backend server first.");
    }
  }

  return (
    <section className="section pageSection">
      <form className="formBox" onSubmit={login}>
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="goldButton" type="submit">Login</button>
        <p>{message}</p>
      </form>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  async function sendMessage(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();
      setResult(data.message);

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setResult("Please start the backend server first.");
    }
  }

  return (
    <section className="section pageSection">
      <form className="formBox" onSubmit={sendMessage}>
        <p className="eyebrow">LET'S CONNECT</p>
        <h1>Contact Us</h1>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className="goldButton" type="submit">Send Message</button>
        <p>{result}</p>
      </form>
    </section>
  );
}

export default App;
