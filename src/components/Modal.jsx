import "./css/modal.css";

const Modal = ({ id, Ciudad }) => {
  return (
    <div className="modal-w is-open">
      <h3>Departamento</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quae possimus consectetur voluptas, reiciendis rem nobis doloribus illo aspernatur molestiae rerum accusamus. Neque odit minima deserunt sapiente perferendis possimus ratione!</p>
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
