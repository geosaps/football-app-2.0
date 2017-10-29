export default (state = {},action) {
  switch(action.types){
      case 'RECEIVE_DATA':
             Object.assign({},...state,{
               action.data 
                 }
              }) 
      default:
         return state
  }
}