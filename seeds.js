const mongoose = require("mongoose");
const Locations = require("./models/locations.js");

function seedDB() {
  // STATEN ISLAND LOCATIONS
  Locations.create({
    name: "Borough Hall",
    address: "Hyatt Street & Stuyvesant Place",
    borough: "Staten Island",
    zip: 10301,
    open: "Wednesdays: 7:30am–10am"
  });
  Locations.create({
    name: "St. George Greenmarket",
    address: "St. Marks Place & Hyatt Street",
    borough: "Staten Island",
    zip: 10301,
    open: "Saturdays: 8am–1pm"
  });
  Locations.create({
    name: "PS 9 Naples Street Elementary School",
    address: "1055 Targee Street",
    borough: "Staten Island",
    zip: 10304,
    open: "Tuesdays: 1:30pm–3:30pm; Seasonal, September–June"
  });
  Locations.create({
    name: "Staten Island Mall Greenmarket",
    address: "Marsh Avenue and Ring Road (Parking Lot)",
    borough: "Staten Island",
    zip: 10314,
    open: "Saturdays: 8am–1pm; Seasonal Market, June–December"
  });
  // QUEENS
  Locations.create({
    name: "Big Reuse Queens",
    address: "3-17 26th Avenue",
    borough: "Queens",
    zip: 11102,
    open: "Monday - Friday: 10am–6pm; Saturday - Sunday: 10am–5pm"
  });
  Locations.create({
    name: "Broadway N/Q",
    address: "32-15 31st Street",
    borough: "Queens",
    zip: 11106,
    open: "Tuesdays: 8am–11am"
  });
  Locations.create({
    name: "Forest Hills Greenmarket",
    address: "South side of Queens Boulevard & 70th Avenue",
    borough: "Queens",
    zip: 11375,
    open: "Mondays: 8am–2pm"
  });
  Locations.create({
    name: "Jackson Heights Greenmarket",
    address: "34th Avenue & 77th Street",
    borough: "Queens",
    zip: 11372,
    open: "Sundays: 8am–2pm"
  });
  Locations.create({
    name: "Jamaica-179th Street F",
    address: "SE Corner of Hillside Avenue & 179th Street",
    borough: "Queens",
    zip: 11432,
    open: "Thursdays: 7am–9am"
  });
  Locations.create({
    name: "Junkluggers",
    address: "33-56 11th Street",
    borough: "Queens",
    zip: 11106,
    open: "Mondays and Tuesdays: 10am–6pm"
  });
  Locations.create({
    name: "Queens Library at Broadway",
    address: "40-20 Broadway",
    borough: "Queens",
    zip: 11103,
    open: "Mondays: 1pm–7pm"
  });
  Locations.create({
    name: "Queens Library at Flushing",
    address: "41-17 Main Street",
    borough: "Queens",
    zip: 11355,
    open: "Saturdays: 8am–2pm"
  });
  Locations.create({
    name: "Sunnyside Greenmarket",
    address: "Skillman Avenue & 43rd Street",
    borough: "Queens",
    zip: 11104,
    open: "Saturdays: 8am–2pm"
  });
  // MANHATTAN LOCATIONS
  Locations.create({
    name: "1st Avenue & 1st Street",
    address: "1st Avenue between Houston & First Street (West Side)",
    borough: "Manhattan",
    zip: 10009,
    open: "Mondays, Wednesdays, Fridays: 8am–11am"
  });
  Locations.create({
    name: "23rd Street C/E",
    address: "West 23rd Street & 8th Avenue (SW corner)",
    borough: "Manhattan",
    zip: 10011,
    open: "Tuesdays, Thursdays: 8am–11am"
  });
  Locations.create({
    name: "79th Street Greenmarket",
    address: "Columbus Avenue & 79th Street",
    borough: "Manhattan",
    zip: 10024,
    open: "Sundays: 9am–1pm"
  });
  Locations.create({
    name: "97th Street Greenmarket",
    address: "97th Street between Columbus & Amsterdam Avenue",
    borough: "Manhattan",
    zip: 10025,
    open: "Fridays: 8am–2pm"
  });
  Locations.create({
    name: "116th Street",
    address: "116th & Lexington Ave - NW Corner",
    borough: "Manhattan",
    zip: 10029,
    open: "Wednesdays: 7:30am-10:30am"
  });
  Locations.create({
    name: "137th Street - City College",
    address: "Broadway & Hamilton Place - N (Montefiore Square)",
    borough: "Manhattan",
    zip: 10031,
    open: "Wednesdays 7:15am-11am"
  });
  Locations.create({
    name: "157th Street",
    address: "157th, Broadway, Riverside Drive (Ilka Tanya Payan Park)",
    borough: "Manhattan",
    zip: 10032,
    open: "Wednesdays 7am-11am"
  });
  Locations.create({
    name: "181st Street",
    address: "Fort Washington Ave btw. 183rd & 185th - W (Bennett Park Entrance)",
    borough: "Manhattan",
    zip: 10032,
    open: "Wednesdays 6:45am-11:15am"
  });
  Locations.create({
    name: "Bowling Green Greenmarket",
    address: "Broadway & Battery Place",
    borough: "Manhattan",
    zip: 10004,
    open: "Tuesdays: 8am–2pm"
  });
  Locations.create({
    name: "Columbia University Greenmarket",
    address: "Broadway & West 114th Street",
    borough: "Manhattan",
    zip: 10025,
    open: "Sundays: 8am–1pm; Thursdays: 8am–3pm"
  });
  Locations.create({
    name: "Dag Hammarskjold Plaza Greenmarket",
    address: "East 47th Street & 2nd Avenue",
    borough: "Manhattan",
    zip: 10017,
    open: "Wednesdays: 8am–3pm"
  });
  Locations.create({
    name: "East Broadway & Rutgers Street",
    address: "East Broadway & Rutgers Street (SE corner)",
    borough: "Manhattan",
    zip: 10002,
    open: "Wednesdays: 8am–11am"
  });
  Locations.create({
    name: "Inwood Greenmarket",
    address: "Isham Street & Cooper Street",
    borough: "Manhattan",
    zip: 10034,
    open: "Saturdays: 8am–12pm"
  });
  Locations.create({
    name: "Roosevelt Island under the Helix",
    address: "Main Street under the Helix",
    borough: "Manhattan",
    zip: 10044,
    open: "Saturdays: 9am-2:30pm"
  });
  Locations.create({
    name: "Tompkins Square Greenmarket",
    address: "East 7th Street & Avenue A",
    borough: "Manhattan",
    zip: 10009,
    open: "Sundays: 8am–1pm"
  });
  // BRONX LOCATIONS
  Locations.create({
    name: "3rd Ave - 149th St",
    address: "149th St, Melrose, & 3rd Ave - N Corner",
    borough: "Bronx",
    zip: 10455,
    open: "Fridays: 7am-10:15am"
  });
  Locations.create({
    name: "149th St - Grand Concourse",
    address: "Grand Concourse, 149th Street - SE Corner",
    borough: "Bronx",
    zip: 10451,
    open: "Fridays: 7:15am-10:15am"
  });
  Locations.create({
    name: "161st Street - Yankee Stadium",
    address: "161st, River Ave - NE Corner",
    borough: "Bronx",
    zip: 10452,
    open: "Fridays: 7:30am-10:15am"
  });
  Locations.create({
    name: "Bainbridge Avenue Community Garden",
    address: "2980 Bainbridge Avenue",
    borough: "Bronx",
    zip: 10458,
    open: "Thursdays: 4pm–7pm; Seasonal, June–November"
  });
  Locations.create({
    name: "Bronx Borough Hall Greenmarket",
    address: "Grand Concourse & 161st Street",
    borough: "Bronx",
    zip: 10451,
    open: "Tuesdays: 8am–2pm; Seasonal Market, June–November"
  });
  Locations.create({
    name: "Fordham Plaza",
    address: "E Fordham Rd btw Webster Ave & Third Ave - S",
    borough: "Bronx",
    zip: 10458,
    open: "Fridays: 7am-11am"
  });
  Locations.create({
    name: "West Farms Sq - E Tremont Ave",
    address: "E Tremont Ave & Boston Road - NE Corner",
    borough: "Bronx",
    zip: 10460,
    open: "Fridays: 6:30am-9:30am"
  });
  Locations.create({
    name: "Burnside Ave",
    address: "Burnside Ave, Jerome Ave - SW Corner",
    borough: "Bronx",
    zip: 10453,
    open: "Fridays: 7:30am-10:30am"
  });
  Locations.create({
    name: "Hunts Point Ave",
    address: "163rd, Hunts Point Ave, Southern Blvd (Monsignor Del Valle Square) - W",
    borough: "Bronx",
    zip: 10459,
    open: "Fridays: 6:30am-9:45am"
  });
  Locations.create({
    name: "Lehman College",
    address: "Lehman Quad near Shuster Hall",
    borough: "Bronx",
    zip: 10468,
    open: "Mondays: 8am–10am"
  });

  // BROOKLYN LOCATIONS
  Locations.create({
    name: "7th Avenue B/Q",
    address: "Park Place & Carlton Avenue",
    borough: "Brooklyn",
    zip: 11217,
    open: "Wednesdays: 8am–10am"
  });
  Locations.create({
    name: "Big Reuse Brooklyn",
    address: "69 9th Street, Gowanus",
    borough: "Brooklyn",
    zip: 11215,
    open: "Thursdays, Fridays: 10am–6pm"
  });
  Locations.create({
    name: "Carroll Gardens Greenmarket",
    address: "Carroll Street between Smith Street & Court Street",
    borough: "Brooklyn",
    zip: 11231,
    open: "Sundays: 8am–1pm"
  });
  Locations.create({
    name: "Cortelyou Greenmarket",
    address: "Cortelyou Road & Rugby Road",
    borough: "Brooklyn",
    zip: 11226,
    open: "Sundays: 8am–1pm"
  });
  Locations.create({
    name: "Fort Greene Greenmarket",
    address: "Washington Park & DeKalb Avenue",
    borough: "Brooklyn",
    zip: 11201,
    open: "Saturdays: 8am–3pm"
  });
  Locations.create({
    name: "Franklin Avenue 2/3/4/5",
    address: "Franklin Avenue & Eastern Parkway",
    borough: "Brooklyn",
    zip: 11238,
    open: "Wednesdays: 8am–10am"
  });
  Locations.create({
    name: "Grand Army Plaza Greenmarket",
    address: "Prospect Park West & Plaza Street West",
    borough: "Brooklyn",
    zip: 11215,
    open: "Saturdays: 8am–3:30pm"
  });
  Locations.create({
    name: "Irving Square Park",
    address: "Corner of Halsey Street & Knickerbocker Ave",
    borough: "Brooklyn",
    zip: 11207,
    open: "Mondays: 8am–11am"
  });
  Locations.create({
    name: "McGolrick Park’s Down to Earth Farmers Market",
    address: "Center of McGolrick Park, near Shelter Pavilion",
    borough: "Brooklyn",
    zip: 11211,
    open: "Sundays: 12pm- 3pm"
  });
  Locations.create({
    name: "Red Hook Community Farm",
    address: "Otsego Street & Beard Street",
    borough: "Brooklyn",
    zip: 11231,
    open: "Fridays: 9am–12pm; Saturdays: 10:30am–1pm"
  });
};

module.exports = seedDB;
