import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom'; 


function NewBeer({ createdBeer }) {

    const [form, setForm] = useState({name: "", image_url: "", tagline: "", attenuation_level: "", description: "", contributed_by: ""});
    const [done, setDone] = useState(false);

    console.log(createdBeer)
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers", {title: form.title, pricePerDay: form.price, img: form.imagen})
        .then(result => {
            setDone(true);
          
        })
        .catch(err => console.log(err))
    }
return (
    <div className="w-50 mx-auto mt-5">
            {done && <div className="alert alert-success" role="alert">Apartment created successfully</div>}
        <form onSubmit={submitHandler}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Image URL" value={form.image_url} onChange={
                    (e) => setForm({ ...form, image_url: e.target.value }) } />
                <label htmlFor="floatingInput">Image URL</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingTitle" placeholder="Name" value={form.name} onChange={
                   (e) => setForm({ ...form, name: e.target.value })} />
                <label htmlFor="floatingTitle">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingTagline" placeholder="Tagline" value={form.tagline} onChange={
                 (e) => setForm({ ...form, tagline: e.target.value })}/>
                <label htmlFor="floatingTagline">Tagline</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingAttenuation" placeholder="Attenuation Level" value={form.attenuation_level} onChange={
                    (e) => setForm({ ...form, attenuation_level: e.target.value })}/>
                <label htmlFor="floatingAttenuation">Attenuation Level</label>
            </div>
            <div className="form-floating mb-3"> 
                <textarea className="form-control" id="floatingTextarea" placeholder="Description" value={form.description} onChange={
                    (e) => setForm({ ...form, description: e.target.value }) } />
                <label htmlFor="floatingTextarea">Description</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingContributor" placeholder="Contributed By" value={form.contributed_by} onChange={
                    (e) => setForm({ ...form, contributed_by: e.target.value }) } />
                <label htmlFor="floatingContributor">Contributed By</label>
            </div>
                <button type="submit" className="btn btn-primary"> Create Beer </button>
            </form>
        </div>
      );
    }

    export default NewBeer;