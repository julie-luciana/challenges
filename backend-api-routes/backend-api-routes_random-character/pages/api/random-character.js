// import via
import Chance from "chance";
// create a new instance with
const chance = new Chance();

// Handler Function
export default function handler(req, res) {
  // with a character object containing random information (like ex)
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geoHash: chance.geohash(),
  };
  // responds with a 200 status code
  res.status(200).json(character);
}
