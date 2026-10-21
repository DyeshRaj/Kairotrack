import { Sparkles } from "lucide-react";
import {
  FaDroplet,
  FaPersonRunning,
  FaBookOpen,
  FaDumbbell,
  FaPenNib,
  FaBullseye,
} from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";

const HABITS = [
  { Icon: FaDroplet, color: "#0ea5e9", label: "Hydration" },
  { Icon: FaPersonRunning, color: "#ef4444", label: "Movement" },
  { Icon: FaBookOpen, color: "#6366f1", label: "Reading" },
  { Icon: GiMeditation, color: "#8b5cf6", label: "Mindfulness" },
  { Icon: FaDumbbell, color: "#f59e0b", label: "Fitness" },
  { Icon: FaPenNib, color: "#ec4899", label: "Journaling" },
  { Icon: FaBullseye, color: "#10b981", label: "Goals" },
];

export default function OrbitingHabits() {
  return (
    <div className="card grid w-[300px] grid-cols-3 gap-3 p-4 sm:w-[400px] sm:gap-4 sm:p-6 lg:w-[460px]">
      {HABITS.map(({ Icon, color, label }) => (
        <div
          key={label}
          className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border backdrop-blur-md"
          style={{
            background: `${color}1a`,
            borderColor: `${color}44`,
            color,
          }}
        >
          <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="text-xs font-medium text-soft">{label}</span>
        </div>
      ))}
      <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
        <Sparkles className="h-7 w-7 sm:h-8 sm:w-8" />
        <span className="text-xs font-medium">Keep going</span>
      </div>
    </div>
  );
}
