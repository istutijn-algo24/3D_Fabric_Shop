import React from 'react'
import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile ,removeFile}) => {


  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input type="file"  id="file-upload" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <label htmlFor="file-upload" className='filepicker-label'>Upload File</label>
        <p className='mt-2 text-black text-xs truncate'>
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton type="filled" title="Remove" handleClick={removeFile} customStyles='text-xl' />
      </div>

      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton type="outline" title="Logo" handleClick={() => readFile('logo')} customStyles='text-xl' />
        <CustomButton type="filled" title="Full" handleClick={() => readFile('full')} customStyles='text-xl' />
      </div>
    </div>
  )
}

export default FilePicker;
