import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {PieChart} from 'react-native-svg-charts';
// import {
//   // LineChart,
//   // BarChart,
//   // PieChart,
//   // ProgressChart,
//   ContributionGraph,
//   // StackedBarChart,
// } from 'react-native-chart-kit';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;
// import Popover from 'react-native-popover-view';
// import {WebView} from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {console_log} from '../../../utils/loggers';
import {Store} from '../../../redux/store';
const commitsData = [
  {date: '2017-01-02', count: 1},
  {date: '2017-01-03', count: 2},
  {date: '2017-01-04', count: 3},
  {date: '2017-01-05', count: 4},
  {date: '2017-01-06', count: 5},
  {date: '2017-01-30', count: 2},
  {date: '2017-01-31', count: 3},
  {date: '2017-03-01', count: 2},
  {date: '2017-04-02', count: 4},
  {date: '2017-03-05', count: 2},
  {date: '2017-02-30', count: 4},
];
const ClientPortfolio = ({navigation, route, ...props}) => {
  const group_id = Store.getState().GroupDetailReducer.groupDetails.id;
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  const [selected, setSelected] = useState(1);

  const data1 = [
    {
      key: 1,
      amount: 50,
      svg: {fill: Colors.primary_color},
    },
    {
      key: 2,
      amount: 50,
      svg: {fill: Colors.black_opacity_25},
    },
    {
      key: 3,
      amount: 40,
      svg: {fill: Colors.grey},
    },
    {
      key: 4,
      amount: 95,
      svg: {fill: Colors.black_opacity_50},
    },
    {
      key: 5,
      amount: 100,
      svg: {fill: Colors.border_color},
    },
    {
      key: 6,
      amount: 80,
      svg: {fill: Colors.black_opacity_25},
    },
    {
      key: 7,
      amount: 50,
      svg: {fill: Colors.black_opacity_40},
    },
    {
      key: 8,
      amount: 90,
      svg: {fill: Colors.black_opacity_70},
    },
    {
      key: 10,
      amount: 50,
      svg: {fill: Colors.black_opacity_25},
    },
    {
      key: 11,
      amount: 40,
      svg: {fill: Colors.grey},
    },
    {
      key: 12,
      amount: 50,
      svg: {fill: Colors.primary_color},
    },
    {
      key: 13,
      amount: 50,
      svg: {fill: Colors.black_opacity_25},
    },
    {
      key: 14,
      amount: 40,
      svg: {fill: Colors.grey},
    },
  ];
  const data2 = [
    {
      key: 1,
      amount: 20,
      svg: {fill: Colors.primary_color},
    },
    {
      key: 2,
      amount: 10,
      svg: {fill: Colors.grey},
    },
    {
      key: 3,
      amount: 80,
      svg: {fill: Colors.black_opacity_25},
    },
    {
      key: 4,
      amount: 40,
      svg: {fill: Colors.grey},
    },
    {
      key: 5,
      amount: 90,
      svg: {fill: Colors.border_color},
    },
    {
      key: 6,
      amount: 80,
      svg: {fill: Colors.primary_color},
    },
    {
      key: 7,
      amount: 40,
      svg: {fill: Colors.grey},
    },
    {
      key: 8,
      amount: 50,
      svg: {fill: Colors.border_color},
    },
    {
      key: 9,
      amount: 40,
      svg: {fill: Colors.border_color},
    },
    {
      key: 10,
      amount: 80,
      svg: {fill: Colors.black_opacity_25},
    },
    {
      key: 11,
      amount: 50,
      svg: {fill: Colors.black_opacity_40},
    },
    {
      key: 12,
      amount: 40,
      svg: {fill: Colors.grey},
    },
    {
      key: 13,
      amount: 90,
      svg: {fill: Colors.border_color},
    },
    {
      key: 14,
      amount: 80,
      svg: {fill: Colors.primary_color},
    },
  ];
  const data3 = [
    {
      key: 1,
      amount: 20,
      svg: {fill: Colors.primary_color},
    },
  ];
  // function shuffle(array) {
  //   let currentIndex = array.length,
  //     randomIndex;

  //   // While there remain elements to shuffle...
  //   while (currentIndex != 0) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }

  //   return array;
  // }

  // const Labels = ({slices, height, width}) => {
  //   console.log('slices', JSON.stringify(slices, null, 2));
  //   return slices.map((slice, index) => {
  //     const {labelCentroid, pieCentroid, data} = slice;
  //     return (
  //       <View>
  //         <Popover
  //           from={
  //             <TouchableOpacity
  //               activeOpacity={0.8}
  //               style={{
  //                 height: 50,
  //                 width: 50,
  //                 backgroundColor: Colors.black,
  //               }}>
  //               {/* <VolumeSymbol style={Styles.VolumeSymbol} /> */}
  //             </TouchableOpacity>
  //           }>
  //           <View
  //             style={{
  //               height: 50,
  //               width: 50,
  //               backgroundColor: Colors.black,
  //             }}></View>
  //         </Popover>
  //         <Text
  //           key={index}
  //           x={pieCentroid[0]}
  //           y={pieCentroid[1]}
  //           fill={'white'}
  //           textAnchor={'middle'}
  //           alignmentBaseline={'middle'}
  //           fontSize={24}
  //           stroke={'black'}
  //           strokeWidth={0.2}>
  //           {data.amount}
  //         </Text>
  //       </View>
  //     );
  //   });
  // };
  // const Labels = ({slices}) => {
  //   return slices.map((slice, index) => {
  //     const {labelCentroid, pieCentroid, data} = slice;
  //     return (
  //       <G key={index}>
  //         <Line
  //           x1={labelCentroid[0]}
  //           y1={labelCentroid[1]}
  //           x2={pieCentroid[0]}
  //           y2={pieCentroid[1]}
  //           stroke={data.svg.fill}
  //         />
  //         {/* <Text
  //           key={index}
  //           x={pieCentroid[0]}
  //           y={pieCentroid[1]}
  //           fill={'white'}
  //           textAnchor={'middle'}
  //           alignmentBaseline={'middle'}
  //           fontSize={24}
  //           stroke={'black'}
  //           strokeWidth={0.2}>
  //           {data.amount}
  //         </Text> */}
  //         <Circle
  //           cx={labelCentroid[0]}
  //           cy={labelCentroid[1]}
  //           r={15}
  //           data={'10'}
  //           fill={data.svg.fill}>
  //           {/* <Text>10</Text> */}
  //         </Circle>
  //       </G>
  //     );
  //   });
  // };
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  // const backAction = () => {
  //   navigation.navigate(NAVIGATION.GROUP_DETAIL);
  // };
  return (
    <>
      <View style={Styles.View_Main}>
        <AutoHeightWebView
          source={{
            uri:
              'https://www.pbvnetwork.com/?group_overview=true&group_id=' +
              group_id,
          }}
          // style={{marginTop: 20, height: 500}}
          viewportContent={'width=device-width, user-scalable=no'}
          scalesPageToFit={true}
          customStyle={{
            marginTop: 20,
            height: 500,
            // width: '100%',
            // height: '100%',
          }}
          // javaScriptEnabled={true}
          // domStorageEnabled={true}
          // startInLoadingState={true}
        />
        {/* <View style={{height: 300, width: 300, alignSelf: 'center'}}> */}
        {/* <PieChart
            style={{
              height: 300,
              position: 'absolute',
              // alignSelf: 'center',
            }}
            valueAccessor={({item}) => item.amount}
            // data={shuffle(data)}
            data={data3}
            spacing={0}
            padAngle={0}
            outerRadius={'30%'}
            innerRadius={'0%'}></PieChart> */}
        {/* <PieChart
            style={{
              height: 300,
              backgroundColor: Colors.transparant,
              // position: 'absolute',
            }}
            valueAccessor={({item}) => item.amount}
            data={data1}
            spacing={0}
            padAngle={0}
            outerRadius={'95%'}
            innerRadius={'50%'}>
            <Labels />
          </PieChart> */}
        {/* <PieChart
            style={{
              height: 300,
              marginTop: 150,
              position: 'absolute',
              // alignSelf: 'center',
              backgroundColor: Colors.transparant,
            }}
            valueAccessor={({item}) => item.amount}
            data={data2}
            spacing={0}
            padAngle={0}
            outerRadius={'60%'}
            innerRadius={'30%'}></PieChart> */}
      </View>
      {/* <View
          style={{
            flexDirection: 'row',
            //  marginHorizontal:50
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelected(1)}
            style={
              selected == 1
                ? Styles.touchable_header_selected
                : Styles.touchable_header_not_selected
            }>
            <Text style={Styles.header_text}>Significant Clients</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelected(2)}
            style={
              selected == 2
                ? Styles.touchable_header_selected
                : Styles.touchable_header_not_selected
            }>
            <Text style={Styles.header_text}>Active Lawyer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelected(3)}
            style={
              selected == 3
                ? Styles.touchable_header_selected
                : Styles.touchable_header_not_selected
            }>
            <Text style={Styles.header_text}>Counterparts</Text>
          </TouchableOpacity>
        </View> */}

      {/* <View style={{marginTop: 50}}>
          <ContributionGraph
            values={commitsData}
            endDate={new Date('2017-04-01')}
            numDays={105}
            width={screen_width - 50}
            height={220}
            // chartConfig={chartConfig}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
          />
        </View> */}
      {/* </View> */}
    </>
  );
};
export default ClientPortfolio;
