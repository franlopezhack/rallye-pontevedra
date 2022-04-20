import { useState } from "react";
import { newRelease } from "../../services/api-service";
import { useNavigate } from "react-router";



function NewRelease() {

    const navigate = useNavigate()
    const [data, setData] = useState({
        title: '',
        description: '',
        image: ''

    });

    const [error, setError] = useState(null)

    function handleChange(e) {
   
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
       
    }


    function handleSubmit(e) {
        e.preventDefault();
        newRelease(data)
            .then(() => {
                navigate('/releases')
            })
            .catch(error => {
                setError(error.response.data.message)
            })
    }
console.log(newRelease)

    return (


        <div className="div-form w-50 p-5">
            <form className="" onSubmit={handleSubmit}>

                <div className="mb-3">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <label htmlFor="title" className="form-label">
                        Título noticia
                    </label>
                    <input
                        type="title"
                        className="form-control"
                        id="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Descripcion noticia
                    </label>
                    <input
                        type="desciption"
                        className="form-control"
                        id="description"
                        value={data.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                       Imagen noticia
                    </label>
                    <input
                        type='file'
                        className="form-control"
                        id="image"
                        value={data.image}
                        onChange={handleChange}
                    />
                </div>
            
                <hr />
                <button type="submit" className="btn btn-danger col-12 mb-1">
                    Nueva Noticia
                </button>
            </form>

        </div>
    )
}

export default NewRelease