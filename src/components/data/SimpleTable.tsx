'use client';

import classNames from 'classnames';
import { Fragment } from 'react/jsx-runtime';

const SimpleTable = (props: Data.SimpleTableProps) => {
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
                {columns.map((col) => {
                  const cellValue = item[col.key];

                  return (
                    <td
                      key={col.key}
                      className={classNames('px-6 py-4 first:pl-8 last:pr-8', {
                        'min-w-[320px]': col.key === 'description',
                      })}
                    >
                      {col.key === 'property' ? (
                        <span className="font-mono text-[14px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                          {cellValue}
                        </span>
                      ) : col.key === 'type' ? (
                        <div className="flex flex-wrap items-center gap-1.5 font-mono">
                          {Array.isArray(cellValue) ? (
                            cellValue.map((typeLabel, i) => (
                              <Fragment key={i}>
                                <code className="rounded-md border border-neutral-700 bg-neutral-700 px-1.5 py-0.5 text-[12px] text-secondary-300 dark:border-neutral-700 dark:bg-neutral-700 dark:text-primary-300">
                                  {typeLabel}
                                </code>
                                {i < cellValue.length - 1 && (
                                  <span className="text-[10px] font-light text-neutral-400 dark:text-neutral-600">
                                    |
                                  </span>
                                )}
                              </Fragment>
                            ))
                          ) : (
                            <code className="rounded-md border border-neutral-600 bg-neutral-50 px-1.5 py-0.5 text-[12px] text-secondary-600 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-primary-300">
                              {cellValue}
                            </code>
                          )}
                        </div>
                      ) : col.key === 'default' ? (
                        <code className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-[12px] text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
                          {cellValue || '-'}
                        </code>
                      ) : (
                        <span className="text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {cellValue}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleTable;
