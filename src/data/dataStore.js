const keyGenFun = () => {
  const keyArray = [];
  const min = 0;
  const max = 200;
  for (let i = 0; i < 100; i++) {       
    keyArray.push(Math.floor(Math.random() * (max - min)) + min);
  }
  function remDuplic(arr) {
    return arr.filter((val, index) => arr.indexOf(val) === index);
  }
  return remDuplic(keyArray).sort(function(a, b){
    return a-b;
  });
};

const keysArr = keyGenFun();

export const dataStore = {
  app: {
    version: '',
  },
  appHeader: {
    bcgImage: 'https://images.pexels.com/photos/2146386/pexels-photo-2146386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    bcgImageAlt: 'https://images.pexels.com/photos/1376766/nature-milky-way-galaxy-space-1376766.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    bcgImageAlt2: 'https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  title: {
    titleText: 'React GALLERY app',
    subtitleText: 'COLLECT YOUR MEMORIES IN ONE PLACE',
  },
  gallery: {
    keyGenerator: keysArr,
  },
};