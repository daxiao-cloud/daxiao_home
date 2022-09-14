import { Box, Grid } from 'grommet';

const HomeTable = ({ list = [] }) => {
  return (
    <Box id='HomeTable' style={{ border: '2px solid #0099FF', borderRadius: '4px' }}>
      {list.map(({ gap = '15px', rows, columns, areas, areaList = [], ...props } = {}, i) => {
        return (
          <Grid
            width={'90vw'}
            key={i}
            pad='10px'
            gap={gap}
            rows={rows}
            columns={columns}
            areas={areas}
            {...props}
          >
            {areaList.map(({ justify = 'center', area, background, children, ...props }) => (
              <Box
                align='center'
                flex={true}
                {...props}
                justify={justify}
                gridArea={area}
                background={background}
              >
                {children}
              </Box>
            ))}
          </Grid>
        );
      })}
    </Box>
  );
};

export { HomeTable };
