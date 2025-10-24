function createClubs() {
  const clubList = document.getElementById("clubList");

  const clubs = [
  {
    "staff": "Antoni, Austin & Gardner, Elijah",
    "club": "Rugby (Girls)",
    "email": "austinantoni@gmail.com & egardner@hse.k12.in.us",
    "description": "We are a competitive high school girls rugby club open to all backgrounds and skill levels for FHS, HSE, and other Fishers area students. Through its fun and fast paced action, we believe that rugby can shape student athletes into strong, confident, and capable individuals, both on and off the field. Our USA Rugby certified coaches will teach you this game from ground up, improve your fitness, and help you compete in games against teams across the state. We have two main seasons: Fall 7s and Spring 15s. Practices commonly run after school on Mondays and Wednesdays with games on the weekends. For more information on our club and how you can be a part of it, go to rugby.myathletics.com or email mudsockrugby@gmail.com. You can also find us on Instagram and Facebook @mudsockhsgirlsrugby",
    "Time": "After",
    "Type": "Sports",
    "Day": "Monday"

  },
  {
    "staff": "Armey, Julie",
    "club": "Orchestra Club",
    "email": "jarmey@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Bandura, Jacob",
    "club": "",
    "email": "jbandura@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Barfield, Alexis", 
    "club": "Alaska Native and Native American Club",
    "email": "abarfield@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Black, Scott",
    "club": "Asian Student Union",
    "email": "sdblack@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Bockenfeld, Matt",
    "club": "Muslim Student Association (MSA)",
    "email": "mbockenfeld@hse.k12.in.us",
    "description" : "MSA is a club where students gather to learn more about Islam, plan community events and service projects, and enjoy one another's company. The club is open to all students. ",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Wednesday",
  },
  {
    "staff": "Brown, Lisa",
    "club": "Art Club",
    "email": "lgbrown@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Buckman, Bill",
    "club": "Poker Club",
    "email": "mbuckman@hse.k12.in.us",
    "description" : "This club will meet Wednesday mornings (dates communicated through StudentSquare) to play variations of the traditional game, Poker. In Poker club, no gambling is involved. Instead, members will play recreationally, with allergy-safe candy as a prize.  The poker chips, playing cards, etc. will be supplied by the club.",
    "Time" : "Before",
    "Type" : "Games",
    "Day" : "Wedneday",
  },
  {
    "staff": "Carson, Beth",
    "club": "Care Crafts Project",
    "email": "acarson@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Chan, Brooke",
    "club": "Disney Lorcana TCG Club",
    "email": "bchan@hse.k12.in.us",
    "description" : "Students play the Disney Lorcana trading card game and socialize",
    "Time" : "After",
    "Type" : "Games",
    "Day" : "Monday",
  },
  {
    "staff": "Chan, Brooke",
    "club": "Magic: The Gathering",
    "email": "bchan@hse.k12.in.us",
    "description" : "Students play the Magic: The Gathering trading card game, discuss strategies and cards, and socialize.",
    "Time" : "After",
    "Type" : "Games",
    "Day" : "Wednesday",
  },
  {
    "staff": "Chop, Dahnya",
    "club": "French Club",
    "email": "dchop@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Curtis, Liz",
    "club": "GSA",
    "email": "lcurtis@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Curtis, Steven & Kapitan, Jacob",
    "club": "Dungeons & Dragons Club",
    "email": "scurtis@hse.k12.in.us & jkapitan@hse.k12.in.us",
    "description" : "Students gather every other week after school until 4:30 to play in Dungeons and Dragons campaigns.  Campaigns are run by fellow club members in small groups.  All levels of expertise are welcome so if you’ve ever wanted to learn how to play, please come join us!",
    "Time" : "After",
    "Type" : "Games",
    "Day" : "Tuesday",
  },
  {
    "staff": "Czech, Mike",
    "club": "School of Rock",
    "email": "mczech@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Delucenay, Katie",
    "club": "Baking Club",
    "email": "kdelucenay@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Delucenay, Katie",
    "club": "Off the Clock (OTC)",
    "email": "kdelucenay@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Druelinger, Sarah",
    "club": "Ping Pong Club",
    "email": "sdruelinger@hse.k12.in.us",
    "description" : "We play ping pong on most Red Mondays.  The club is for anyone who would like to play!",
    "Time" : "After",
    "Type" : "Sports",
    "Day" : "Monday",
  },
  {
    "staff": "Farrand, Angela",
    "club": "American Sign Language (ASL) Club",
    "email": "afarrand@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Manoharan, Vennila",
    "club": "Crochet Club",
    "email": "vmanoharan@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Ferguson, Heather & Noyes, Summer",
    "club": "Senior Smile Society",
    "email": "hferguson@hse.k12.in.us & snoyes@hse.k12.in.us",
    "description" : "Our club creates art and writes letters to residents in nursing/assisted living homes.",
    "Time" : "Before",
    "Type" : "Service",
    "Day" : "Friday",
  },
  {
    "staff": "French, Brigham",
    "club": "Chess Club",
    "email": "bfrench@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "French, Brigham",
    "club": "AI Club",
    "email": "bfrench@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Gastineau, Chelley",
    "club": "Bring Change to Mind",
    "email": "cgastineau@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Greisinger, Jessica & Geisinger, Robin",
    "club": "Swiss-Mix Club (formerly German Club)",
    "email": "jgeisinger@hse.k12.in.us & rgeisinger@hse.k12.in.us",
    "description" : "For French and German students. We blend the best of French and German culture via foods, Field trips, movies, games",
    "Time" : "Before" || "After",
    "Type" : "Arts",
    "Day" : "Varies",
  },
  {
    "staff": "Goodwin, Danielle",
    "club": "Unified Dance",
    "email": "dgoodwin@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Gutting, Stephanie",
    "club": "Harry Potter Club",
    "email": "sgutting@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Gutting, Stephanie",
    "club": "Spanish Club",
    "email": "sgutting@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Gutting, Stephanie",
    "club": "Unified Dance",
    "email": "sgutting@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Hamilton, Terri",
    "club": "Student Organ Donor Advocates (SODA)",
    "email": "thamilton@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Harris, Ryan",
    "club": "Badminton Cub",
    "email": "rharris@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Harris, Ryan",
    "club": "Computer Science Club",
    "email": "rharris@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Harris, Ryan",
    "club": "Cricket Club",
    "email": "rharris@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Harris, Ryan",
    "club": "Desi Student Association",
    "email": "rharris@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Harris, Ryan",
    "club": "Sports Trading Card Club",
    "email": "rharris@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Helmkamp, Michelle",
    "club": "Spanish Club",
    "email": "mhelmkamp@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Huppenthal, Suzie",
    "club": "Do Something Club",
    "email": "shuppenthal@hse.k12.in.us",
    "description" : "It is based on DoSomething.org which empowers young people who want to build a better world. Instead of complaining, you do \"something\" to fix the problem. We have cleaned the school, done clothing drives, helped at the humane society and nursing homes. Be the change!",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Tuesday",
  },
  {
    "staff": "Isom, Renee",
    "club": "3D Printing Club",
    "email": "risom@hse.k12.in.us",
    "description" : "We work to share 3D designs and printing those on the school 3d printers",
    "Time" : "After",
    "Type" : "Arts",
    "Day" : "Wednesday",
  },
  {
    "staff": "Isom, Renee",
    "club": "Cultural Connections Club",
    "email": "risom@hse.k12.in.us",
    "description" : "The Cultural Connections Club celebrates the varied cultures here at FHS and creates an International Fair in the Spring.",
    "Time" : "After",
    "Type" : "Arts",
    "Day" : "Varies",
  },
  {
    "staff": "Isom, Renee",
    "club": "FHS Reads Book Club",
    "email": "risom@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Isom, Renee",
    "club": "Future Black Leaders",
    "email": "risom@hse.k12.in.us",
    "description" : "We are a club that promotes leadership, building community through service.",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Wednesday",
  },
  {
    "staff": "Isom, Renee",
    "club": "Roll the Tape",
    "email": "risom@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Jacobs, Kelli",
    "club": "Anime Club",
    "email": "kjacobs@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Jordan, Monica",
    "club": "Rock Climbing Club",
    "email": "mrjordan@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Kapitan, Jacob",
    "club": "Bible Study Group",
    "email": "jkapitan@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Kapitan, Jacob",
    "club": "E-Sports Club",
    "email": "jkapitan@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Kapitan, Jacob",
    "club": "Pokemon Club",
    "email": "jkapitan@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Keithley, Maxwell",
    "club": "Environmental Club",
    "email": "mkeithley@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Kixmiller, Lori",
    "club": "Student Government (Sponsor)",
    "email": "lkixmiller@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Knapp, Erin",
    "club": "2000s Fun!",
    "email": "eknapp@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Knapp, Erin",
    "club": "Create for Kids",
    "email": "eknapp@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Knapp, Erin",
    "club": "Yoga Club",
    "email": "eknapp@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Kohler, Chad",
    "club": "Marching Band",
    "email": "ckohler@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Horn, Sara",
    "club": "Women in S.T.E.M.",
    "email": "shorn@hse.k12.in.us",
    "description" : "Women in STEM intends to empower young women who are actively pursuing STEM careers by inviting female speakers who have underwent similar experiences. This club also strives to encourage younger students in the school district to be confident in math and science by promoting STEM education.",
    "Time" : "Before",
    "Type" : "Service",
    "Day" : "Friday",
  },
  {
    "staff": "Kuhn, Lance",
    "club": "Chemistry Club",
    "email": "lkuhn@hse.k12.in.us",
    "description" : "Chemistry Club does demonstrations and experiments not done in chemistry classes and prepares for a springtime chemistry competition that is open to all students.",
    "Time" : "Before",
    "Type" : "Academic",
    "Day" : "Friday",
  },
  {
    "staff": "Laffin, Bill",
    "club": "Ski Club",
    "email": "blaffin@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Lawrence, Samuel",
    "club": "Future Farmers of America (FFA)",
    "email": "slawrence@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Lidy, Shelley",
    "club": "Better Help Club",
    "email": "slidy@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Luna, Madeleine",
    "club": "Badminton Club",
    "email": "mluna@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Lyons, Suzanne",
    "club": "Orchestra Club",
    "email": "slyons@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Macmillan, Jordan",
    "club": "FHS \"Pubs\" Club (Publications)",
    "email": "jmacmillan@hse.k12.in,us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Masterson, Ray",
    "club": "Music & Sound Recording Club",
    "email": "rmasterson@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "McCabe, Shanna",
    "club": "CATS (Creating Action Through Service)",
    "email": "smccabe@hse.k12.in.us",
    "description" : "This organization is dedicated to teaching K-6th grade students in HSE school district about service and how they can become active members of their community. ",
    "Time" : "Before",
    "Type" : "Service",
    "Day" : "Monday",
  },
  {
    "staff": "McCabe, Shanna",
    "club": "FHS Reads Book Club",
    "email": "smccabe@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Meador, Taylor",
    "club": "Aura8 Dance Club",
    "email": "tmeador@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Meador, Taylor",
    "club": "K-Pop Club",
    "email": "tmeador@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Meador, Taylor",
    "club": "ENL Club",
    "email": "tmeador@hse.k12.in.us",
    "description" : "ENL Ambassadors is a service-based leadership program designed to engage ENL and immigrant students as leaders at FHS. The main goals of the club are to assist newly enrolled students who do not speak English fluently, tutor English learners, and promote cultural awareness in our community. Members must be bilingual and have been enrolled in an ENL program at some point.",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Varies",
  },
  {
    "staff": "Miller, Audra",
    "club": "I'm Just a Girl",
    "email": "almiller@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Ondish, Kelsey",
    "club": "Improv Club",
    "email": "kondish@hse.k12.in.us",
    "description": "",
    "Time": "After",
    "Type": "Arts",
    "Day": "Tuesday"

  },
  {
    "staff": "Ondish, Kelsey",
    "club": "LLS Club (Leukemia & Lymphoma Society)",
    "email": "kondish@hse.k12.in.us",
    "description" : "LLS is a nonprofit organization dedicated to fighting blood cancers (leukemia, lymphoma, hodgkin’s disease, and myeloma)We raise money to fund research, patient support services, and advocacy efforts. We also spread awareness about LLS as well play games and make new friends. Teams across Indiana who have raised the most money for LLS are crowned Student Visionary of the Year.",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Tuesday",
  },
  {
    "staff": "Paternoster, Liz",
    "club": "We The People (Head Coach)",
    "email": "lpaternoster@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Placzek, Sharon",
    "club": "Hispanic Heritage Club",
    "email": "splaczek@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Rund, Emma",
    "club": "Drama Club / Theatre Fishers",
    "email": "erund@hse.k12.in.us",
    "description" : "Drama Club is club for students who like theatre, do theatre, or want to learn more about theatre. We do workshops and themed events to create opportunities to learn more about theatre outside of what we do at school.",
    "Time" : "After",
    "Type" : "Arts",
    "Day" : "Varies",
  },
  {
    "staff": "Schooley, Patrick",
    "club": "Champions Together",
    "email": "pschooley@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Schuh, Tori",
    "club": "Best Buddies",
    "email": "vschuh@hse.k12.in.us",
    "description" : "Best Buddies promotes inclusion for students at Fishers High School.  Mostly event based, Best Buddies hosts events and forms friendships with students who have intellectual and developmental delays.",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Thursday",
  },
  {
    "staff": "Schulhof, Beth",
    "club": "Pickleball Club",
    "email": "eschulhof@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Seland, Glenn",
    "club": "Animation Club",
    "email": "gseland@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Seland, Glenn",
    "club": "Film Club",
    "email": "gseland@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Shafer, Gretchen",
    "club": "Gratitude Bowls",
    "email": "gshafer@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Shuck, Jamison",
    "club": "African Association Culture Club",
    "email": "jshuck@hse.k12.in.us",
    "description" : "This club is a space for any Africans, students of African descent, or anyone who simply wants to learn more about African culture. It’s open to all. The goal is to bring people together for community and education. We play games, learn from each other, share cultural foods, watch African movies, find ways to help local African businesses, etc.",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Tuesday",
  },
  {
    "staff": "Smith, Andy",
    "club": "Tech Crew / Theatre Fishers",
    "email": "asmith@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Snyder, Tammy",
    "club": "STEMsters",
    "email": "tsnyder@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Snyder, Tammy",
    "club": "CRU (Student Venture)",
    "email": "tsnyder@hse.k12.in.us",
    "description" : "Who We Are: Cru is a caring community of people who want to help each other take the next step in their journey toward Jesus. Whether you’re exploring faith or looking to grow deeper, you’re welcome here.What We Do at Our Weekly MeetingsEach week, we gather in small groups to connect, grow, and encourage one another. We spend time building meaningful relationships, talking about life, reading the Bible, and having honest conversations about faith. It’s a space to be real, ask questions, and experience how Jesus makes a difference in everyday life.Wherever you are on your journey, we’d love to walk with you.",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Monday",
  },
  {
    "staff": "Spencer, Tammie",
    "club": "Animal Alliance",
    "email": "tspencer@hse.k12.in.us",
    "description" : "Animal Alliance is a club that exposes its members to a variety of animal-based volunteer opportunities in the greater Indianapolis area. We typically volunteer twice a month (with a varying schedule). We have hosted volunteer opportunities at the Hamilton County Humane Society, Oinking Acres, Koteewi Stables, and others!Join the Remind (@animala) for information on club meetings/volunteer opportunities!",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Varies",
  },
  {
    "staff": "Strange, Susanne",
    "club": "Gymnastics",
    "email": "strangesusie@gmail.com",
    "description" : "We train for Gymnastics, condition and choreograph routines on all 4 women's apparatus. We do weight training at FHS. We practice x2 days off site at a gymnastics club. Pre- season starts September/October. Official season starts in November. Meets/ competitions run Jan. - March/ April. ",
    "Time" : "After",
    "Type" : "Sports",
    "Day" : "Varies",
  },
  {
    "staff": "Swaim, Matt",
    "club": "Tiger Ambassadors",
    "email": "mswaim@hse.k12.in.us",
    "description" : " Tiger Ambassadors is a student-run organization that helps new students feel welcome at FHS. Ambassadors are matched with new students to help these students make a positive connection at FHS. We want to make new students feel welcome and to make FHS an inclusive environment.",
    "Time" : "Before",
    "Type" : "Service",
    "Day" : "Wednesday",
  },
  {
    "staff": "Thomas, William",
    "club": "East African Student Association",
    "email": "wthomas@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Thompson-Mejias, Terri",
    "club": "Euchre Club",
    "email": "tthompsonmejias@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Thompson-Mejias, Terri",
    "club": "Latino Student Union",
    "email": "tthompsonmejias@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Tribolet, Braden",
    "club": "Tiger Cage",
    "email": "btribolet@hse.k12.in.us",
    "description" : "Our club oversees the student body during athletic events or other events that we organize. We plan, organize, and execute everything that happens at sporting events. We help bring the school together and provide a great experience for our students.",
    "Time" : "Before",
    "Type" : "Sports",
    "Day" : "Varies",
  },
  {
    "staff": "Turner, Dave",
    "club": "Economics Club",
    "email": "dturner@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Turner, Dave",
    "club": "Investment Club",
    "email": "dturner@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Tysen, Jessica",
    "club": "Bowling Club",
    "email": "jessicanstevens@gmail.com",
    "description" : "We are the FHS Bowling Team that consists of an all girls team & an all boys team. We are competing in the White River Valley 1 conference against 11 other Indiana High Schools and our season is from September to February. Practices occur on Tuesdays at Pinheads from 4:30-6:00 pm.  The estimated cost is $150 per student and gently used equipment is available upon request. Find us on instagram at fishershighschoolbowling for more information.",
    "Time" : "After",
    "Type" : "Sports",
    "Day" : "Friday",
  },
  {
    "staff": "Vanlandingham, Renee",
    "club": "Fishers Tutors",
    "email": "rvanlandingham@hse.k12.in.us",
    "description": "FHS Tutors is a club that connects tutors with kids across HSE Schools. We tutor at Riverside JH every Wednesday from 4-5pm, and at Fishers JH from 4-5pm. Additionally, you can sign up to be an in-school tutor and be paired with a high school student who requests a tutor. Please join the Remind with code @tutorsfhs",
    "Time": "After",
    "Type": "Service",
    "Day": "Varies"
  },
  {
    "staff": "VanTrees, Leah",
    "club": "W.R.I.T.E. Club",
    "email": "lvantrees@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Vaughn, Alisa",
    "club": "ENL Math Tutoring",
    "email": "avaughn@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Votaw, Lauren",
    "club": "Fellowship of Christian Athletes (FCA)",
    "email": "lvotaw@hse.k12.in.us",
    "description" : "F.C.A. is open to any student looking for fellowship with other students who enjoy sports through games, a devotional, and prayer. Donuts are always free! ",
    "Time" : "Before",
    "Type" : "Service",
    "Day" : "Wednesday",
  },
  {
    "staff": "Walker, Sarah",
    "club": "MED LIFE",
    "email": "swalker@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Werbe, Jim",
    "club": "Intramural Basketball",
    "email": "jwerbe@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "White, Jessica",
    "club": "Key Club",
    "email": "jlwhite@hse.k12.in.us",
    "description" : "",
    "Time" : "",
    "Type" : "",
    "Day" : "",
  },
  {
    "staff": "Young, Kate",
    "club": "Million Meal Movement",
    "email": "kyoung@hse.k12.in.us",
    "description" : "Million Meal Movement works to raise money and supplies to help food insecure people in Hamilton County and beyond. We raise money throughout the year to hold a meal packing event on the Day of Service, where we pack 15-20,000 meals in one day!",
    "Time" : "After",
    "Type" : "Service",
    "Day" : "Tuesday",
  },
  {
    "staff" : "Horn, Sarah & Rund, Emma",
    "club": "Speech and Debate Team",
    "email" : "",
    "description" : "The Fishers Speech & Debate team competes in public speaking tournaments throughout the state and on the national circuit. Students can compete in theatrical performances, broadcasting, platform speaking, and multiple types of debate.",
    "Time": "After",
    "Type" : "Academic",
    "Days" : "Weekend",
  },
  {
    "staff" : "Laffin, Bill",
    "club" : "Girls Lacrosse",
    "email" : "blaffin@hse.k12.in.us",
    "description" : "",
    "Time" : "After",
    "Type" : "Sports",
    "Days" : "Varies",
  }
]

  // Sort clubs
clubs.sort((a, b) => {
  const nameA = a.club.toLowerCase();
  const nameB = b.club.toLowerCase();

  const Astart = /^\d/.test(nameA);
  const Bstart = /^\d/.test(nameB);

  if (Astart && !Bstart) return -1;
  if (!Astart && Bstart) return 1;
  return nameA.localeCompare(nameB);
});

// Create club boxes with filters
function createClubs() {
  const clubList = document.getElementById("clubList");
  clubList.innerHTML = "";

  // Collect selected filters
  const selectedTypes = [];
  const selectedTimes = [];
  const selectedDays = [];

  if (document.getElementById("checkboxAcademic").checked) selectedTypes.push("Academic");
  if (document.getElementById("checkboxService").checked) selectedTypes.push("Service");
  if (document.getElementById("checkboxSports").checked) selectedTypes.push("Sports");
  if (document.getElementById("checkboxArt").checked) selectedTypes.push("Arts");
  if (document.getElementById("checkboxGames").checked) selectedTypes.push("Games");

  if (document.getElementById("checkboxBefore").checked) selectedTimes.push("Before");
  if (document.getElementById("checkboxAfter").checked) selectedTimes.push("After");

  if (document.getElementById("checkboxMonday").checked) selectedDays.push("Monday");
  if (document.getElementById("checkboxTuesday").checked) selectedDays.push("Tuesday");
  if (document.getElementById("checkboxWednesday").checked) selectedDays.push("Wednesday");
  if (document.getElementById("checkboxThursday").checked) selectedDays.push("Thursday");
  if (document.getElementById("checkboxFriday").checked) selectedDays.push("Friday");
  if (document.getElementById("checkboxSaturday").checked) selectedDays.push("Saturday");
  if (document.getElementById("checkboxSunday").checked) selectedDays.push("Sunday");

  const anyFilters = selectedTypes.length || selectedTimes.length || selectedDays.length;

  // Filter clubs 
  const filteredClubs = anyFilters
    ? clubs.filter(club =>
        (selectedTypes.length === 0 || selectedTypes.includes(club.Type)) &&
        (selectedTimes.length === 0 || selectedTimes.includes(club.Time)) &&
        (selectedDays.length === 0 || selectedDays.includes(club.Day))
      )
    : clubs.slice(); // no filters → show all

  // No clubs found failsafe
  if (filteredClubs.length === 0) {
    clubList.innerHTML = "<p class='no-results'>No clubs found.</p>";
    return;
  }

  // Club boxes
  filteredClubs.forEach(club => {
    const liElement = document.createElement("li");
    liElement.classList.add("club-box");

    liElement.innerHTML = `
      <img 
        src="star.png" 
        alt="favorite star" 
        class="favorite-star" 
        style="width:25px; height:25px; cursor:pointer;"
      >
      <h3 class="clubBoxesFontSize">${club.club}</h3>
      <p class="clubBoxesFontSize">${club.staff}</p>
      <p class="clubBoxesEmailSize">${club.email}</p>
      <div class="club-description">
        ${club.description || "No description available."}
      </div>
    `;

    const star = liElement.querySelector(".favorite-star");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.some(fav => fav.club === club.club)) {
      star.src = "goldStar.jpeg";
      star.classList.add("favorited");
    }

    star.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = e.target;
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      target.classList.toggle("favorited");

      if (target.classList.contains("favorited")) {
        target.src = "goldStar.jpeg";
        if (!favorites.some(fav => fav.club === club.club)) favorites.push(club);
      } else {
        target.src = "star.png";
        favorites = favorites.filter(fav => fav.club !== club.club);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    });

    clubList.appendChild(liElement);
  });
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  createClubs();

  // Re-run when any checkbox changes
  document.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener("change", () => {
      localStorage.setItem(cb.id, cb.checked);
      createClubs();
    });

    // Load saved state
    const saved = localStorage.getItem(cb.id);
    if (saved !== null) cb.checked = saved === "true";
  });
});
}
