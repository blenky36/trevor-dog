import { Hero } from "@/components/Hero";
import { CommandsTable } from "@/components/CommandsTable";
import { RoutineTable } from "@/components/RoutineTable";
import { General } from "@/components/General";

export default function Home() {
  return (
    <div className="flex gap-24 flex-col">
      <Hero />
      <General />
      <CommandsTable />
      <RoutineTable />
    </div>
  );
}
