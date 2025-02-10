const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const habits = {
"health": [
"Drink at least 8 glasses of water today.",
"Do 10 minutes of stretching in the morning.",
"Avoid sugary drinks for the entire day."
],
"productivity": [
"Write down your top 3 priorities for today.",
"Avoid checking social media for the first hour of the day.",
"Use a 25-minute focus session to complete a task."
],
"mindfulness": [
"Take 5 deep breaths before starting your day.",
"Write down 3 things you are grateful for.",
"Spend 5 minutes in complete silence to reset your mind."
]
};

app.get("/habit", (req, res) => {
const category = req.query.category || "mindfulness";
if (!habits[category]) {
return res.status(400).json({ error: "Invalid category." });
}
const randomHabit = habits[category][Math.floor(Math.random() * habits[category].length)];
res.json({ category: category, habit: randomHabit });
});

app.listen(5003, () => console.log("📅 Habit Tracker API running on port 5003"));
