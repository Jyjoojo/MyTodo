export function Input({ placeholder, id, name, value, onChange}) {
    return (
        <input  
            className="form-control"
            name={name}
            type="text" 
            placeholder={placeholder} 
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)} 
        />
    );
}