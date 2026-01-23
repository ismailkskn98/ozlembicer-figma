import React from 'react'

export default function CustomInput({ label, sublabel, name, type = "text", register, error, inputMode, autoComplete, placeholder }) {
    return (
        <article className='flex flex-col items-start gap-5'>
            <div className='w-full flex flex-col items-start justify-end text-[15px] text-coffee-dark h-15'>
                <label htmlFor={name} className='font-bold'>{label}</label>
                <p className=''>{sublabel}</p>
            </div>
            <div className='col-span-4 relative flex flex-col w-full'>
                <input
                    type={type}
                    id={name}
                    name={name}
                    inputMode={inputMode}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    {...register}
                    className='w-full bg-[#FFFCF8] border border-coffee-dark px-4 py-2 h-15 outline-none'
                />
                {error && <p className='text-[#EB3B3B] text-sm mt-1'>{error.message}</p>}
            </div>
        </article>
    )
}
