function Input({ type, text, name, placeholder, handleOnChange, value}) {
    return (
          <div className="flex flex-col mb-[1em]">
            <label htmlFor={name} className="mb-[0.6em] font-bold">{text}:</label>
            <input className="p-[0.7em] rounded-none border-0 placeholder:text-[#7b7b7b]"
            type={type} 
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />
          </div>
    )
}

export default Input