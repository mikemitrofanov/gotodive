import React from "react";
import './CheckField.scss'

function Checkfield({ label, name, checked, defaultChecked, value, style, onChange, className }) {
  return (
    <div className={"checkfield " + className} style={style}>
      <label className="checkfield-container">
        <div className="checkfield-check">
          <input
            className="checkfield-checkinput"
            type="checkbox"
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            checked={checked ? checked : null}
            onChange={onChange}
          />
          <div className="checkfield-checksymbol">
            <span className="checkfield-checksymbol-state">
              <svg width="100%" height="100%" viewBox="0 0 512 512">
                <path d="M223.9,329.7c-2.4,2.4-5.8,4.4-8.8,4.4s-6.4-2.1-8.9-4.5l-56-56l17.8-17.8l47.2,47.2l124.8-125.7l17.5,18.1L223.9,329.7z" />
              </svg>
            </span>
          </div>
        </div>
        {label ? <div className="checkfield-label">{label}</div> : null}
      </label>
    </div>
  );
}

export default Checkfield;
