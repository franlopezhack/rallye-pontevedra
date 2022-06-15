import { useState } from "react";
import { newRelease } from "../../services/api-service";
import { useNavigate } from "react-router";




function NewRelease() {

    const navigate = useNavigate()


    const [error, setError] = useState(null)




    function handleSubmit(e) {
        e.preventDefault();

        newRelease({
            title: e.target.title.value,
            description: e.target.description.value,
            link: e.target.link.value,
            avatar: e.target.avatar.files[0]
        })

            .then(() => {
                navigate('/releases')
            })
            .catch(error => {
                setError(error.response.data.message)
            })
    }


    return (


        <div className="div-form w-50 p-5">
            <form className="" onSubmit={handleSubmit}>

                <div className="mb-3">
                    Title
                    {error && <div className="alert alert-danger">{error}</div>}
                    <input type="text" name="title" />
                </div>

                <div className="mb-3">
                    Description
                    <input type="text" name="description" />
                    {error?.description}
                </div>

                <div className="mb-3">
                    Photo
                    <input type='file' name="avatar" />
                    {error?.description}
                </div>

                <div className="mb-3">
                    Link
                    <input type='text' name="link" />
                    {error?.link}
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