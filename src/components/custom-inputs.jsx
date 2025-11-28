export default function Inputs({
  inputName,
  placeholder,
  form,
  className = "",
}) {
  const { data, setData, errors } = form;
  return (
    <div className="name-container">
      <input
        type="text"
        className={`${className} ${errors?.[inputName] ? "input-error" : ""}`}
        placeholder={placeholder}
        value={data?.[inputName] ?? ""}
        onChange={(event) =>
          setData({
            ...data,
            [inputName]: event.target.value,
          })
        }
      />

      {errors?.[inputName] && (
        <p className="error-message">{errors[inputName]}</p>
      )}
    </div>
  );
}
