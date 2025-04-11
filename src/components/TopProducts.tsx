"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Progress } from "./ui/progress";

type Product = {
  id: number;
  name: string;
  popularity: number;
  sales: number;
};

const data: Product[] = [
  {
    id: 1,
    name: "Home Decor Range",
    popularity: 75,
    sales: 45,
  },
  {
    id: 2,
    name: "Disney Princess Pink Bag 18'",
    popularity: 60,
    sales: 29,
  },
  {
    id: 3,
    name: "Bathroom Essentials",
    popularity: 55,
    sales: 18,
  },
  {
    id: 4,
    name: "Apple Smartwatches",
    popularity: 30,
    sales: 25,
  },
];

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-[#96A5B8] pl-5">#</div>,
    cell: ({ row }) => (
      <div className="text-[#444A6D] pl-5">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className="text-[#96A5B8]">Name</div>,
    cell: ({ row }) => (
      <div className="text-[#444A6D]">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "popularity",
    header: () => <div className="text-[#96A5B8]">Popularity</div>,
    cell: ({ row }) => {
      const bgColor = calculateBgColor(Number(row.id));
      const indicatorColor = calculateIndicatorColor(Number(row.id));
      return (
        <Progress
          value={row.getValue("popularity")}
          className={`${bgColor} ${indicatorColor}`}
        />
      );
    },
  },
  {
    accessorKey: "sales",
    header: () => <div className="text-[#96A5B8]">Sales</div>,
    cell: ({ row }) => {
      const bgColor = calculateBgColor(Number(row.id));
      const borderColor = calculateBorderColor(Number(row.id));
      const textColor = calculateTextColor(Number(row.id));
      return (
        <div
          className={`px-3 py-1 rounded-[8px] border w-min ${bgColor} ${textColor} ${borderColor}`}
        >
          {row.getValue("sales")}%
        </div>
      );
    },
  },
];

const TopProductsCard = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="col-start-1 col-end-4 bg-white rounded-[20px]">
      <h2 className="font-semibold text-[20px] px-8 pt-8">Top Products</h2>
      <Table className="pb-8">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TopProductsCard;

const calculateBgColor = (id: number) => {
  switch (id % 4) {
    case 0:
      return "bg-[#FFD5A4]";
    case 1:
      return "bg-[#CDE7FF]";
    case 2:
      return "bg-[#8CFAC7]";
    case 3:
      return "bg-[#C5A8FF]";
  }
};

const calculateIndicatorColor = (id: number) => {
  switch (id % 4) {
    case 0:
      return "*:bg-[#FF8F0D]";
    case 1:
      return "*:bg-[#0095FF]";
    case 2:
      return "*:bg-[#00E096]";
    case 3:
      return "*:bg-[#884DFF]";
  }
};

const calculateTextColor = (id: number) => {
  switch (id % 4) {
    case 0:
      return "text-[#FF8F0D]";
    case 1:
      return "text-[#0095FF]";
    case 2:
      return "text-[#00E096]";
    case 3:
      return "text-[#884DFF]";
  }
};

const calculateBorderColor = (id: number) => {
  switch (id % 4) {
    case 0:
      return "border-[#FF8F0D]";
    case 1:
      return "border-[#0095FF]";
    case 2:
      return "border-[#00E096]";
    case 3:
      return "border-[#884DFF]";
  }
};
