function Input({ type, text, name, placeholder, handleOnChange, value}) {
    return (
          <div className="flex flex-col mb-[1em]">
            <label htmlFor={name} className="mb-[0.6em] font-bold">{text}:</label>
            <input className="p-[0.7em] border border-gray-400 rounded-none placeholder:text-[#7b7b7b] 
             focus:outline-none focus:ring-2 focus:ring-[#222] 
             hover:border-[#222]"
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