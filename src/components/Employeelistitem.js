export default function Employeelistitem({ name, title, img }) {
    return (
      <div className="employee">
        <img src={img} className="image" alt={img} />
        <div className="info">
          <h4 className="name">{name}</h4>
          <h6 className="title"> {title}</h6>
        </div>
      </div>
    );
  }