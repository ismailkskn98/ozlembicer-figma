import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { IoCloudUploadOutline, IoClose } from "react-icons/io5";
import Image from 'next/image'

export default function ImageUpload() {
    const [files, setFiles] = useState([])
    const { setValue, watch } = useFormContext()

    const onDrop = useCallback(acceptedFiles => {
        const remainingSlots = 4 - files.length
        const filesToAdd = acceptedFiles.slice(0, remainingSlots)
        const newFiles = [...files, ...filesToAdd]
        setFiles(newFiles)
        setValue('images', newFiles)
    }, [files, setValue])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
        },
        multiple: true,
        maxFiles: 4,
        disabled: files.length >= 4
    })

    const removeFile = (indexToRemove) => {
        const updatedFiles = files.filter((_, index) => index !== indexToRemove)
        setFiles(updatedFiles)
        setValue('images', updatedFiles)
    }

    return (
        <div className='col-span-2'>
            <div {...getRootProps()} className='mb-4'>
                <input {...getInputProps()} />
                {
                    isDragActive ? (
                        <div className='w-full bg-[#FFFCF8] border-2 border-dashed border-coffee-dark h-35 flex flex-col justify-center items-center gap-2.5'>
                            <p className='text-coffee-dark'>Drop the files here ...</p>
                        </div>
                    ) : (
                        <div className={`group w-full bg-[#FFFCF8] border border-coffee-dark h-35 flex flex-col justify-center items-center gap-2.5 transition-colors ${files.length >= 4
                                ? 'cursor-not-allowed opacity-50'
                                : 'cursor-pointer hover:bg-coffee-light'
                            }`}>
                            <IoCloudUploadOutline className='text-4xl animate-bounce' />
                            <p className='text-coffee-dark'>
                                {files.length >= 4
                                    ? 'Maximum 4 images allowed'
                                    : `Drag & Drop your images here, or click to select files (${files.length}/4)`
                                }
                            </p>
                        </div>
                    )
                }
            </div>

            {files.length > 0 && (
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {files.map((file, index) => (
                        <div key={index} className='relative group'>
                            <Image
                                src={URL.createObjectURL(file)}
                                alt={`Upload ${index + 1}`}
                                width={150}
                                height={150}
                                className='w-full h-32 object-cover rounded-lg border border-coffee-dark'
                            />
                            <button
                                type='button'
                                onClick={() => removeFile(index)}
                                className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600'
                            >
                                <IoClose className='w-4 h-4' />
                            </button>
                            <p className='text-xs text-coffee-dark mt-1 truncate'>{file.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
