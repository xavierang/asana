const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;

// describe("visibility filter reducer", () => {
//   it("test 1", () => {
//     expect(visibilityFilter(undefined, {})).toEqual([
//       {
//         filter: "SHOW_ALL"
//       }
//     ]);
//   });
// });
