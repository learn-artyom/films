import './Input.css';

function Input({ onChange, placeholder, className, icon }) {
  const classes = `input ${className}`;
  const iconClasses = `input__icon input__icon--${icon}`;

  return (
    <div className={classes}>
      {icon && <div className={iconClasses}></div>}
      
      <input className="input__element" onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

export default Input;