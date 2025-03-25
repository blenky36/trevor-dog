import { BIRTHDAY } from "@/utils/constants";
import { calculateTimeSince } from "@/utils/date";
import React from "react";

const HEADINGS = ["Time", "Description", "Notes"];
const ROUTINE = [
    { time: "06:30", description: "Wake up", notes: "Normally need to do an immediate wee and poo. Like to hold poo for the walk but can be convinced with a few commands" },
    { time: "06:31", description: "Walk", notes: `Roughly ${calculateTimeSince(BIRTHDAY).months*5} walk. Take a number of treats and reward attention, recall, sitting to cross road and loose lead walking` },
    { time: "07:00", description: "Breakfast", notes: `Serve in snuffle rug after walk - 100g of kibble` },
    { time: "07:20", description: "Naps", notes: `Generally sleepy and nap during these times on sofa and in crate` },
    { time: "10:30", description: "Toilet break and play", notes: `Let of of crate for toilet break and explore of garden/bit of play` },
    { time: "11:00", description: "Nap", notes: `Generally tired again and settle myself for a nap on sofa` },
    { time: "12:00", description: "Snack", notes: `Small handful of kibble and a bit of vegetable like celery/carrot. Make me do something for the kibble like direction, down or search training` },
    { time: "12:30", description: "Nap", notes: `Sleep on sofa or in crate` },
    { time: "14:30", description: "Play and explore", notes: `Awake for explore in garden and energetic play with toys and ball. Generally do a poo around this time` },
    { time: "15:00", description: "Snack", notes: `Substantial snack like dentastick, animal part or bone` },
    { time: "15:30", description: "Nap", notes: `Sleep in crate` },
    { time: "17:00", description: "Play", notes: `2nd walk followed by dinner of 100g kibble` },
    { time: "18:30", description: "Nap", notes: `Nap on sofa/crate` },
    { time: "20:30", description: "Play", notes: `Have a play/bite with toys` },
    { time: "21:00", description: "Nap", notes: `Nap on sofa/crate` },
    { time: "22:00", description: "Bed", notes: `Bed time in crate. Can try for a poo if wanted with a quick walk but can hold overnight if gone in evening already` },

];

export const RoutineTable = () => {
  return (
    <div className="md:p-16 p-6" id="routine">
      <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
        My Typical Routine
      </h1>
      <p>
        Rough guide of when I eat and when I&apos;m likely to be engergetic or
        tired. Plase adjust as needed based on what&apos;s happening in the day
      </p>
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
          {ROUTINE.map((r) => (
            <tr key={r.time}>
              {Object.keys(r).map((com, i) => (
                <td key={i} className="px-4 py-2 text-gray-700">
                  {/* @ts-expect-error lazy */}
                  {r[com]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
