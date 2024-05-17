import React from 'react';
interface Column {
    label: string;
    key: string;
  }
  
  interface DataItem {
    [key: string]: any;
  }
interface DataTableProps<T> {
  data: T[];
  columns: Column[];
}

const DataTable = <T extends DataItem>({ data, columns }: DataTableProps<T>) => {
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <colgroup>
            {columns.map((column, index) => (
              <col key={index} className={`w-${column.key === 'name'? '5' : 'auto'}`} />
            ))}
          </colgroup>
          <thead>
            <tr className="dark:bg-gray-300">
              {columns.map((column, index) => (
                <th key={index} className="p-3">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`} className="px-3 py-2">
                    {item[column.key]}
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

export default DataTable;