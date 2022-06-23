import classes from "./table.module.css";

const Table = ({ headData, bodyData, renderBody }) => {
  return (
    <section className={classes.table__wrapper}>
      <table className={classes.table}>
        {headData && (
          <thead>
            <tr>
              {headData.map((item, key) => (
                <th key={key}>{item}</th>
              ))}
            </tr>
          </thead>
        )}
        {bodyData && renderBody && (
          <tbody>
            {bodyData.map((item, index) => renderBody(item, index))}
          </tbody>
        )}
      </table>
    </section>
  );
};

export default Table;
