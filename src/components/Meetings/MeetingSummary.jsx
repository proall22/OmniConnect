export default function MeetingSummary({ meetings }) {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Meetings for {new Date().toLocaleDateString()}
      </h2>
      <div className="mt-4 space-y-4">
        {meetings.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No meetings scheduled for today
          </p>
        ) : (
          meetings.map((meeting) => (
            <div
              key={meeting.id}
              className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                {meeting.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {meeting.startTime} - {meeting.endTime}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {meeting.agenda}
              </p>
              <div className="mt-3">
                <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Attendees:
                </h4>
                <div className="mt-1 flex flex-wrap gap-2">
                  {meeting.attendees.map((attendee, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {attendee}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
