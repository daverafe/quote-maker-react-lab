
export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      const quote ={
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author
      }
      return {state: state.concat(quote)}
    default:
      return state;
  }
}
