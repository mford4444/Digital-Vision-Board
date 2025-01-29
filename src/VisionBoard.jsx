import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function VisionBoard() {
  const [goals, setGoals] = useState([
    { 
      category: "Faith & Spirituality", 
      goal: "", 
      actions: "",
      image: "",
      file: null,
      subcategories: ["Personal Devotion", "Community Engagement", "Spiritual Learning"]
    },
    { 
      category: "Fitness & Health", 
      goal: "", 
      actions: "",
      image: "",
      file: null,
      subcategories: ["Exercise Routine", "Nutrition", "Mental Well-being"]
    },
    { 
      category: "Finances & Wealth", 
      goal: "", 
      actions: "",
      image: "",
      file: null,
      subcategories: ["Savings", "Investments", "Career Growth"]
    },
    { 
      category: "Family & Relationships", 
      goal: "", 
      actions: "",
      image: "",
      file: null,
      subcategories: ["Quality Time", "Communication", "Support & Encouragement"]
    }
  ]);

  const [dailyFocus, setDailyFocus] = useState("");
  const [timeSpent, setTimeSpent] = useState(5);

  const handleChange = (index, field, value) => {
    const updatedGoals = [...goals];
    updatedGoals[index][field] = value;
    setGoals(updatedGoals);
  };

  const handleFileUpload = (index, file) => {
    const updatedGoals = [...goals];
    updatedGoals[index].file = file;
    setGoals(updatedGoals);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">410 Morning - Digital Vision Board</h1>
      <p className="mb-4 text-gray-600">Define your vision, set goals, and track your progress.</p>
      
      <div className="mb-6 p-4 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Daily Focus Area</h2>
        <Input
          placeholder="Select today's primary focus"
          value={dailyFocus}
          onChange={(e) => setDailyFocus(e.target.value)}
          className="mb-2"
        />
        <h2 className="text-xl font-semibold mb-2">Time Spent (Minutes)</h2>
        <Input
          type="number"
          min="5"
          max="15"
          value={timeSpent}
          onChange={(e) => setTimeSpent(Number(e.target.value))}
        />
      </div>
      
      <div className="grid gap-6">
        {goals.map((goal, index) => (
          <Card key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{goal.category} (Core 4)</h2>
              <Input
                placeholder="Define your goal"
                value={goal.goal}
                onChange={(e) => handleChange(index, "goal", e.target.value)}
                className="mb-2"
              />
              <Textarea
                placeholder="List key action steps"
                value={goal.actions}
                onChange={(e) => handleChange(index, "actions", e.target.value)}
              />
              <Input
                placeholder="Upload an image URL"
                value={goal.image}
                onChange={(e) => handleChange(index, "image", e.target.value)}
                className="mb-2"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(index, e.target.files[0])}
                className="mb-2"
              />
              {goal.image && <img src={goal.image} alt="Goal Visual" className="w-full h-32 object-cover mt-2 rounded-lg" />}
              {goal.file && <p className="text-gray-600">File uploaded: {goal.file.name}</p>}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Extra Focus Areas</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {goal.subcategories.map((sub, subIndex) => (
                    <li key={subIndex}>{sub}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="mt-6 w-full">Save Your Vision Board</Button>
      <div className="mt-8 p-4 border-t border-gray-300">
        <h2 className="text-lg font-semibold">License</h2>
        <p className="text-sm text-gray-600">
          Copyright (c) 2024 410 Morning. All rights reserved. This software and its associated documentation files (the "Software") are the property of 410 Morning. The Software may not be copied, modified, distributed, sublicensed, or sold without prior written permission. Unauthorized use, reproduction, or distribution of this Software is strictly prohibited and may result in legal action. For licensing inquiries, please contact support@410morning.com.
        </p>
      </div>
    </div>
  );
}

// .gitignore file
const gitignore = `
# Node modules and build files
node_modules/
dist/
build/
.vscode/
.DS_Store

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Misc
coverage/
*.log
`;

export { gitignore };
