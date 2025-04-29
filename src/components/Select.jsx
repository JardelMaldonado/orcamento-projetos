function Select({ text, name, options, handleOnChange, value}) {
    return (
          <div className="flex flex-col mb-[1em]">
            <label htmlFor={name} className="mb-[0.6em] font-bold">{text}:</label>
            <select onChange={handleOnChange} value={value || ""} name={name} id={name} className="p-[0.7em] rounded-none border-0">
                <option value=""> Selecione uma opção</option>
                {options.map((option) => (
                  <option value={option.id} key={option.id}>{option.name}</option>
                ))} 
            </select>
          </div>
    )
}

export default Select