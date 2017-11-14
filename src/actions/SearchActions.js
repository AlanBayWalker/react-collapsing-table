const _ = require('lodash');

// export const searchRows = ({ searchString, state }) => {
//     let rows = _.cloneDeep(state.rows);
//     let flag, indexes;
//     const upperCaseSearchString = searchString.toUpperCase();
//
//     rows = rows.filter( row => {
//         flag = false;
//         Object.entries(row).forEach(([key, value]) => {
//             let rowValue = value;
//             const currentCell = (typeof rowValue === 'string') ? rowValue.toUpperCase() : rowValue.toString().toUpperCase();
//             indexes = indexesOf(upperCaseSearchString).in(currentCell);
//             if( indexes.length > 0){
//               rowValue = value;
//               flag = true;
//               for(let i = indexes.length -1; i >= 0; i--){
//                 rowValue = insert(rowValue, indexes[i] + searchString.length, '</span>')
//                 rowValue = insert(rowValue, indexes[i], '<span class="highlight">')
//               }
//               row[key] = rowValue;
//             }
//         })
//         return flag ? row : false;
//     });
//
//     // dispatch(updateGlobalSearchString({ value: searchString }));
//     // dispatch(changePageSuccess({ currentPage: 1 }));
//     // dispatch(searchRowsSuccess({ rows }));
//     // dispatch(calculateRows());
// };

export const searchRows = ({ searchString, state }) => {
  let rows = _.cloneDeep(state.initialRows);
  let flag, indexes;
  const upperCaseSearchString = searchString.toUpperCase();

  rows = rows.filter( row => {
        for (let rowValue of Object.values(row)) {
            const currentCell = (typeof rowValue === 'string') ? rowValue.toUpperCase() : rowValue.toString().toUpperCase();
            flag = currentCell.includes(upperCaseSearchString);
            if(flag) break;
        }
        return flag ? row : false;
    });
  return { ...state, searchString, rows };
}

export const clearSearch = ({ state }) => {
    return {
      ...state,
      searchString: '',
      rows: _.cloneDeep(state.initialRows),
      pagination: { ...state.pagination, currentPage: 1, }
    };
};
