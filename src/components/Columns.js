//React
import React from 'react';
import { ColumnsPropType } from '../utils/propTypes';
//Components
import Column from './Column';

const Columns = ({ columns, sortRows, sort, icons }) => {
    const tableColumns = columns.map(({ accessor, label, sortable }) => {
        return <Column key={ accessor }
                       accessor={ accessor }
                       icons={ icons }
                       label={ label }
                       sort={ sort }
                       sortable={ sortable }
                       onClick={ sortRows } />;
    });
    return (
        <thead>
            <tr>
                { tableColumns }
            </tr>
        </thead>
    );
};

Columns.propTypes = ColumnsPropType;

export default Columns
