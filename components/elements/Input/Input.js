// eslint-disable-next-line react/display-name
export const Input = ({ data, addClass="", ...args }) => {
  return (
    <>
      {data.type === "text" ||
      data.type === "email" ||
      data.type === "password" ? (
        <div
          className={`input ${addClass}`}
        >
          <label>{data.label}</label>
          <input
            id={data.id}
            type={data.type}
            name={data.name}
            required={data.isRequired}
            disabled={data.disabled}
            placeholder={data.placeholder}
            {...args}
          />
        </div>
      ) : data.type === "select" ? (
        <div className={`input ${addClass}`}>
          <label htmlFor={data.id}>{data.label}</label>
          <div className="select">
            <select
              id={data.id}
              name={data.name}
              required={data.isRequired}
              {...args}
            >
              <option disabled>{data.placeholder}</option>
              {data.options.map((opt, idxOpt) => (
                <option value={opt} key={"options_" + idxOpt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}
    </>
  );
};
