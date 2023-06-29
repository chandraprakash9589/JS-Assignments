import React from 'react';

interface TableProps {
  data: any[];
  columns: string[];
}

class Table extends React.Component<TableProps> {
  render() {
    const { data, columns } = this.props;

    return (
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
