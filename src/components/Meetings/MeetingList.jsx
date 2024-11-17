import { motion } from 'framer-motion';

const meetings = [
  {
    id: 1,
    title: 'Weekly Team Sync',
    date: '2024-02-20T10:00',
    duration: '1h',
    attendees: [
      { name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
      { name: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
    ],
    status: 'upcoming',
  },
   
];

export default function MeetingList() {
  return (
    <div className="space-y-4">
      {meetings.map((meeting, index) => (
        <motion.div
          key={meeting.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {meeting.title}
              </h3>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {new Date(meeting.date).toLocaleString()}
                </span>
                <span className="flex items-center">
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {meeting.duration}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {meeting.attendees.map((attendee) => (
                  <img
                    key={attendee.name}
                    className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src={attendee.avatar}
                    alt={attendee.name}
                  />
                ))}
              </div>
              <button className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-400 dark:hover:bg-blue-900">
                Join
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}