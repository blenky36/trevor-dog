import React from "react";

const HEADINGS = ["Command", "Description", "Rating", "Notes"];
const COMMANDS = [
  { command: "Sit", description: "Sit until told not to", rating: 2.5, notes: "I'm working on waiting until told everytime. Sometimes receiving a treat when sat I'll stand up as you give it. I need to stop that" },
  { command: "No", description: "Don't do what you're doing", rating: 1.5, notes: "If I'm really distracted doing something I know is naughty, I don't listen to this. If you get my attention before I'm about to do something I'm more likely to listen. Shaking your head also makes it easier for me to understand" },
  { command: "Here", description: "Come to me", rating: 2.5, notes: "If I'm very disracted off lead by another animal or poo etc then I won't listen. Otherwise I'm very good. I'm working on siting automatically when I arrive to you" },
  { command: "Bed", description: "Go into crate", rating: 2, notes: "It usually takes a few repetitions of this as I don't always want to go in. Don't give me any other option and I'll go in of my own choice" },
  { command: "Get it", description: "Retrieve something", rating: 2, notes: "I'm starting to understand this is for food and toys/balls now. I will always go for food. I don't always go and get toys and sometimes I forget to bring them back" },
  { command: "Side", description: "Walk to heel on left", rating: 1.5, notes: "I'm working on paying attention to this and to you as we do it without getting distracted. Please keep me on the left side" },
  { command: "Walk on", description: "Move off", rating: 2.5, notes: "Say this when we're on a walk and I've sat to wait for a door, or to cross a road" },
  { command: "In", description: "Come in from the garden", rating: 1.5, notes: "Pointing at the door helps" },
  { command: "Free", description: "No more commands expected, do what you want", rating: 1, notes: "Relatively new command I don't fully understand yet" },
  { command: "Down", description: "Lie down", rating: 1, notes: "Command I'm starting to understand with food assistance" },
  { command: "Toilet", description: "Go for a wee", rating: 2, notes: "I can go most of the time, but won't if I don't need one" },
  { command: "Poo", description: "Go for a poo", rating: 1.5, notes: "If I really need one I'll go, otherwise not" },
];

export const CommandsTable = () => {
  return (
    <div className="md:p-16 p-6" id="commands">
      <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Commands I Know</h1>
      <p>Say my name, followed by a command please!</p>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-lg mt-8">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            {HEADINGS.map((h) => (
              <th
                key={h}
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {COMMANDS.map((c) => (
            <tr key={c.command}>
              {Object.keys(c).map((com, i) => (
                <td
                  key={i}
                  className=" px-4 py-2 text-gray-700"
                >
                  {/* @ts-expect-error lazy */}
                  {c[com]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
