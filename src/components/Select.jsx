function Select({ text, name, options, handleOnChange, value}) {
    return (
          <div className="flex flex-col mb-[1em]">
            <label htmlFor={name} className="mb-[0.6em] font-bold">{text}:</label>
            <select onChange={handleOnChange} value={value || ""} name={name} id={name} className="p-[0.7em] border border-gray-400 rounded-none placeholder:text-[#7b7b7b] 
             focus:outline-none focus:ring-2 focus:ring-[#222] 
             hover:border-[#222]">
                <option className="border-1" value=""> Selecione uma opção</option>
                {options.map((option) => (
                  <option value={option.id} key={option.id}>{option.name}</option>
                ))} 
            </select>
          </div>
    )
}

export default Select