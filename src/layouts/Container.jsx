function Container({ children, customClass = "" }) {
  return (
    <div className={`w-full mx-auto px-4 ${customClass}`}>
      {children}
    </div>
  );
}

export default Container;
