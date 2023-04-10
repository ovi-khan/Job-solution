import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "A1",
    mark: 60
  },
  {
    name: "A2",
    mark: 60
  },
  {
    name: "A3",
    mark: 58
  },
  {
    name: "A4",
    mark: 55
  },
  {
    name: "A5",
    mark: 52
  },
  {
    name: "A6",
    mark: 42
  },
  {
    name: "A7",
    mark: 60
  },
  {
    name: "A8",
    mark: 60
  }
];

const Statistics = () => {
  return (
    <div>
        <div className="text-center text-5xl font-semibold mt-24">
            <h1>Assaignment Marks Programming Hero</h1>
        </div>
        <ComposedChart
      width={1300}
      height={400}
      data={data}
      margin={{
        top: 100,
        right: 200,
        bottom: 20,
        left: 200
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="mark" barSize={30} fill="#413ea0" />
      <Line type="monotone" dataKey="mark" stroke="#ff7300" />
    </ComposedChart>
    </div>
  );
}
export default Statistics;