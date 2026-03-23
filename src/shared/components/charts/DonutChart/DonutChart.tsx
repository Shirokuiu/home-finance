import { Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from 'recharts';
import { DefaultConfig } from 'src/shared/components/charts/DonutChart/constants';
import type { DonutChartProps } from 'src/shared/components/charts/DonutChart/types';
import { useMemo } from 'react';
import { mapData } from 'src/shared/components/charts/DonutChart/helpers';
import type { PieSectorShapeProps } from 'recharts/types/polar/Pie';

function DonutChart({
  data,
  innerRadius = DefaultConfig.InnerRadius,
  outerRadius = DefaultConfig.OuterRadius,
  height = DefaultConfig.Height,
}: DonutChartProps) {
  // TODO Удалить, когда с бэка придут цвета (colors)
  const preparedData = useMemo(
    () => mapData(data).map((item) => ({ ...item, fill: item.color })),
    [data],
  );

  const renderShape = (props: PieSectorShapeProps & { isActive?: boolean }) => {
    const nextOuterRadius = props.isActive
      ? Number(props.outerRadius) + DefaultConfig.OuterRadiusHover
      : Number(props.outerRadius);

    return <Sector {...props} outerRadius={nextOuterRadius} />;
  };

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={preparedData}
            dataKey="value"
            nameKey="name"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            stroke="none"
            shape={renderShape}
          />
          <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e7e9ef' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DonutChart;
