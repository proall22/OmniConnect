import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function CreateMeeting({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    duration: '1h',
    description: '',
    attendees: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-[10%] z-50 mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 sm:inset-x-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Meeting</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700"
                    required
                  />
                </div>
                
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Create Meeting
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}