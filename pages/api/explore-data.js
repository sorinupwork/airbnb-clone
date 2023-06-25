export default function handler(req, res) {
  res.status(200).json({
    img: "https://i.ibb.co/q5chfYT/london.jpg",
    location: "London",
    distance: "45-minute drive",
  });
}
