import React, { Fragment, useMemo } from "react";
import { useTable } from "react-table";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import classnames from "classnames";
import {
  ClockIcon,
  HomeIcon,
  MenuAlt1Icon,
  ViewListIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  PencilAltIcon,
  SearchIcon,
  SelectorIcon,
  TrashIcon,
  UserAddIcon,
} from "@heroicons/react/solid";

const projects = [
  {
    id: 1,
    title: "GraphQL API",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl: "/images/user.jpg",
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl: "/images/user.jpg",
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl: "/images/user.jpg",
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl: "/images/user.jpg",
      },
    ],
    totalMembers: 12,
    lastUpdated: "March 17, 2020",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  // More projects...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const buildTable = (t, columns, data) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTable({
      columns,
      data,
      initialState: {
        hiddenColumns: columns
          .filter((column) => column.hidden)
          .map((column) => column.id),
      },
    });

  const cellClassName = (cell) => {
    const common = "px-6 py-3 whitespace-nowrap text-sm font-medium";
    return classnames({
      [`${common} max-w-0 w-full text-gray-900`]: cell.column.id === "project",
      [`${common} text-gray-500`]: cell.column.id === "members",
      [`${common} hidden md:table-cell text-gray-500 text-right`]:
        cell.column.id === "last_updated",
      "pr-6": cell.column.id === "actions",
    });
  };

  const renderCell = (cell) => {
    const { value } = cell;
    console.log(cell);
    switch (cell.column.id) {
      case "project":
        return renderProject(value);
      case "members":
        return renderMembers(value);
      case "last_updated":
        return cell.render("Cell");
      case "actions":
        return renderActions(value);
    }
  };
  const renderProject = (data) => {
    return (
      <div className="flex items-center space-x-3 lg:pl-2">
        <div
          className={classNames(
            data.bgColorClass,
            "flex-shrink-0 w-2.5 h-2.5 rounded-full"
          )}
          aria-hidden="true"
        />
        <a href="#" className="truncate hover:text-gray-600">
          <span>
            {data.title}{" "}
            <span className="text-gray-500 font-normal">in {data.team}</span>
          </span>
        </a>
      </div>
    );
  };
  const renderMembers = (data) => {
    return (
      <div className="flex items-center space-x-2">
        <div className="flex flex-shrink-0 -space-x-2">
          {data.members.map((member) => (
            <div key={member.name} className="max-w-max max-h-6">
              <Image
                key={member.handle}
                className="max-w-none rounded-full ring-2 ring-white"
                src={member.imageUrl}
                alt={member.name}
                width="24"
                height="24"
              />
            </div>
          ))}
        </div>
        {data.totalMembers > data.members.length ? (
          <span className="flex-shrink-0 text-xs leading-5 font-medium">
            +{data.totalMembers - data.members.length}
          </span>
        ) : null}
      </div>
    );
  };
  const renderActions = (data) => {
    return (
      <Menu as="div" className="relative flex justify-end items-center">
        <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          <span className="sr-only">Open options</span>
          <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "group flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    <PencilAltIcon
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "group flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    <DuplicateIcon
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Duplicate
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "group flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    <UserAddIcon
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Share
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "group flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    <TrashIcon
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Delete
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };

  // Render the UI for your table
  return (
    <>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Projects
          </h2>
        </div>
        <ul
          role="list"
          className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <li key={row.values.id} {...row.getRowProps()}>
                <a
                  href="#"
                  className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                >
                  <span className="flex items-center truncate space-x-3">
                    <span
                      className={classNames(
                        row.values.project.bgColorClass,
                        "w-2.5 h-2.5 flex-shrink-0 rounded-full"
                      )}
                      aria-hidden="true"
                    />
                    <span className="font-medium truncate text-sm leading-6">
                      {row.values.project.title}{" "}
                      <span className="truncate font-normal text-gray-500">
                        in {row.values.project.team}
                      </span>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Projects table (small breakpoint and up) */}
      <div className="hidden mt-8 sm:block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table {...getTableProps()} className="min-w-full">
            <thead>
              {
                // Loop over the header rows
                headerGroups.map((headerGroup, i) => (
                  // Apply the header row props
                  <tr
                    key={i}
                    {...headerGroup.getHeaderGroupProps()}
                    className="border-t border-gray-200"
                  >
                    {
                      // Loop over the headers in each row
                      headerGroup.headers.map((column) => (
                        // Apply the header cell props
                        <th
                          key={column.id}
                          {...column.getHeaderProps()}
                          className="px-6 py-3 whitespace-nowrap border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <span className="lg:pl-2">
                            {column.id !== "actions" && column.render("Header")}
                          </span>
                        </th>
                      ))
                    }
                  </tr>
                ))
              }
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-100"
            >
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr key={row.id} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          key={cell.column.id}
                          {...cell.getCellProps()}
                          className={cellClassName(cell)}
                        >
                          {renderCell(cell)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const InProgressTable = ({ t, ...props }) => {
  const data = useMemo(() => projects, []);
  const columns = useMemo(
    () => [
      {
        id: "project",
        Header: t("Project"),
        accessor: (row) => {
          return {
            title: row.title,
            initials: row.initials,
            team: row.team,
            bgColorClass: row.bgColorClass,
          };
        },
      },
      {
        id: "members",
        Header: t("Members"),
        accessor: (row) => {
          return {
            members: row.members,
            totalMembers: row.totalMembers,
          };
        },
      },
      {
        id: "last_updated",
        Header: t("Last updated"),
        accessor: "lastUpdated",
      },
      {
        id: "id",
        Header: t("Id"),
        accessor: "id",
        hidden: true,
      },
      {
        id: "style",
        Header: t("Style"),
        accessor: (row) => {
          return {
            pinned: row.pinned,
          };
        },
        hidden: true,
      },
      {
        id: "actions",
        Header: t("Actions"),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return <>{buildTable(t, columns, data)}</>;
};

export default InProgressTable;
