/**
 * Copyright (c) 2024 Acelero. All rights reserved.
 * This software and its associated documentation files (the "Software") 
 * are the property of Acelero. The Software may not be copied, modified, 
 * distributed, sublicensed, or sold without prior written permission. 
 * Unauthorized use, reproduction, or distribution of this Software is strictly prohibited
 * and may result in legal action. For licensing inquiries, please contact support@acelero.co.
 */

import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function VisionBoard() {
  const [state, setState] = useState({
    steps: [
      {
        title: "Define Your Core Vision (Clarity & Focus)",
        description:
          "Clearly articulate what you want to achieve in different areas of life. Write down 1-2 key SMART goals per category.",
        prompt: "Write down your 1-2 key goals in each category:",
        categories: [
          { name: "Health & Fitness", goals: ["", ""], images: ["", "", "", ""] },
          { name: "Wealth & Financial Growth", goals: ["", ""], images: ["", "", "", ""] },
          { name: "Business/Career", goals: ["", ""], images: ["", "", "", ""] },
          { name: "Relationships & Social Life", goals: ["", ""], images: ["", "", "", ""] }
        ]
      },
      {
        title: "Find Visual & Emotional Anchors (Psychological Priming)",
        description:
          "Select images, quotes, and symbols that trigger strong emotions and align with your vision.",
        prompt: "Describe what images, words, or symbols will inspire you:"
      },
      {
        title: "Structure Your Vision Board (Organized Clarity)",
        description:
          "Create a structured and intentional layout that reinforces focus. Options: Physical, Digital, or Hybrid Approach.",
        prompt: "How will you structure your vision board?"
      },
      {
        title: "Link Your Vision to Actionable Steps (Implementation Intentions)",
        description:
          "Convert inspiration into a realistic execution plan. List 2-3 key action steps for each goal.",
        prompt: "What are the actionable steps for each goal?"
      },
      {
        title: "Reinforce & Review (Behavioral Consistency)",
        description:
          "Keep your vision board top-of-mind and actively engage with it through daily and weekly rituals.",
        prompt: "What habits will help you stay consistent?"
      },
      {
        title: "Track Progress & Reward Milestones",
        description:
          "Measure results and build momentum. Use a habit tracker or goal planner to track progress.",
        prompt: "How will you track progress and celebrate milestones?"
      }
    ],
    showPreview: false,
    isMobileView: false
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Acelero - Vision Board Steps</h1>
      <p className="mb-4 text-gray-600">Follow these six steps to build a powerful vision board.</p>
      {!state.showPreview ? (
        <div className="grid gap-6">
          {state.steps.map((step, index) => (
            <Card key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                <p className="mb-2 text-gray-700">{step.description}</p>
                {step.categories && (
                  <div>
                    {step.categories.map((category, i) => (
                      <div key={i} className='mb-4'>
                        <h3 className='text-lg font-semibold'>{category.name}</h3>
                        <div className='grid grid-cols-2 gap-2 mt-4'>
                          {category.images.map((image, j) => (
                            <div key={j} className='flex flex-col gap-2'>
                              <Input
                                type='text'
                                placeholder={`Image URL ${j + 1}`}
                                value={image}
                                onChange={(e) => {
                                  const updatedState = { ...state };
                                  updatedState.steps[0].categories[i].images[j] = e.target.value;
                                  setState(updatedState);
                                }}
                              />
                              <input 
                                type='file' 
                                accept='image/*' 
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                      const updatedState = { ...state };
                                      updatedState.steps[0].categories[i].images[j] = reader.result;
                                      setState(updatedState);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    {step.categories.map((category, i) => (
                      <div key={i} className="mb-4">
                        <h3 className="text-lg font-semibold">{category.name}</h3>
                        
                        
                        
                        
                        {category.goals.map((goal, j) => (
                          <Input
                            key={j}
                            type="text"
                            placeholder={`Goal ${j + 1}`}
                            className="w-full p-2 border rounded-md"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          <Button onClick={() => setState((prevState) => ({ ...prevState, showPreview: true }))}>Save & Preview</Button>
        </div>
      ) : (
        <div className="grid gap-6">
          <h2 className="text-2xl font-semibold mb-4">Vision Board Preview</h2>
          <div className="flex gap-4">
            <Button onClick={() => setState((prevState) => ({ ...prevState, isMobileView: false }))}>Desktop View</Button>
            <Button onClick={() => setState((prevState) => ({ ...prevState, isMobileView: true }))}>Mobile View</Button>
          </div>
          <div className={state.isMobileView ? "flex flex-col gap-4 items-center" : "grid grid-cols-2 gap-4"}>
            {state.steps[0].categories.map((category, i) => (
              <Card key={i} className='p-4 border border-gray-300 rounded-lg shadow-md w-full'>
                <CardContent>
                  <h3 className='text-lg font-semibold mb-2'>{category.name}</h3>
                  <div className={state.isMobileView ? 'flex flex-col gap-4' : 'grid grid-cols-2 gap-2'}>
                    {category.images.map((image, j) => (
                      image ? <img key={j} src={image} alt={`Preview ${category.name} ${j + 1}`} className={`rounded-lg ${state.isMobileView ? 'w-3/4 h-40 object-cover' : 'w-full h-32 object-cover'}`} /> : null
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            {state.steps[0].categories.map((category, i) => (
              <Card key={i} className="p-4 border border-gray-300 rounded-lg shadow-md w-full">
                <CardContent>
                  
                        $1
                        <p className='text-sm text-gray-600 mb-2'>Select images, quotes, and symbols that trigger strong emotions and align with your vision and goals for {category.name}.</p>
                  <div className={state.isMobileView ? "flex flex-col gap-4" : "grid grid-cols-2 gap-2"}>
                    {category.images.map((image, j) => (
                      image ? <img key={j} src={image} alt={`Preview ${category.name} ${j + 1}`} className={`rounded-lg ${state.isMobileView ? 'w-3/4 h-40 object-cover' : 'w-full h-32 object-cover'}`} /> : null
                    ))}
                  
                        <div className='grid grid-cols-2 gap-2 mt-4'>
                          {category.images.map((image, j) => (
                            <div key={j} className='flex flex-col gap-2'>
                              <Input
                                type='text'
                                placeholder={`Image URL ${j + 1}`}
                                value={image}
                              />
                              <input type='file' accept='image/*' />
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
              </Card>
            ))}
          </div>
          <Button onClick={() => setState((prevState) => ({ ...prevState, showPreview: false }))}>Edit Vision Board</Button>
        </div>
      )}
    </div>
  );
}

{
  (   
    <div className="text-center mt-8 text-gray-500 text-sm">
        <p>Copyright (c) 2024 410 Morning. All rights reserved.</p>
        <p>
          This software and its associated documentation files (the "Software") are the property of 410 Morning.
          The Software may not be copied, modified, distributed, sublicensed, or sold without prior written permission.
          Unauthorized use, reproduction, or distribution of this Software is strictly prohibited and may result in legal action.
          For licensing inquiries, please contact support@410morning.com.
        </p>
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
