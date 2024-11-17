import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isDarkMode, toggleDarkMode } from '../../utils/darkmode';

export default function Preferences() {
  const [preferences, setPreferences] = useState({
    notifications: {
      email: true,
      desktop: true,
      mobile: false,
      meetings: true,
      tasks: true,
      updates: true
    },
    theme: isDarkMode() ? 'dark' : 'light',
    language: 'en',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    accessibility: {
      reduceMotion: false,
      highContrast: false,
      largeText: false
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  const handleThemeChange = (newTheme) => {
    setPreferences(prev => ({ ...prev, theme: newTheme }));
    if (newTheme === 'dark' && !isDarkMode()) {
      toggleDarkMode();
    } else if (newTheme === 'light' && isDarkMode()) {
      toggleDarkMode();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSaveStatus(null);

    try {
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      setSaveStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <form onSubmit={handleSubmit}>
 
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Notifications
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Choose how you want to be notified about updates.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(preferences.notifications).map(([key, value]) => (
              <motion.div
                key={key}
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3"
              >
                <input
                  id={`notification-${key}`}
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setPreferences({
                    ...preferences,
                    notifications: {
                      ...preferences.notifications,
                      [key]: e.target.checked
                    }
                  })}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
                />
                <label
                  htmlFor={`notification-${key}`}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)} Notifications
                </label>
              </motion.div>
            ))}
          </div>
        </section>

        
        <section className="mt-10 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Appearance
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Customize how OmniConnect looks for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme
              </label>
              <select
                value={preferences.theme}
                onChange={(e) => handleThemeChange(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Language
              </label>
              <select
                value={preferences.language}
                onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="ja">日本語</option>
              </select>
            </div>
          </div>
        </section>

        
        <section className="mt-10 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Accessibility
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Make OmniConnect work better for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(preferences.accessibility).map(([key, value]) => (
              <motion.div
                key={key}
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3"
              >
                <input
                  id={`accessibility-${key}`}
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setPreferences({
                    ...preferences,
                    accessibility: {
                      ...preferences.accessibility,
                      [key]: e.target.checked
                    }
                  })}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
                />
                <label
                  htmlFor={`accessibility-${key}`}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {key.split(/(?=[A-Z])/).join(' ')}
                </label>
              </motion.div>
            ))}
          </div>
        </section>

         
        <div className="mt-10 flex items-center justify-end space-x-4">
          <AnimatePresence>
            {saveStatus && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-sm ${
                  saveStatus === 'success'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {saveStatus === 'success' ? 'Preferences saved!' : 'Failed to save preferences'}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-2.5 text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {isSubmitting ? (
              <>
                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Saving...
              </>
            ) : (
              'Save Preferences'
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
}