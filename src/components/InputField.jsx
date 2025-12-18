"use client";

import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

// export const InputField = ({ label, conClassName, prefixIcon, error, ...props }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className={`w-full flex items-center flex-col h-[80px] ${conClassName || ''}`}>
//       {label ? (
//         <label
//           className={`block capitalize tracking-wide w-full leading-[20px] text-[12px] font-[500] mb-2 ${
//             error ? 'text-[red]' : 'text-gray-700'
//           }`}
//           htmlFor={props.id}
//         >
//           {label} {props.required && "*"}
//         </label>
//       ) : null}

//       <div
//         className={`w-full gap-3 relative flex items-center border rounded-[12px] h-[54px] ${
//           error ? 'border-[red]' : 'border-gray-400'
//         }`}
//       >
//         {prefixIcon && (
//           <div className="absolute h-full left-0 flex items-center justify-center ml-4">
//             <Image src={prefixIcon} alt="Icon" width={18} height={16} />
//           </div>
//         )}

//         <input
//           className={`my-input w-full h-full border-none rounded-[12px] outline-none ${
//             prefixIcon ? 'pl-12' : 'pl-4'
//           } pr-12 ${
//             error ? '' : 'focus:border-gray-500 focus:ring-1 focus:ring-gray-300'
//           }`}
//           {...props}
//           type={showPassword ? "text" : props.type}
//         />

//         {props.type === "password" && (
//           <button
//             type="button"
//             onClick={togglePasswordVisibility}
//             className="absolute h-full right-0 py-2 px-3 flex items-center justify-center"
//           >
//             {showPassword ? (
//               <IoMdEye color="gray" size={25} />
//             ) : (
//               <IoMdEyeOff color="gray" size={25} />
//             )}
//           </button>
//         )}
//       </div>

//       {error && (
//         <div className="text-[red] text-xs w-full text-right">{error}</div>
//       )}
//     </div>
//   );
// };

export const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  required = false,
  containerClassName = "",
  labelClassName = "",
  outerCon = "",
  disabled = false,
  prefixIcon = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`w-full flex flex-col min-h-[100px] ${outerCon}`}>
      {/* Label */}
      <label htmlFor={name} className={`block capitalize tracking-wide text-sm mb-1 font-bold ${labelClassName}`}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input Wrapper */}
      <div
        className={`relative w-full h-[46px] rounded-lg bg-[#eee] flex items-center border
          ${error ? "border-red-500" : "border-transparent"}
          focus-within:ring-2 focus-within:ring-[#FFBF1B]
          ${containerClassName}`}
      >
        <input
          id={name}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className="app-input"
        />

        {/* Password toggle */}
        {type === "password" && (
          <button type="button" onClick={() => setShowPassword((p) => !p)} className="absolute right-2">
            {showPassword ? <IoMdEyeOff size={18} /> : <IoMdEye size={18} />}
          </button>
        )}
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
