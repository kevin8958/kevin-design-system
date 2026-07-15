const Table = (props: Data.TableProps) => {
  const { columns = [], data = [] } = props;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-neutral-200 bg-white/50 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-990/50">
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-4 font-semibold text-neutral-500 first:pl-8 last:pr-8 dark:text-neutral-400"
                >
                  <span className="flex items-center gap-2">{col.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/50">
            {data.map((item) => (
              <tr
                key={item.id}
                className="group transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/30"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 first:pl-8 last:pr-8">
                    <span className="text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {item[col.key]}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
