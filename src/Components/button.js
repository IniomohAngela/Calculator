import "./Button.css";

const Button = ({ symbol, color, handleClick }) => {
    return(
     <div 
     onClick={() => handleClick(symbol)}
     className="button-wrapper">{symbol}</div>
     style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
);
};

export default Button;
