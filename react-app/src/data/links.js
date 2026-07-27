// Union County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-27

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Union County Auditor Property Search (Beacon)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Union County, Ohio", category: "Government", subcategory: "County", url: "https://www.unioncountyohio.gov/", description: "Official county portal for Marysville-based offices: sheriff, courts, property and tax records." },
  { name: "Union County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.unioncountyohio.gov/Auditor", description: "Sets property values and issues dog licenses from 233 W. 6th St. in Marysville." },
  { name: "Union County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.unioncountyohio.gov/directory/boe", description: "Voter registration, absentee ballots and polling places at 835 E. 5th St., Marysville." },
  { name: "Union County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://www.unioncountyohio.gov/sheriff/", description: "Patrol, 911 dispatch and Tri-County Regional Jail services from 221 W. 5th St., Marysville." },
  { name: "City of Marysville", category: "Government", subcategory: "City", url: "https://www.marysvilleohio.org/", description: "Official site for the county seat: utilities, permits, council agendas and city news." },
  { name: "Village of Richwood", category: "Government", subcategory: "Village", url: "https://www.richwoodohio.org/", description: "Village hall at 153 N. Franklin St. handles bill pay, public works and Richwood Lake Park." },
  { name: "Village of Plain City", category: "Government", subcategory: "Village", url: "https://www.plaincityohio.gov/", description: "Straddles Union and Madison counties; utilities, police and permits from 800 Village Blvd." },
  { name: "Village of Milford Center", category: "Government", subcategory: "Village", url: "https://www.villageofmilfordcenter.com/", description: "Village hall at 16 W. Center St. posts council minutes, ordinances and police/fire info." },
  { name: "Village of Magnetic Springs", category: "Government", subcategory: "Village", url: "https://magneticspringsoh.gov/", description: "Council minutes, zoning and a 10-year plan for the historic mineral-springs village." },
  // ---------- Education ----------
  { name: "Marysville Public Library", category: "Education", subcategory: "Library", url: "https://marysvillelib.org/", description: "Main library at 231 S. Plum St. plus a Raymond branch, serving over 30,000 residents." },
  { name: "Marysville Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.marysville.k12.oh.us/", description: "Ten schools including Marysville High and an Early College campus; offices at 212 Chestnut St." },
  { name: "Fairbanks Local Schools", category: "Education", subcategory: "K-12", url: "https://www.fairbanks.k12.oh.us/", description: "Home of the Panthers on State Route 38 in Milford Center, with elementary, middle and high schools." },
  { name: "North Union Local Schools", category: "Education", subcategory: "K-12", url: "https://www.n-union.k12.oh.us/", description: "Wildcats district on St. Rt. 739 in Richwood, serving the county's northern townships." },
  { name: "Tolles Career & Technical Center", category: "Education", subcategory: "Career-Tech", url: "https://www.tollestech.com/", description: "Career-tech campus on U.S. 42 in Plain City with 24-plus programs for area high schoolers." },
  // ---------- Health ----------
  { name: "Union County Health Department", category: "Health", subcategory: "Public Health", url: "https://uchd.net/", description: "Immunizations, WIC, septic and food permits and vital records at 940 London Ave., Marysville." },
  { name: "Memorial Hospital", category: "Health", subcategory: "Hospital", url: "https://memorialohio.com/locations/memorial-hospital/", description: "Independent community hospital at 500 London Ave., Marysville, with ER, cardiology and OB." },
  { name: "UCHD Health Center", category: "Health", subcategory: "Clinic", url: "https://uchd.net/health-center/", description: "Primary care clinic on London Avenue offering sliding-scale visits and chronic disease care." },
  // ---------- Business & Economy ----------
  { name: "Union County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://unioncounty.org/", description: "Business networking, Leadership Institute and member deals from 227 E. Fifth St., Marysville." },
  { name: "Union County-Marysville Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.growunioncountyohio.com/", description: "Recruits manufacturing, auto-tech and ag employers to Union County from 227 E. 5th St." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Union County", category: "Community & Social", subcategory: "Workforce", url: "https://www.unioncountyjobs.org/", description: "Free job search, hiring and youth training help at 940 London Ave., Suite 1500, Marysville." },
  { name: "Union County Job & Family Services", category: "Community & Social", subcategory: "Social Services", url: "https://www.unioncountyohio.gov/departments/HumanServices/workforce-development", description: "County agency running local employment, training and OhioMeansJobs programs." },
  { name: "OSU Extension, Union County", category: "Community & Social", subcategory: "Extension", url: "https://extension.osu.edu/union-county-office", description: "4-H, agriculture and family programs from 18000 State Route 4, Suite E, Marysville." },
  { name: "Union County Historical Society", category: "Community & Social", subcategory: "History", url: "https://www.uchsohio.org/", description: "Runs a museum and genealogy research center at 246 W. 6th St. in Marysville." },
  // ---------- Recreation & Tourism ----------
  { name: "Union County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://ohiounioncountyfair.com/", description: "Annual late-July fair at the fairgrounds, 845 N. Main St., Marysville." },
  { name: "Union County Convention & Visitors Bureau", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.unioncountyoh.com/", description: "Tourism guide to covered bridges, farms and wineries; welcome center at 109 E. 5th St." },
  { name: "Big Darby Headwaters Nature Preserve", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.nature.org/en-us/get-involved/how-to-help/places-we-protect/big-darby-headwaters-nature-preserve/", description: "1,000-acre preserve near East Liberty with the 2.6-mile Gary J. Jainshig Trail." },
  // ---------- News & Media ----------
  { name: "Marysville Journal-Tribune", category: "News & Media", subcategory: "Newspaper", url: "https://www.marysvillejt.com/", description: "Union County's only daily paper, at 207 N. Main St., covering councils, courts and prep sports." },
  { name: "Union County Daily Digital", category: "News & Media", subcategory: "News Site", url: "https://www.unioncountydailydigital.com/", description: "Online outlet covering Marysville-area school boards, county government and community news." },
];
