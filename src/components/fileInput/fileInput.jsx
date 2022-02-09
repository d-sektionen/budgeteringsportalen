
const FileInput = ({ name, id, error, handleChange, isFormik = true }) => {
    return (
        <div className={""}>
            <input
            className={""}
            name={name}
            id={id}
            type="file" 
            accept=".pdf" 
            multiple 
            onChange={handleChange}
            />
            {error && (<p>Ni måste bifoga en pdf!</p>)}

        </div>
    )
}

export default FileInput;