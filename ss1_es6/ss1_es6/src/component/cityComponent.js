import  React  from "react";

// const CityList = () =>{
//     return createElement(
//     'ul',
//     null,
//     createElement('li',null,'Hà Nội'),
//     createElement('li',null,'Đà Nẵng'),
//     createElement('li',null,'Hải Phòng'),
//     createElement('li',null,'TP. Hồ Chí Minh'),
//     createElement('li',null,'Cần Thơ'),

// )
// };
// export default CityList;

const listCities = [
  "Hà Nội",
  "Đà Nẵng",
  "Hải Phòng",
  "TP. Hồ Chí Minh",
  "Cần Thơ",
];
const CityList = () => {
  return React.createElement(
    'ul',
    null,
    listCities.map((city, index) =>
      React.createElement('li', { key: index }, city)
    )
  );
};


export default CityList;