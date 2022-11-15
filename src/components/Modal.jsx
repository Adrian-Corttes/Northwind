import "./css/modal.css";

const Modal = ({ id, Ciudad }) => {
  return (
    <div className="modal-w is-open">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {Ciudad.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Modal;
