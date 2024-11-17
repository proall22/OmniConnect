import { motion } from "framer-motion";
import SkillTracker from "./SkillTracker";
import LearningResources from "./LearningResources";
import DevelopmentStats from "./DevelopmentStats";
import GoalTracker from "./GoalTracker";

export default function PersonalDevelopment() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Personal Development Hub
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Track your progress, set goals, and enhance your professional
            journey
          </p>
        </div>

        <div className="mb-8">
          <DevelopmentStats />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="card">
            <SkillTracker />
          </div>
          <div className="card">
            <LearningResources />
          </div>
        </div>

        <div className="mt-8 card">
          <GoalTracker />
        </div>
      </div>
    </div>
  );
}
