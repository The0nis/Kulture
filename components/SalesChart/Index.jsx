// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import { ResponsiveBar } from '@nivo/bar';
import style from './SaleChart.module.css';

function SaleChart() {
  const data = [
    {
      country: 'Sun',
      kebabColor: 'hsla(243, 83%, 72%, 1)',
      fries: 82,
      friesColor: 'hsl(349, 70%, 50%)',
      donut: 50,
      donutColor: 'hsl(4, 70%, 50%)',
    },
    {
      country: 'Mon',
      fries: 100,
      friesColor: 'hsl(6, 70%, 50%)',
      donut: 183,
      donutColor: 'hsl(249, 70%, 50%)',
    },
    {
      country: 'Tue',
      fries: 115,
      friesColor: 'hsl(350, 70%, 50%)',
      donut: 50,
      donutColor: 'hsl(269, 70%, 50%)',
    },
    {
      country: 'Wed',
      fries: 50,
      friesColor: 'hsl(186, 70%, 50%)',
      donut: 182,
      donutColor: 'hsl(107, 70%, 50%)',
    },
    {
      country: 'Thurs',
      fries: 156,
      friesColor: 'hsl(317, 70%, 50%)',
      donut: 167,
      donutColor: 'hsl(211, 70%, 50%)',
    },
    {
      country: 'Fri',
      fries: 61,
      friesColor: 'hsl(27, 70%, 50%)',
      donut: 58,
      donutColor: 'hsl(122, 70%, 50%)',
    },
    {
      country: 'Sat',
      fries: 140,
      friesColor: 'hsl(224, 70%, 50%)',
      donut: 86,
      donutColor: 'hsl(125, 70%, 50%)',
    },
    {
      country: 'Sun',
      fries: 140,
      friesColor: 'hsl(224, 70%, 50%)',
      donut: 86,
      donutColor: 'hsl(125, 70%, 50%)',
    },
  ];
  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <p>Sale Chart</p>
      </div>
      <div className={style.bars}>
        <ResponsiveBar
          data={data}
          keys={['fries', 'donut']}
          indexBy="country"
          margin={{ top: 50, right: 10, bottom: 50, left: 100 }}
          padding={0.57}
          theme={{
            axis: {
              ticks: {
                text: {
                  fontSize: 18,
                  fill: 'white',
                },
              },
            },
          }}
          innerPadding={3}
          groupMode="grouped"
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: false }}
          colors={['#817AF3', '#46A46C']}
          defs={[
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#817AF3',
              rotation: -45,
              lineWidth: 7,
              spacing: 12,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 7,
              spacing: 12,
            },
          ]}
          fill={[
            {
              match: {
                id: 'fries',
              },
              id: 'dots',
            },
          ]}
          borderRadius={8}
          borderColor={{
            from: 'color',
            modifiers: [['darker', '2.3']],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 20,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 20,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          enableGridY={false}
          enableLabel={false}
          labelSkipWidth={34}
          labelSkipHeight={11}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
          }}
          legends={[]}
          role="application"
          isFocusable
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={function (e) {
            return (
              e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
            );
          }}
        />
      </div>
    </div>
  );
}

export default SaleChart;
