const workouts = {
  chest: [
    ["Push-Up", "Bodyweight", "Beginner", "3 x 8-15", "Builds pressing strength with clean shoulder control.", ["bodyweight", "beginner"]],
    ["Incline Push-Up", "Bodyweight", "Beginner", "3 x 10-18", "A smoother push-up variation for higher quality reps.", ["bodyweight", "beginner"]],
    ["Dumbbell Bench Press", "Dumbbells", "Intermediate", "4 x 8-12", "A strong chest builder with a deep range of motion.", ["dumbbells"]],
    ["Dumbbell Fly", "Dumbbells", "Intermediate", "3 x 10-14", "Stretches and loads the chest through a wide arc.", ["dumbbells"]],
    ["Barbell Bench Press", "Gym", "Intermediate", "5 x 5-8", "Classic heavy press for chest, shoulders, and triceps.", ["gym"]],
    ["Cable Crossover", "Gym", "Intermediate", "3 x 12-16", "Keeps tension on the chest from stretch to squeeze.", ["gym"]],
    ["Chest Dip", "Gym", "Advanced", "4 x 6-10", "Lean forward to bias the chest and lower pecs.", ["gym"]],
    ["Svend Press", "Plate", "Beginner", "3 x 12-20", "A focused squeeze move that works well as a finisher.", ["gym", "beginner"]]
  ],
  back: [
    ["Pull-Up", "Bar", "Advanced", "4 x 4-10", "A big vertical pull for lats and upper-back strength.", ["bodyweight", "gym"]],
    ["Inverted Row", "Bodyweight", "Beginner", "3 x 8-14", "Builds pulling strength with easy angle adjustments.", ["bodyweight", "beginner"]],
    ["One-Arm Dumbbell Row", "Dumbbells", "Intermediate", "4 x 8-12", "Hits lats while training core stability.", ["dumbbells"]],
    ["Dumbbell Pullover", "Dumbbells", "Intermediate", "3 x 10-14", "A long-range lat and rib-cage control exercise.", ["dumbbells"]],
    ["Lat Pulldown", "Gym", "Beginner", "4 x 10-12", "A friendly way to train the pull-up pattern.", ["gym", "beginner"]],
    ["Seated Cable Row", "Gym", "Intermediate", "4 x 8-12", "Excellent for mid-back thickness and posture.", ["gym"]],
    ["Face Pull", "Cable", "Beginner", "3 x 15-20", "Keeps shoulders healthy and lights up rear delts.", ["gym", "beginner"]],
    ["Romanian Deadlift", "Barbell", "Intermediate", "4 x 6-10", "Loads the posterior chain and lower back isometrically.", ["gym"]]
  ],
  shoulders: [
    ["Pike Push-Up", "Bodyweight", "Intermediate", "4 x 6-12", "A no-equipment press for front and side delts.", ["bodyweight"]],
    ["Wall Walk", "Bodyweight", "Advanced", "3 x 3-6", "Builds overhead strength and shoulder confidence.", ["bodyweight"]],
    ["Dumbbell Shoulder Press", "Dumbbells", "Intermediate", "4 x 8-12", "A reliable overhead builder with natural arm paths.", ["dumbbells"]],
    ["Lateral Raise", "Dumbbells", "Beginner", "4 x 12-20", "The simple side-delt classic.", ["dumbbells", "beginner"]],
    ["Rear Delt Raise", "Dumbbells", "Beginner", "3 x 12-18", "Balances pressing work and improves shoulder shape.", ["dumbbells", "beginner"]],
    ["Arnold Press", "Dumbbells", "Intermediate", "3 x 8-12", "Pressing with rotation for full-delt work.", ["dumbbells"]],
    ["Machine Shoulder Press", "Gym", "Beginner", "3 x 10-12", "Stable overhead work when you want less setup.", ["gym", "beginner"]],
    ["Cable Lateral Raise", "Gym", "Intermediate", "3 x 12-18", "Smooth constant tension for side delts.", ["gym"]]
  ],
  biceps: [
    ["Chin-Up", "Bar", "Advanced", "4 x 5-10", "A heavy biceps and back movement in one.", ["bodyweight", "gym"]],
    ["Towel Curl", "Bodyweight", "Beginner", "3 x 12-20", "Uses self-resistance for quick arm work anywhere.", ["bodyweight", "beginner"]],
    ["Dumbbell Curl", "Dumbbells", "Beginner", "4 x 8-12", "The straight-ahead biceps staple.", ["dumbbells", "beginner"]],
    ["Hammer Curl", "Dumbbells", "Beginner", "3 x 10-14", "Builds biceps, brachialis, and forearms.", ["dumbbells", "beginner"]],
    ["Incline Dumbbell Curl", "Dumbbells", "Intermediate", "3 x 10-12", "A deep stretch variation that feels serious fast.", ["dumbbells"]],
    ["Preacher Curl", "Gym", "Intermediate", "3 x 8-12", "Locks the upper arm in place for strict reps.", ["gym"]],
    ["Cable Curl", "Gym", "Beginner", "3 x 12-15", "Constant tension and easy weight changes.", ["gym", "beginner"]],
    ["Reverse Curl", "Barbell", "Intermediate", "3 x 10-14", "Trains arms with extra forearm emphasis.", ["gym"]]
  ],
  triceps: [
    ["Close-Grip Push-Up", "Bodyweight", "Beginner", "3 x 8-15", "Simple triceps-focused pressing with no equipment.", ["bodyweight", "beginner"]],
    ["Bench Dip", "Bodyweight", "Beginner", "3 x 10-15", "A compact triceps move for home workouts.", ["bodyweight", "beginner"]],
    ["Overhead Dumbbell Extension", "Dumbbells", "Beginner", "3 x 10-14", "Stretches the long head of the triceps.", ["dumbbells", "beginner"]],
    ["Dumbbell Skull Crusher", "Dumbbells", "Intermediate", "3 x 8-12", "Strong elbow-extension work with control.", ["dumbbells"]],
    ["Cable Pushdown", "Gym", "Beginner", "4 x 10-15", "Clean, joint-friendly triceps volume.", ["gym", "beginner"]],
    ["Rope Overhead Extension", "Gym", "Intermediate", "3 x 12-16", "Great long-head triceps tension.", ["gym"]],
    ["Close-Grip Bench Press", "Gym", "Intermediate", "4 x 6-10", "Heavy triceps strength with chest support.", ["gym"]],
    ["Assisted Dip", "Gym", "Beginner", "3 x 8-12", "Pressing volume with adjustable help.", ["gym", "beginner"]]
  ],
  forearms: [
    ["Dead Hang", "Bar", "Beginner", "4 x 20-45 sec", "Builds grip endurance and shoulder comfort.", ["bodyweight", "beginner"]],
    ["Towel Hang", "Bodyweight", "Advanced", "3 x 10-30 sec", "A brutal grip challenge with simple gear.", ["bodyweight"]],
    ["Farmer Carry", "Dumbbells", "Beginner", "4 x 30-60 sec", "Grip, traps, and core all at once.", ["dumbbells", "beginner"]],
    ["Wrist Curl", "Dumbbells", "Beginner", "3 x 15-20", "Direct forearm flexor work.", ["dumbbells", "beginner"]],
    ["Reverse Wrist Curl", "Dumbbells", "Beginner", "3 x 15-20", "Balances the forearm extensors.", ["dumbbells", "beginner"]],
    ["Plate Pinch", "Gym", "Intermediate", "4 x 20-40 sec", "Trains thumb and crushing grip.", ["gym"]],
    ["Cable Wrist Curl", "Gym", "Intermediate", "3 x 12-18", "Smooth tension for forearm volume.", ["gym"]],
    ["Reverse Barbell Curl", "Gym", "Intermediate", "3 x 10-14", "Forearms plus arm strength in one lift.", ["gym"]]
  ],
  abs: [
    ["Plank", "Bodyweight", "Beginner", "4 x 25-60 sec", "A simple core brace that rewards perfect form.", ["bodyweight", "beginner"]],
    ["Dead Bug", "Bodyweight", "Beginner", "3 x 8-12/side", "Teaches core control without back strain.", ["bodyweight", "beginner"]],
    ["Mountain Climber", "Bodyweight", "Beginner", "3 x 30-45 sec", "Core work with a conditioning kick.", ["bodyweight", "beginner"]],
    ["Hollow Hold", "Bodyweight", "Intermediate", "4 x 15-35 sec", "Gymnast-style trunk tension.", ["bodyweight"]],
    ["Dumbbell Side Bend", "Dumbbells", "Beginner", "3 x 12-15/side", "Direct oblique work when done slowly.", ["dumbbells", "beginner"]],
    ["Weighted Sit-Up", "Dumbbells", "Intermediate", "3 x 8-12", "Adds load to a classic flexion move.", ["dumbbells"]],
    ["Cable Crunch", "Gym", "Intermediate", "4 x 10-15", "Heavy ab flexion with adjustable resistance.", ["gym"]],
    ["Hanging Knee Raise", "Gym", "Intermediate", "3 x 8-14", "Lower-ab focus with grip demand.", ["gym"]]
  ],
  glutes: [
    ["Glute Bridge", "Bodyweight", "Beginner", "4 x 12-20", "Easy setup and a strong glute squeeze.", ["bodyweight", "beginner"]],
    ["Single-Leg Glute Bridge", "Bodyweight", "Intermediate", "3 x 10-14/side", "Unilateral glute strength with no gear.", ["bodyweight"]],
    ["Dumbbell Hip Thrust", "Dumbbells", "Beginner", "4 x 10-15", "Loaded glute extension without a barbell.", ["dumbbells", "beginner"]],
    ["Goblet Squat", "Dumbbells", "Beginner", "4 x 8-12", "Leg and glute builder with a simple setup.", ["dumbbells", "beginner"]],
    ["Bulgarian Split Squat", "Dumbbells", "Intermediate", "3 x 8-12/side", "Huge glute and quad stimulus.", ["dumbbells"]],
    ["Barbell Hip Thrust", "Gym", "Intermediate", "4 x 8-12", "One of the strongest direct glute builders.", ["gym"]],
    ["Cable Kickback", "Gym", "Beginner", "3 x 12-16/side", "Controlled glute isolation.", ["gym", "beginner"]],
    ["Leg Press High Stance", "Gym", "Intermediate", "4 x 10-15", "Glutes and hamstrings with machine stability.", ["gym"]]
  ],
  quads: [
    ["Bodyweight Squat", "Bodyweight", "Beginner", "4 x 12-20", "The base pattern for quad training.", ["bodyweight", "beginner"]],
    ["Split Squat", "Bodyweight", "Beginner", "3 x 10-14/side", "Single-leg work with balance and control.", ["bodyweight", "beginner"]],
    ["Goblet Squat", "Dumbbells", "Beginner", "4 x 8-12", "Keeps the torso upright and loads the quads.", ["dumbbells", "beginner"]],
    ["Dumbbell Step-Up", "Dumbbells", "Intermediate", "3 x 8-12/side", "Practical leg strength with a big range.", ["dumbbells"]],
    ["Front Squat", "Gym", "Intermediate", "5 x 4-8", "Upright squatting with serious quad demand.", ["gym"]],
    ["Leg Extension", "Gym", "Beginner", "4 x 12-16", "Direct quad isolation and easy progression.", ["gym", "beginner"]],
    ["Hack Squat", "Gym", "Intermediate", "4 x 8-12", "Stable machine squatting for hard sets.", ["gym"]],
    ["Walking Lunge", "Dumbbells", "Intermediate", "3 x 10-16/side", "Quads, glutes, and conditioning in one.", ["dumbbells"]]
  ],
  hamstrings: [
    ["Single-Leg Romanian Deadlift", "Bodyweight", "Beginner", "3 x 8-12/side", "Balance plus hamstring control.", ["bodyweight", "beginner"]],
    ["Sliding Leg Curl", "Bodyweight", "Intermediate", "3 x 8-12", "A tough hamstring curl using towels or sliders.", ["bodyweight"]],
    ["Dumbbell Romanian Deadlift", "Dumbbells", "Beginner", "4 x 8-12", "Hip hinge strength with simple equipment.", ["dumbbells", "beginner"]],
    ["Dumbbell Good Morning", "Dumbbells", "Intermediate", "3 x 10-12", "Loads the hinge pattern carefully.", ["dumbbells"]],
    ["Lying Leg Curl", "Gym", "Beginner", "4 x 10-15", "Direct knee-flexion work for hamstrings.", ["gym", "beginner"]],
    ["Seated Leg Curl", "Gym", "Beginner", "4 x 10-15", "Great hamstring isolation in a stretched position.", ["gym", "beginner"]],
    ["Barbell Romanian Deadlift", "Gym", "Intermediate", "4 x 6-10", "Heavy posterior-chain strength.", ["gym"]],
    ["Glute-Ham Raise", "Gym", "Advanced", "3 x 5-10", "A demanding hamstring and glute movement.", ["gym"]]
  ],
  calves: [
    ["Standing Calf Raise", "Bodyweight", "Beginner", "4 x 15-25", "Simple calf volume anywhere.", ["bodyweight", "beginner"]],
    ["Single-Leg Calf Raise", "Bodyweight", "Beginner", "4 x 10-20/side", "Better range and focus per leg.", ["bodyweight", "beginner"]],
    ["Dumbbell Calf Raise", "Dumbbells", "Beginner", "4 x 12-20", "Easy load for home calf work.", ["dumbbells", "beginner"]],
    ["Farmer Carry on Toes", "Dumbbells", "Intermediate", "3 x 30-45 sec", "Calves and grip under constant tension.", ["dumbbells"]],
    ["Seated Calf Raise", "Gym", "Beginner", "4 x 12-20", "Targets the soleus with bent knees.", ["gym", "beginner"]],
    ["Standing Machine Calf Raise", "Gym", "Intermediate", "5 x 8-15", "Heavier calf loading with stability.", ["gym"]],
    ["Leg Press Calf Press", "Gym", "Beginner", "4 x 12-18", "Calf training without balancing.", ["gym", "beginner"]],
    ["Tibialis Raise", "Bodyweight", "Beginner", "3 x 15-25", "Front-shin balance for stronger lower legs.", ["bodyweight", "beginner"]]
  ],
  fullBody: [
    ["Burpee", "Bodyweight", "Intermediate", "5 x 8-12", "Full-body conditioning with no setup.", ["bodyweight"]],
    ["Bear Crawl", "Bodyweight", "Beginner", "4 x 20-40 sec", "Core, shoulders, and coordination.", ["bodyweight", "beginner"]],
    ["Dumbbell Thruster", "Dumbbells", "Intermediate", "4 x 8-12", "Squat-to-press power in one movement.", ["dumbbells"]],
    ["Renegade Row", "Dumbbells", "Intermediate", "3 x 6-10/side", "Upper body and core stability together.", ["dumbbells"]],
    ["Kettlebell Swing", "Gym", "Intermediate", "5 x 12-20", "Explosive hinge work for conditioning.", ["gym"]],
    ["Clean and Press", "Dumbbells", "Advanced", "5 x 4-8", "Power, strength, and coordination.", ["dumbbells"]],
    ["Sled Push", "Gym", "Intermediate", "6 x 20-30 m", "Low-skill, high-output conditioning.", ["gym"]],
    ["Medicine Ball Slam", "Gym", "Beginner", "4 x 10-15", "Explosive full-body work with a simple rhythm.", ["gym", "beginner"]]
  ]
};

const extraWorkouts = {
  chest: [
    ["Decline Push Up", "Bodyweight", "Intermediate", "3 x 8-15", "A lower chest push up variation with more shoulder demand.", ["bodyweight"]],
    ["Wide Push Up", "Bodyweight", "Beginner", "3 x 10-18", "A wider hand position that adds chest emphasis.", ["bodyweight", "beginner"]],
    ["Dumbbell Floor Press", "Dumbbells", "Beginner", "4 x 8-12", "A controlled press that limits shoulder stress.", ["dumbbells", "beginner"]],
    ["Incline Dumbbell Press", "Dumbbells", "Intermediate", "4 x 8-12", "Upper chest pressing with a deep stretch.", ["dumbbells"]],
    ["Pec Deck Fly", "Gym", "Beginner", "3 x 12-16", "Stable chest isolation with easy control.", ["gym", "beginner"]],
    ["Machine Chest Press", "Gym", "Beginner", "4 x 8-12", "A guided pressing option for chest strength.", ["gym", "beginner"]]
  ],
  back: [
    ["Band Row", "Bodyweight", "Beginner", "3 x 12-20", "A simple pulling drill using a band or towel setup.", ["bodyweight", "beginner"]],
    ["Superman Hold", "Bodyweight", "Beginner", "3 x 20-40 sec", "Lower back and posture work with no equipment.", ["bodyweight", "beginner"]],
    ["Chest Supported Dumbbell Row", "Dumbbells", "Intermediate", "4 x 8-12", "A strict row that removes body swing.", ["dumbbells"]],
    ["Dumbbell Shrug", "Dumbbells", "Beginner", "4 x 10-15", "Trap focused pulling support work.", ["dumbbells", "beginner"]],
    ["T Bar Row", "Gym", "Intermediate", "4 x 6-10", "Heavy mid back rowing with a strong brace.", ["gym"]],
    ["Straight Arm Pulldown", "Gym", "Intermediate", "3 x 12-16", "Lat isolation with straight arm tension.", ["gym"]]
  ],
  shoulders: [
    ["Shoulder Tap", "Bodyweight", "Beginner", "3 x 16-24 taps", "Shoulder stability with core control.", ["bodyweight", "beginner"]],
    ["Handstand Hold", "Bodyweight", "Advanced", "4 x 15-40 sec", "Overhead strength and shoulder balance practice.", ["bodyweight"]],
    ["Dumbbell Front Raise", "Dumbbells", "Beginner", "3 x 10-15", "Front delt work with strict control.", ["dumbbells", "beginner"]],
    ["Dumbbell Upright Row", "Dumbbells", "Intermediate", "3 x 10-12", "Shoulder and trap work with a close path.", ["dumbbells"]],
    ["Cable Face Pull", "Gym", "Beginner", "3 x 15-20", "Rear delt and shoulder health work.", ["gym", "beginner"]],
    ["Landmine Press", "Gym", "Intermediate", "4 x 8-12", "Angled pressing that is friendly on shoulders.", ["gym"]]
  ],
  biceps: [
    ["Close Grip Chin Up", "Bodyweight", "Advanced", "4 x 4-8", "A strong bodyweight biceps builder.", ["bodyweight", "gym"]],
    ["Isometric Towel Curl", "Bodyweight", "Beginner", "3 x 20-30 sec", "Arm tension practice using self resistance.", ["bodyweight", "beginner"]],
    ["Concentration Curl", "Dumbbells", "Beginner", "3 x 10-14", "Strict biceps work with the arm supported.", ["dumbbells", "beginner"]],
    ["Zottman Curl", "Dumbbells", "Intermediate", "3 x 8-12", "Biceps and forearms in one curl variation.", ["dumbbells"]],
    ["EZ Bar Curl", "Gym", "Beginner", "4 x 8-12", "A wrist friendly bar curl option.", ["gym", "beginner"]],
    ["High Cable Curl", "Gym", "Intermediate", "3 x 12-16", "A biceps squeeze from a raised cable angle.", ["gym"]]
  ],
  triceps: [
    ["Diamond Push Up", "Bodyweight", "Intermediate", "3 x 6-12", "A tough triceps push up variation.", ["bodyweight"]],
    ["Bodyweight Triceps Extension", "Bodyweight", "Intermediate", "3 x 8-14", "A skull crusher style move using your body weight.", ["bodyweight"]],
    ["Dumbbell Kickback", "Dumbbells", "Beginner", "3 x 12-16", "A light triceps squeeze exercise.", ["dumbbells", "beginner"]],
    ["Close Grip Dumbbell Press", "Dumbbells", "Intermediate", "4 x 8-12", "Triceps pressing with dumbbells close together.", ["dumbbells"]],
    ["Machine Triceps Extension", "Gym", "Beginner", "3 x 10-15", "Stable elbow extension with machine support.", ["gym", "beginner"]],
    ["Single Arm Cable Pushdown", "Gym", "Intermediate", "3 x 12-16/side", "One arm triceps control with cable tension.", ["gym"]]
  ],
  forearms: [
    ["Fingertip Plank", "Bodyweight", "Advanced", "3 x 10-25 sec", "Finger and wrist strength under body tension.", ["bodyweight"]],
    ["Wrist Push Up", "Bodyweight", "Intermediate", "3 x 6-12", "Wrist strength with careful range of motion.", ["bodyweight"]],
    ["Dumbbell Pronation", "Dumbbells", "Beginner", "3 x 12-15/side", "Forearm rotation strength with a light dumbbell.", ["dumbbells", "beginner"]],
    ["Dumbbell Supination", "Dumbbells", "Beginner", "3 x 12-15/side", "Rotational forearm work for elbow balance.", ["dumbbells", "beginner"]],
    ["Behind Back Wrist Curl", "Gym", "Intermediate", "3 x 12-20", "Loaded wrist flexion with a barbell.", ["gym"]],
    ["Wrist Roller", "Gym", "Intermediate", "4 x 1-2 rolls", "Forearm endurance using a roller setup.", ["gym"]]
  ],
  abs: [
    ["Side Plank", "Bodyweight", "Beginner", "3 x 20-45 sec/side", "Oblique strength with full body tension.", ["bodyweight", "beginner"]],
    ["Reverse Crunch", "Bodyweight", "Beginner", "3 x 10-16", "Lower ab control without equipment.", ["bodyweight", "beginner"]],
    ["Bicycle Crunch", "Bodyweight", "Beginner", "3 x 16-30", "Rotational core work at a steady pace.", ["bodyweight", "beginner"]],
    ["Dumbbell Russian Twist", "Dumbbells", "Intermediate", "3 x 16-24", "Loaded rotation for abs and obliques.", ["dumbbells"]],
    ["Dumbbell Plank Drag", "Dumbbells", "Intermediate", "3 x 8-12/side", "Anti rotation core work with a dumbbell.", ["dumbbells"]],
    ["Ab Wheel Rollout", "Gym", "Advanced", "3 x 6-12", "A demanding anti extension ab exercise.", ["gym"]]
  ],
  glutes: [
    ["Frog Pump", "Bodyweight", "Beginner", "3 x 20-30", "High rep glute squeezing with simple setup.", ["bodyweight", "beginner"]],
    ["Curtsy Lunge", "Bodyweight", "Beginner", "3 x 10-14/side", "Glute medius work with balance control.", ["bodyweight", "beginner"]],
    ["Dumbbell Sumo Squat", "Dumbbells", "Beginner", "4 x 10-15", "Wide stance glute and inner thigh work.", ["dumbbells", "beginner"]],
    ["Dumbbell Step Down", "Dumbbells", "Intermediate", "3 x 8-12/side", "Single leg glute control from a raised surface.", ["dumbbells"]],
    ["Cable Pull Through", "Gym", "Beginner", "3 x 12-16", "Hip hinge glute work with cable tension.", ["gym", "beginner"]],
    ["Smith Machine Hip Thrust", "Gym", "Intermediate", "4 x 8-12", "Stable loaded hip thrusting.", ["gym"]]
  ],
  quads: [
    ["Wall Sit", "Bodyweight", "Beginner", "4 x 30-60 sec", "Quad endurance with a simple hold.", ["bodyweight", "beginner"]],
    ["Reverse Nordic Curl", "Bodyweight", "Advanced", "3 x 5-10", "Deep quad strength with bodyweight control.", ["bodyweight"]],
    ["Dumbbell Front Squat", "Dumbbells", "Intermediate", "4 x 8-12", "Quad focused squatting with dumbbells held high.", ["dumbbells"]],
    ["Dumbbell Reverse Lunge", "Dumbbells", "Beginner", "3 x 8-12/side", "A knee friendly lunge for quads and glutes.", ["dumbbells", "beginner"]],
    ["Smith Machine Squat", "Gym", "Beginner", "4 x 8-12", "Guided squatting with stable balance.", ["gym", "beginner"]],
    ["Sissy Squat", "Gym", "Advanced", "3 x 6-12", "High tension quad isolation.", ["gym"]]
  ],
  hamstrings: [
    ["Hamstring Walkout", "Bodyweight", "Beginner", "3 x 8-12", "Bridge based hamstring tension with no gear.", ["bodyweight", "beginner"]],
    ["Nordic Curl", "Bodyweight", "Advanced", "3 x 3-8", "Very challenging hamstring strength work.", ["bodyweight"]],
    ["Dumbbell Leg Curl", "Dumbbells", "Intermediate", "3 x 10-15", "Hamstring curl using a dumbbell between the feet.", ["dumbbells"]],
    ["Dumbbell Swing", "Dumbbells", "Intermediate", "4 x 12-20", "Explosive hip hinge work.", ["dumbbells"]],
    ["Cable Pull Through", "Gym", "Beginner", "3 x 12-16", "Hamstrings and glutes through a cable hinge.", ["gym", "beginner"]],
    ["Back Extension", "Gym", "Beginner", "3 x 10-15", "Posterior chain work with body angle control.", ["gym", "beginner"]]
  ],
  calves: [
    ["Bent Knee Calf Raise", "Bodyweight", "Beginner", "3 x 15-25", "Soleus focused calf work with bent knees.", ["bodyweight", "beginner"]],
    ["Calf Hop", "Bodyweight", "Intermediate", "3 x 20-40 sec", "Light elastic calf conditioning.", ["bodyweight"]],
    ["Dumbbell Seated Calf Raise", "Dumbbells", "Beginner", "4 x 12-20", "At home seated calf training.", ["dumbbells", "beginner"]],
    ["Dumbbell Tibialis Raise", "Dumbbells", "Beginner", "3 x 15-20", "Front shin strength with light resistance.", ["dumbbells", "beginner"]],
    ["Donkey Calf Raise", "Gym", "Intermediate", "4 x 10-18", "Deep calf stretch with hip hinge position.", ["gym"]],
    ["Smith Machine Calf Raise", "Gym", "Intermediate", "4 x 8-15", "Loaded calf raises with guided balance.", ["gym"]]
  ],
  fullBody: [
    ["Jumping Jack", "Bodyweight", "Beginner", "4 x 30-60 sec", "Simple full body warm up and conditioning.", ["bodyweight", "beginner"]],
    ["Squat Thrust", "Bodyweight", "Beginner", "4 x 8-15", "A lower impact burpee style conditioning move.", ["bodyweight", "beginner"]],
    ["Dumbbell Snatch", "Dumbbells", "Intermediate", "4 x 5-8/side", "Single arm power from floor to overhead.", ["dumbbells"]],
    ["Dumbbell Walking Lunge Curl", "Dumbbells", "Intermediate", "3 x 8-12/side", "Legs and arms in a combined move.", ["dumbbells"]],
    ["Battle Rope Waves", "Gym", "Beginner", "6 x 20-30 sec", "Upper body conditioning with rhythm.", ["gym", "beginner"]],
    ["Rowing Machine Sprint", "Gym", "Intermediate", "6 x 30 sec", "Full body cardio using legs, back, and arms.", ["gym"]]
  ]
};

Object.entries(extraWorkouts).forEach(([group, items]) => {
  workouts[group].push(...items);
});

const muscleMeta = [
  ["chest", "Chest", "C"],
  ["back", "Back", "B"],
  ["shoulders", "Shoulders", "S"],
  ["biceps", "Biceps", "Bi"],
  ["triceps", "Triceps", "Tri"],
  ["forearms", "Forearms", "F"],
  ["abs", "Abs", "A"],
  ["glutes", "Glutes", "G"],
  ["quads", "Quads", "Q"],
  ["hamstrings", "Hamstrings", "H"],
  ["calves", "Calves", "Ca"],
  ["fullBody", "Full Body", "FB"]
];

const state = {
  selectedGroup: "chest",
  filter: "all",
  query: "",
  plan: JSON.parse(localStorage.getItem("workoutBuddyPlan") || "[]")
};

function getWorkoutGuide(name, groupLabel, equipment) {
  const lower = name.toLowerCase();
  const setup = equipment === "Bodyweight" ? "Use a clear space and set your body in a strong, stable position." : `Choose a ${equipment.toLowerCase()} load that lets you control every rep without rushing.`;

  if (lower.includes("push-up")) {
    return ["Place your hands slightly wider than shoulder width and spread your fingers for grip.", "Step your feet back, squeeze your glutes, and keep a straight line from head to heels.", "Bend your elbows and lower your chest toward the floor while keeping elbows angled back, not flared straight out.", "Stop just before your chest touches, then press the floor away until your arms are straight.", "Keep your hips from sagging and breathe out as you push up."];
  }
  if (lower.includes("bench press") || lower.includes("shoulder press") || lower.includes("machine shoulder press")) {
    return ["Set your feet firmly and brace your core before the first rep.", "Pull your shoulder blades back and down so your shoulders feel packed and stable.", "Lower the weight slowly until it reaches a comfortable depth with wrists stacked over elbows.", "Press the weight up in a smooth line without bouncing or twisting.", "Finish with steady arms, then reset your breath before the next rep."];
  }
  if (lower.includes("fly") || lower.includes("crossover")) {
    return ["Start with your chest lifted, shoulders down, and a soft bend in both elbows.", "Open your arms slowly like you are hugging a wide barrel.", "Stop when you feel a chest stretch without shoulder pinching.", "Bring your hands back together by squeezing your chest, not by bending your elbows more.", "Keep the motion smooth and use a lighter weight than you would for pressing."];
  }
  if (lower.includes("dip")) {
    return ["Grip the bars or bench and press your shoulders down away from your ears.", "Keep your chest proud and brace your abs so you do not swing.", "Bend your elbows and lower until your upper arms reach a comfortable depth.", "Drive through your hands to press back up while keeping elbows controlled.", "Stop the set if your shoulders roll forward or feel sharp pain."];
  }
  if (lower.includes("pull-up") || lower.includes("chin-up") || lower.includes("pulldown")) {
    return ["Grip the bar with your hands even and start with your ribs pulled down.", "Begin by pulling your shoulder blades down before bending your elbows.", "Drive your elbows toward your ribs and lift your chest toward the bar or handle.", "Pause briefly when your back is squeezed, then lower under control.", "Reach long at the bottom without losing shoulder control."];
  }
  if (lower.includes("row")) {
    return ["Set your hips and torso so your back stays flat and your neck stays neutral.", "Let the arm reach forward or down until you feel your back stretch.", "Pull your elbow toward your hip instead of shrugging toward your neck.", "Pause for one second when your shoulder blade is squeezed back.", "Lower the weight slowly and keep your torso from twisting."];
  }
  if (lower.includes("curl")) {
    return ["Stand tall with your ribs down and your upper arms pinned close to your sides.", "Start with the weight fully lowered and your wrists straight.", "Curl the weight up by bending only at the elbow, without swinging your hips or shoulders.", "Squeeze your biceps at the top for a brief pause.", "Lower slowly until your arms are long again before the next rep."];
  }
  if (lower.includes("raise")) {
    return ["Stand tall with a light core brace and keep your shoulders relaxed.", "Use a light weight and lead the motion with the target area, not momentum.", "Lift until you reach shoulder height or a comfortable range.", "Pause briefly without shrugging your shoulders up.", "Lower slowly so the muscle stays under tension the whole way."];
  }
  if (lower.includes("squat") || lower.includes("leg press") || lower.includes("hack squat")) {
    return ["Set your feet about shoulder width and point your toes slightly out if that feels natural.", "Brace your core and keep your chest controlled before you descend.", "Bend your knees and hips together while keeping your knees tracking over your toes.", "Lower to a depth you can control without your heels lifting.", "Drive through your whole foot to stand or press back up, then reset."];
  }
  if (lower.includes("lunge") || lower.includes("split squat") || lower.includes("step-up")) {
    return ["Set your working foot firmly and keep your torso tall.", "Brace your core and keep your hips square instead of twisting.", "Lower slowly until both legs are working and your front knee stays in line with your toes.", "Push through the front foot to return to the top with balance.", "Complete all reps on one side with control before switching if the exercise calls for it."];
  }
  if (lower.includes("deadlift") || lower.includes("good morning")) {
    return ["Stand with soft knees, a braced core, and the weight close to your body.", "Push your hips back like you are closing a car door with your glutes.", "Keep your back flat and lower until you feel a strong hamstring stretch.", "Drive your hips forward to stand tall while keeping the weight close.", "Finish by squeezing your glutes, not by leaning backward."];
  }
  if (lower.includes("bridge") || lower.includes("thrust") || lower.includes("kickback")) {
    return ["Set your ribs down, brace your abs, and keep your lower back from arching.", "Place your feet or working leg so you can feel the glute doing the work.", "Drive through your heel or push the leg back until your hip is fully extended.", "Pause and squeeze the glute hard at the top.", "Return slowly without letting your hips twist or your back take over."];
  }
  if (lower.includes("calf")) {
    return ["Place the balls of your feet firmly on the floor, step, or platform.", "Keep your legs controlled and avoid bouncing out of the bottom.", "Rise as high as possible onto your toes and squeeze your calves.", "Pause at the top for a moment.", "Lower slowly into a full stretch before starting the next rep."];
  }
  if (lower.includes("plank") || lower.includes("hold") || lower.includes("hang")) {
    return ["Set your position carefully before the timer starts.", "Create tension through your abs, glutes, shoulders, and grip as needed.", "Keep your breathing steady instead of holding your breath.", "Stay still and keep your neck in line with your body.", "End the set when your position starts to break down."];
  }
  if (lower.includes("crunch") || lower.includes("sit-up") || lower.includes("knee raise") || lower.includes("dead bug") || lower.includes("mountain climber")) {
    return ["Brace your abs before the first rep and keep your lower back controlled.", "Move from your core instead of pulling with your neck or swinging your hips.", "Exhale as your abs work hardest.", "Return slowly so you do not lose tension.", "Keep every rep clean and stop before your back starts arching."];
  }
  if (lower.includes("carry")) {
    return ["Pick up the weight using your legs and keep your chest tall.", "Grip hard and pull your shoulders down away from your ears.", "Walk with small, steady steps without leaning side to side.", "Keep your core braced and your eyes forward.", "Set the weight down safely before your grip completely gives out."];
  }
  if (lower.includes("burpee") || lower.includes("thruster") || lower.includes("clean") || lower.includes("slam") || lower.includes("sled") || lower.includes("swing")) {
    return ["Start lighter or slower until the movement rhythm feels natural.", "Brace your core before each explosive rep.", "Use your legs and hips to create power instead of forcing everything with your arms.", "Land or reset softly so your knees and back stay controlled.", "Rest when your speed drops or your form gets sloppy."];
  }

  return [setup, `Set your posture so the ${groupLabel.toLowerCase()} muscle can do most of the work.`, "Move through the range slowly and keep tension on the target muscle.", "Pause briefly at the hardest part of the rep.", "Return under control and stop if you feel sharp pain."];
}

const muscleList = document.querySelector("#muscleList");
const workoutGrid = document.querySelector("#workoutGrid");
const selectedGroupLabel = document.querySelector("#selectedGroupLabel");
const selectedGroupTitle = document.querySelector("#selectedGroupTitle");
const resultCount = document.querySelector("#resultCount");
const planList = document.querySelector("#planList");
const planCount = document.querySelector("#planCount");
const searchInput = document.querySelector("#searchInput");
const clearPlanButton = document.querySelector("#clearPlanButton");
const expandPlanButton = document.querySelector("#expandPlanButton");
const planPanel = document.querySelector(".plan-panel");
const planZoom = document.querySelector("#planZoom");
const planZoomList = document.querySelector("#planZoomList");
const planZoomCount = document.querySelector("#planZoomCount");
const planZoomCloseButton = document.querySelector("#planZoomCloseButton");
const planModal = document.querySelector("#planModal");
const modalCloseButton = document.querySelector("#modalCloseButton");
const modalTitle = document.querySelector("#modalTitle");
const modalGroup = document.querySelector("#modalGroup");
const modalDescription = document.querySelector("#modalDescription");
const modalMeta = document.querySelector("#modalMeta");
const modalDemo = document.querySelector("#modalDemo");
const modalGuide = document.querySelector("#modalGuide");
const demoCache = new Map();
let activeDemoRequest = 0;
let isPlanExpanded = false;

function savePlan() {
  localStorage.setItem("workoutBuddyPlan", JSON.stringify(state.plan));
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getExerciseId(group, exercise) {
  return `${group}-${slugify(exercise[0])}`;
}

function formatDisplayText(text) {
  return text.replace(/-/g, " ");
}

function getGroupLabel(groupKey) {
  return muscleMeta.find(([key]) => key === groupKey)?.[1] || "Workout";
}

function findExerciseById(id) {
  for (const [groupKey, groupWorkouts] of Object.entries(workouts)) {
    const exercise = groupWorkouts.find((item) => getExerciseId(groupKey, item) === id);
    if (exercise) {
      return { exercise, groupKey, groupLabel: getGroupLabel(groupKey) };
    }
  }
  return null;
}

function getDemoType(name) {
  const lower = name.toLowerCase();
  if (lower.includes("squat") || lower.includes("lunge") || lower.includes("step") || lower.includes("wall sit") || lower.includes("leg press")) return "squat";
  if (lower.includes("deadlift") || lower.includes("hinge") || lower.includes("good morning") || lower.includes("swing") || lower.includes("pull through") || lower.includes("back extension")) return "hinge";
  if (lower.includes("push") || lower.includes("press") || lower.includes("dip") || lower.includes("extension") || lower.includes("skull")) return "press";
  if (lower.includes("pull") || lower.includes("row") || lower.includes("chin") || lower.includes("shrug") || lower.includes("pulldown")) return "pull";
  if (lower.includes("curl") || lower.includes("pronation") || lower.includes("supination") || lower.includes("roller")) return "curl";
  if (lower.includes("raise") || lower.includes("tap") || lower.includes("handstand")) return "raise";
  if (lower.includes("plank") || lower.includes("crunch") || lower.includes("bug") || lower.includes("climber") || lower.includes("sit") || lower.includes("wheel") || lower.includes("twist")) return "core";
  if (lower.includes("calf") || lower.includes("tibialis") || lower.includes("hop")) return "calf";
  if (lower.includes("carry") || lower.includes("hang") || lower.includes("pinch")) return "carry";
  return "power";
}

function getDemoCaption(type) {
  const captions = {
    press: "Pressing demo: lower under control, brace, then drive away.",
    pull: "Pulling demo: reach, pull the elbow back, pause, and return slowly.",
    squat: "Squat demo: sit down with control, keep knees tracking, then stand tall.",
    hinge: "Hinge demo: push hips back, keep the back flat, then drive hips forward.",
    curl: "Curl demo: lock the upper arm in place and move only at the elbow.",
    raise: "Raise demo: lift smoothly without shrugging, then lower slowly.",
    core: "Core demo: brace hard, move slowly, and keep the spine controlled.",
    calf: "Calf demo: rise high, pause at the top, then lower into a stretch.",
    carry: "Carry demo: stand tall, grip hard, and move with steady posture.",
    power: "Power demo: move with rhythm, keep control, and reset each rep."
  };
  return captions[type] || captions.power;
}

function getDemoHtml(name) {
  return `
    <div class="demo-loading">
      <div class="demo-loader" aria-hidden="true"></div>
      <div>
        <strong>Loading real demo</strong>
        <span>Finding a matching exercise video for ${formatDisplayText(name)}.</span>
      </div>
    </div>
  `;
}

function normalizeDemoText(value) {
  return formatDisplayText(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getDemoQueries(name) {
  const cleanName = normalizeDemoText(name);
  const noSide = cleanName.replace(/\b(single|one|arm|leg|left|right|assisted|machine)\b/g, " ").replace(/\s+/g, " ").trim();
  const noEquipment = cleanName
    .replace(/\b(dumbbell|barbell|cable|machine|smith|bodyweight|body weight|ez bar|kettlebell|medicine ball)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return [...new Set([cleanName, noSide, noEquipment].filter(Boolean))];
}

function scoreDemoMatch(targetName, exercise) {
  const target = normalizeDemoText(targetName);
  const candidate = normalizeDemoText(exercise.name || "");
  if (!candidate) return 0;
  if (candidate === target) return 1000;
  if (candidate.includes(target) || target.includes(candidate)) return 750;

  const targetWords = target.split(" ").filter((word) => word.length > 2);
  const candidateWords = candidate.split(" ");
  const sharedWords = targetWords.filter((word) => candidateWords.includes(word));
  const importantWords = targetWords.filter((word) => !["body", "weight", "machine", "dumbbell", "barbell", "cable"].includes(word));
  const importantMatches = importantWords.filter((word) => candidateWords.includes(word)).length;
  return sharedWords.length * 80 + importantMatches * 60 - Math.abs(candidateWords.length - targetWords.length) * 8;
}

function isCloseDemoMatch(targetName, exercise) {
  const target = normalizeDemoText(targetName);
  const candidate = normalizeDemoText(exercise.name || "");
  if (!candidate) return false;
  if (candidate === target || candidate.includes(target) || target.includes(candidate)) return true;

  const importantWords = target
    .split(" ")
    .filter((word) => word.length > 2 && !["body", "weight", "machine", "dumbbell", "barbell", "cable"].includes(word));
  const candidateWords = candidate.split(" ");
  const importantMatches = importantWords.filter((word) => candidateWords.includes(word)).length;

  if (importantWords.length >= 2 && importantMatches < 2) return false;
  return exercise.score >= 220;
}

async function fetchExerciseDemo(name) {
  const cacheKey = normalizeDemoText(name);
  if (demoCache.has(cacheKey)) {
    return demoCache.get(cacheKey);
  }

  let bestMatch = null;
  for (const query of getDemoQueries(name)) {
    let after = "";
    for (let page = 0; page < 5; page++) {
      const params = new URLSearchParams({ name: query });
      if (after) params.set("after", after);
      const response = await fetch(`https://oss.exercisedb.dev/api/v1/exercises?${params.toString()}`);
      if (!response.ok) break;
      const payload = await response.json();
      const matches = (payload.data || [])
        .filter((exercise) => exercise.gifUrl)
        .map((exercise) => ({
          ...exercise,
          score: scoreDemoMatch(name, exercise)
        }))
        .sort((a, b) => b.score - a.score);

      if (matches[0] && (!bestMatch || matches[0].score > bestMatch.score)) {
        bestMatch = matches[0];
      }
      if (bestMatch?.score >= 1000 || !payload.meta?.hasNextPage || !payload.meta?.nextCursor) break;
      after = payload.meta.nextCursor;
    }
    if (bestMatch?.score >= 1000) break;
  }

  const result = bestMatch && isCloseDemoMatch(name, bestMatch) ? bestMatch : null;
  demoCache.set(cacheKey, result);
  return result;
}

async function loadDemoMedia(name) {
  const requestId = ++activeDemoRequest;
  try {
    const demo = await fetchExerciseDemo(name);
    if (requestId !== activeDemoRequest) return;

    if (!demo) {
      modalDemo.innerHTML = `
        <div class="demo-fallback">
          <strong>No real demo found yet</strong>
          <span>I could not find a close video match for ${formatDisplayText(name)}, so use the written form steps below for this one.</span>
        </div>
      `;
      return;
    }

    modalDemo.innerHTML = `
      <div class="demo-media-frame">
        <img class="demo-media-img" src="${demo.gifUrl}" alt="${formatDisplayText(demo.name)} exercise demo" loading="lazy" />
      </div>
      <div class="demo-caption">
        <strong>Real demo</strong>
        <span>${formatDisplayText(demo.name)}</span>
      </div>
    `;
  } catch {
    if (requestId !== activeDemoRequest) return;
    modalDemo.innerHTML = `
      <div class="demo-fallback">
        <strong>Demo could not load</strong>
        <span>Check your connection, then reopen this workout to try again.</span>
      </div>
    `;
  }
}

function getSelectedMeta() {
  return muscleMeta.find(([key]) => key === state.selectedGroup);
}

function getAllWorkoutEntries() {
  return Object.entries(workouts).flatMap(([groupKey, groupWorkouts]) =>
    groupWorkouts.map((exercise) => ({
      exercise,
      groupKey,
      groupLabel: getGroupLabel(groupKey)
    }))
  );
}

function renderMuscles() {
  document.querySelector("#groupCount").textContent = muscleMeta.length;
  muscleList.innerHTML = muscleMeta
    .map(([key, label, icon]) => {
      const isActive = key === state.selectedGroup ? " active" : "";
      return `
        <button class="muscle-button${isActive}" type="button" data-group="${key}">
          <span class="muscle-icon">${icon}</span>
          <span class="muscle-name">${label}</span>
          <span class="muscle-total">${workouts[key].length}</span>
        </button>
      `;
    })
    .join("");
}

function getFilteredWorkouts() {
  const query = state.query.trim().toLowerCase();
  const isGlobalSearch = Boolean(query) || state.filter !== "all";
  const source = isGlobalSearch
    ? getAllWorkoutEntries()
    : workouts[state.selectedGroup].map((exercise) => ({
        exercise,
        groupKey: state.selectedGroup,
        groupLabel: getGroupLabel(state.selectedGroup)
      }));

  return source.filter(({ exercise, groupLabel }) => {
    const [name, equipment, level, sets, description, tags] = exercise;
    const searchableFields = [
      name,
      formatDisplayText(name),
      groupLabel,
      equipment,
      level,
      sets,
      description,
      ...tags
    ];
    const searchableWords = searchableFields.join(" ").toLowerCase();
    const queryWords = query.split(/\s+/).filter(Boolean);
    const matchesQuery = !queryWords.length || queryWords.every((word) => searchableWords.includes(word));
    const matchesFilter =
      state.filter === "all" ||
      tags.includes(state.filter) ||
      equipment.toLowerCase().includes(state.filter) ||
      level.toLowerCase().includes(state.filter);
    return matchesQuery && matchesFilter;
  });
}

function renderWorkouts() {
  const [, label] = getSelectedMeta();
  const entries = getFilteredWorkouts();
  const isGlobalSearch = Boolean(state.query.trim()) || state.filter !== "all";
  selectedGroupLabel.textContent = isGlobalSearch ? "Everywhere" : label;
  selectedGroupTitle.textContent = isGlobalSearch ? "Search Results" : `${label} Workouts`;
  resultCount.textContent = `${entries.length} ${entries.length === 1 ? "move" : "moves"}`;

  if (!entries.length) {
    workoutGrid.innerHTML = `<div class="empty-state">No workouts match that filter yet. Try another search or chip.</div>`;
    return;
  }

  workoutGrid.innerHTML = entries
    .map(({ exercise, groupKey, groupLabel }) => {
      const [name, equipment, level, sets, description] = exercise;
      const id = getExerciseId(groupKey, exercise);
      const added = state.plan.some((item) => item.id === id);
      const guide = getWorkoutGuide(name, groupLabel, equipment);
      const displayName = formatDisplayText(name);
      return `
        <article class="workout-card">
          <div class="card-top">
            <h3>${displayName}</h3>
            <span class="badge">${level}</span>
          </div>
          <p>${formatDisplayText(description)}</p>
          <div class="meta-row">
            <span>${groupLabel}</span>
            <span>${equipment}</span>
            <span>${sets}</span>
          </div>
          <div class="guide-box">
            <strong>How to do it</strong>
            <ol>
              ${guide.map((step) => `<li>${step}</li>`).join("")}
            </ol>
          </div>
          <button class="demo-button" type="button" data-demo="${id}">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch demo</span>
          </button>
          <button class="add-button${added ? " added" : ""}" type="button" data-add="${id}">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="${added ? "M20 6 9 17l-5-5" : "M12 5v14M5 12h14"}" />
            </svg>
            <span>${added ? "Added" : "Add to plan"}</span>
          </button>
        </article>
      `;
    })
    .join("");
}

function renderPlan() {
  planCount.textContent = state.plan.length;
  planZoomCount.textContent = state.plan.length;

  if (!state.plan.length) {
    planList.innerHTML = `<p class="plan-empty">Your saved exercises will appear here.</p>`;
    planZoomList.innerHTML = `<p class="plan-empty">Your saved exercises will appear here.</p>`;
    return;
  }

  const planMarkup = state.plan
    .map(
      (item) => `
      <div class="plan-item">
        <button class="plan-open" type="button" data-open-plan="${item.id}" aria-label="Open ${formatDisplayText(item.name)} full screen">
          <strong>${formatDisplayText(item.name)}</strong>
          <span>${item.group} | ${item.sets}</span>
        </button>
        <button class="remove-plan" type="button" data-remove="${item.id}" aria-label="Remove ${formatDisplayText(item.name)}">x</button>
      </div>
    `
    )
    .join("");
  const planZoomMarkup = state.plan
    .map(
      (item) => `
      <div class="plan-zoom-item">
        <button class="plan-zoom-open" type="button" data-open-plan="${item.id}" aria-label="Open ${formatDisplayText(item.name)} full screen">
          <strong>${formatDisplayText(item.name)}</strong>
          <span>${item.group} | ${item.sets}</span>
        </button>
        <button class="remove-plan plan-zoom-remove" type="button" data-remove="${item.id}" aria-label="Remove ${formatDisplayText(item.name)}">x</button>
      </div>
    `
    )
    .join("");
  planList.innerHTML = planMarkup;
  planZoomList.innerHTML = planZoomMarkup;
}

function setPlanExpanded(expanded) {
  isPlanExpanded = expanded;
  planZoom.classList.toggle("open", isPlanExpanded);
  planZoom.setAttribute("aria-hidden", String(!isPlanExpanded));
  document.body.classList.toggle("plan-expanded-open", isPlanExpanded);
  expandPlanButton.setAttribute("aria-expanded", String(isPlanExpanded));
  expandPlanButton.setAttribute("aria-label", isPlanExpanded ? "Collapse My Plan" : "Expand My Plan");
  if (isPlanExpanded) {
    planZoomCloseButton.focus();
  }
}

function renderAll() {
  renderMuscles();
  renderWorkouts();
  renderPlan();
}

function openWorkoutModal(id) {
  const found = findExerciseById(id);
  const savedItem = state.plan.find((item) => item.id === id);
  if (!found && !savedItem) return;

  const exercise = found?.exercise;
  const groupLabel = found?.groupLabel || savedItem.group;
  const name = exercise ? exercise[0] : savedItem.name;
  const equipment = exercise ? exercise[1] : savedItem.equipment || "Workout";
  const level = exercise ? exercise[2] : "Saved";
  const sets = exercise ? exercise[3] : savedItem.sets;
  const description = exercise ? exercise[4] : "Saved workout from your plan.";
  const guide = getWorkoutGuide(name, groupLabel, equipment);

  modalTitle.textContent = formatDisplayText(name);
  modalGroup.textContent = groupLabel;
  modalDescription.textContent = formatDisplayText(description);
  modalMeta.innerHTML = `<span>${equipment}</span><span>${level}</span><span>${sets}</span>`;
  modalDemo.innerHTML = getDemoHtml(name);
  modalGuide.innerHTML = guide.map((step) => `<li>${step}</li>`).join("");
  planModal.classList.add("open");
  planModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalCloseButton.focus();
  loadDemoMedia(name);
}

function openPlanModal(id) {
  openWorkoutModal(id);
}

function closePlanModal() {
  planModal.classList.remove("open");
  planModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeDemoRequest++;
}

muscleList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-group]");
  if (!button) return;
  state.selectedGroup = button.dataset.group;
  renderAll();
});

document.querySelector(".filter-row").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.classList.toggle("active", chip === button);
  });
  renderWorkouts();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderWorkouts();
});

workoutGrid.addEventListener("click", (event) => {
  const demoButton = event.target.closest("[data-demo]");
  if (demoButton) {
    openWorkoutModal(demoButton.dataset.demo);
    return;
  }

  const button = event.target.closest("[data-add]");
  if (!button) return;

  const id = button.dataset.add;
  const alreadyAdded = state.plan.some((item) => item.id === id);
  if (alreadyAdded) {
    state.plan = state.plan.filter((item) => item.id !== id);
  } else {
    const found = findExerciseById(id);
    if (!found) return;
    const { exercise, groupLabel } = found;
    state.plan.push({
      id,
      name: formatDisplayText(exercise[0]),
      group: groupLabel,
      equipment: exercise[1],
      sets: exercise[3]
    });
  }

  savePlan();
  renderWorkouts();
  renderPlan();
});

planList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    state.plan = state.plan.filter((item) => item.id !== removeButton.dataset.remove);
    savePlan();
    renderWorkouts();
    renderPlan();
    return;
  }

  const openButton = event.target.closest("[data-open-plan]");
  if (openButton) {
    openPlanModal(openButton.dataset.openPlan);
  }
});

planZoomList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    state.plan = state.plan.filter((item) => item.id !== removeButton.dataset.remove);
    savePlan();
    renderWorkouts();
    renderPlan();
    return;
  }

  const openButton = event.target.closest("[data-open-plan]");
  if (openButton) {
    openPlanModal(openButton.dataset.openPlan);
  }
});

modalCloseButton.addEventListener("click", closePlanModal);
planZoomCloseButton.addEventListener("click", () => setPlanExpanded(false));

planZoom.addEventListener("click", (event) => {
  if (event.target === planZoom) {
    setPlanExpanded(false);
  }
});

planModal.addEventListener("click", (event) => {
  if (event.target === planModal) {
    closePlanModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && planModal.classList.contains("open")) {
    closePlanModal();
  }

  if (event.key === "Escape" && isPlanExpanded) {
    setPlanExpanded(false);
  }
});

clearPlanButton.addEventListener("click", () => {
  state.plan = [];
  savePlan();
  renderWorkouts();
  renderPlan();
  closePlanModal();
  setPlanExpanded(false);
});

expandPlanButton.addEventListener("click", () => {
  setPlanExpanded(!isPlanExpanded);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

renderAll();
