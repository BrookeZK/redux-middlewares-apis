const middlewareLogger = store => next => action => {
  console.log('Original State:', store.getState());
  console.log('Current Action:', action);
  next(action);
  console.log('New Updated State:', store.getState());
};

// const middlewareLogger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log('Original State:', store.getState());
//       console.log('Current Action:', action);
//       next(action);
//       console.log('New Updated State:', store.getState());
//     }
//   }  
// };

export default middlewareLogger;


  // if (action.type === 'INCREMENT_COUNTER'){
  //   return;
  // }