"use client";

import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  id: string;
  sport: string;
  location: string;
  playersAvailable: string;
  time: string[];
}

export default function MyGames() {
  const data: DataType[] = [
    {
      id: 'ghfshfshfhj6673hfj1',
      sport: 'Cricket',
      playersAvailable: "5/11",
      location: 'Hyderabad',
      time: [new Date().toLocaleTimeString()],
    },
    {
      id: 'jhgjegdjbdg84',
      sport: 'Jim Green',
      playersAvailable: "5/11",
      location: 'London No. 1 Lake Park',
      time: [new Date().toLocaleTimeString()],
    },
    {
      id: 'jkvdkfdjgdjdkdjkgd',
      sport: 'Joe Black',
      playersAvailable: "5/11",
      location: 'Sydney No. 1 Lake Park',
      time: [new Date().toLocaleTimeString()],
    },
  ];

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Sport',
      dataIndex: 'sport',
      key: 'sport',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Players Available',
      dataIndex: 'playersAvailable',
      key: 'playersAvailable',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Time',
      key: 'time',
      dataIndex: 'time'
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-indigo-800">Upcoming Games</h1>
      <Table<DataType> columns={columns} dataSource={data} />

      <h1 className="text-3xl font-bold mb-4 text-indigo-800">Past Games</h1>
      <Table<DataType> columns={columns} dataSource={data} />
    </div>
  )
}