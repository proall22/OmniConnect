import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import TaskManagement from "./components/Tasks/TaskManagement";
import MeetingManagement from "./components/Meetings/MeetingManagement";
import PersonalDevelopment from "./components/PersonalDevelopment/PersonalDevelopment";
import AnalyticsPage from "./components/Analytics/AnalyticsPage";
import SettingsPage from "./components/Settings/SettingPage";
import ErrorBoundary from "./components/common/ErrorBoundary";

import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";
import LoadingScreen from "./components/common/LoadingScreen";
import { useState, useEffect } from "react";
import AboutPage from "./components/Pages/AboutPage";

import ProfilePage from "./components/Profile/ProfilePage";
import FAQ from "./components/Home/FAQ";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000);
	}, []);

	return (
		<div className="min-h-screen bg-fixed">
			<div className="fixed inset-0 bg-gray-50 dark:bg-gray-900" />

			{isLoading ? (
				<LoadingScreen />
			) : (
				<div className="relative flex min-h-screen flex-col">
					<ErrorBoundary>
						<ScrollProgress />
						<Navbar />
						<main className="flex-1 pt-16">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/about" element={<AboutPage />} />
								<Route path="/tasks" element={<TaskManagement />} />
								<Route path="/meetings" element={<MeetingManagement />} />
								<Route path="/development" element={<PersonalDevelopment />} />
								<Route path="/analytics" element={<AnalyticsPage />} />
								<Route path="/settings" element={<SettingsPage />} />
								<Route path="/profile" element={<ProfilePage />} />
								<Route path="/faq" element={<FAQ />} />

								<Route path="*" element={<Navigate to="/" replace />} />
							</Routes>
						</main>
						<Footer />
						<BackToTop />
					</ErrorBoundary>
				</div>
			)}
		</div>
	);
}

export default App;
