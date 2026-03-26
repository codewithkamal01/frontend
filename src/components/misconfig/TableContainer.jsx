import Pagination from "./Pagination";
import TableRow from "./TableRow";

function TableContainer() {
  const headers = [
    "Resource Name",
    "Issue Type",
    "Provider",
    "Severity",
    "Status",
    "Actions",
  ];

  const thClass =
    "px-6 py-6 text-xs font-bold text-[rgb(168,171,179)] uppercase tracking-wider";

  return (
    <div className="rounded-4xl overflow-hidden shadow-2xl bg-[rgb(21,26,33)]">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-[rgba(32,38,47,0.5)]">
              {headers.map((header, index) => (
                <th
                  key={header}
                  className={`${thClass}
                    ${index === 0 ? "px-8" : ""}
                    ${index === headers.length - 1 ? "px-8 text-right" : ""}
                    ${header === "Severity" ? "text-center" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[rgba(68,72,79,0.1)]">
            <TableRow />
          </tbody>
        </table>
      </div>
       <Pagination/>
    </div>
  );
}

export default TableContainer;
