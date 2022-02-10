import "./fileInput.scss";
import "../button/button.scss";

const FileInput = ({ name, id, error, handleChange, isFormik = true }) => {

    return (
        <div className={""}>

            <input
            name={name}
            id={id}
            type="file" 
            accept=".pdf" 
            multiple 
            onChange={handleChange}
            />
            <label for={id} className="button file-input-label">
                Bifoga kvitto
            </label>

            {document.getElementById(id) &&
            Array.from(document.getElementById(id).files).map((file, i) => (
                <p>{file.name}</p>
            ))}

            {error && (<p>Ni måste bifoga en pdf!</p>)}

        </div>
    )
}

export default FileInput;