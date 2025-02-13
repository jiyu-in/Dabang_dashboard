import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const DonutChart = ({data}) => {
  const [selectedValue, setSelectedValue] = useState(data[0].value);

  const handleClick = (_, index) => {
    setSelectedValue(data[index].value);
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px", aspectRatio: "1", margin: "auto" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data.slice().reverse()} 
            // data={data}
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            paddingAngle={-50} // 여백 없이 설정
            dataKey="value"
            onClick={handleClick}
            cornerRadius={50} // 둥근 모양 적용
            stroke="none" // border 없애기
            style={{ outline: "none" }}
          >
            {data.slice().reverse().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {/* 중앙에 값 표시 */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="24px"
            fontWeight="bold"
            fill="#333"
          >
            {selectedValue}%
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
