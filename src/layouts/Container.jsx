function Container(props) {
    return (
    <div className={`w-full mx-auto px-4 flex justify-between gap-4 ${props.customClass}`}>
       {props.children}
    </div>
    )
}

export default Container