export function Checkbox({label, id, checked, onChange}) {
    return (
        <>
            <input 
                className="form-check-input" 
                type="checkbox" 
                id={id} 
                checked={checked} 
                onChange={(e) => onChange(e.target.checked)} 
            />
            <label className="ms-2 form-check-label" htmlFor={id}>
                {label}
            </label>
        </>
    );
}