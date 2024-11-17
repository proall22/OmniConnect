const stats = [
  { name: "Total Tasks", stat: "24", change: "12%", changeType: "increase" },
  { name: "Completed Tasks", stat: "18", change: "8%", changeType: "increase" },
  {
    name: "Upcoming Meetings",
    stat: "3",
    change: "2%",
    changeType: "decrease",
  },
  {
    name: "Project Progress",
    stat: "75%",
    change: "5%",
    changeType: "increase",
  },
];

export default function Widgets() {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="card overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.name}
              </dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-gray-900 dark:text-white">
                  {item.stat}
                </div>

                <div
                  className={`inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0
                    ${
                      item.changeType === "increase"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                >
                  <svg
                    className={`-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center 
                        ${
                          item.changeType === "increase"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d={
                        item.changeType === "increase"
                          ? "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                          : "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      }
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">
                    {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                    by
                  </span>
                  {item.change}
                </div>
              </dd>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Recent Activity
        </h2>
        <div className="mt-4 card"></div>
      </div>
    </div>
  );
}
