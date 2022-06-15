import React from "react";

function Button({text, className}) {
  return (
    <div>
      <button class={`font-bold py-2 px-4 ${className}`} >
        {text}
      </button>
    </div>
  );
}

export default Button;
