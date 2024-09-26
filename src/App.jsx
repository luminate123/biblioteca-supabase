import './App.css'
import React, { useState } from 'react';
import { supabase } from './supabase/client';
import logo from '../public/logount.png';

export function App() {
    const [genero, setGenero] = useState('');
    const [nombres, setName] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [programa, setPrograma] = useState('');
    const [tipo, setTipo] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [documento, setDocumento] = useState('');
    const [autor, setAutor] = useState('');
    const [titulo, setTitulo] = useState('');
    const [codigo, setCodigo] = useState('');
    const [error, setError] = useState(null);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase.from('biblioteca').insert([
            {
                genero: genero,
                nombres: nombres,
                apellidos: apellidos,
                programa: programa,
                tipo: tipo,
                modalidad: modalidad,
                documento: documento,
                autor: autor,
                titulo: titulo,
                codigo: codigo,

                // add more columns and values as needed
            },
        ]);

        if (error) {
            console.error('Error inserting ', error);
            setError('Error inserting data. Please try again.');
            setTimeout(() => {
                setError(null);
            }, 2000);
        } else {
            setError(null);
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false);
                setName('');
                setApellidos('');
                setPrograma('');
                setTipo('');
                setModalidad('');
                setDocumento('');
                setAutor('');
                setTitulo('');
                setCodigo('');
            }, 2000); // Hide the alert after 5 seconds
        }
    };

    return (
        <div className="general p-4">
            <div className="titulo mb-1">
                <img src={logo} alt="Universidad Nacional de Trujillo" />
                <div className="logo-texto">
                    <h5>Universidad Nacion de Trujillo</h5>
                    <h6>ESCUELA DE POSGRADO</h6>
                </div>

            </div>
            <form onSubmit={handleSubmit}>
                <div className='gnero mb-3'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="genero" value='Masculino' onChange={(e) => setGenero(e.target.value)} />
                        <label className="form-check-label">Masculino</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="genero" value='Femenino' onChange={(e) => setGenero(e.target.value)} />
                        <label className="form-check-label" >Femenino</label>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input"
                        placeholder="Nombres"
                        value={nombres}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">Nombres</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input"
                        placeholder="Apellidos"
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">Apellidos</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input"
                        placeholder="Programa"
                        value={programa}
                        onChange={(e) => setPrograma(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">Programa</label>
                </div>
                <div className='mb-1'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="tipo" value='Maestria' onChange={(e) => setTipo(e.target.value)} />
                        <label className="form-check-label">Maestria</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="tipo" value='Doctorado' onChange={(e) => setTipo(e.target.value)} />
                        <label className="form-check-label" >Doctorado</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="tipo" value='Docente' onChange={(e) => setTipo(e.target.value)} />
                        <label className="form-check-label" >Docente</label>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="tipo" value='Pre Grado' onChange={(e) => setTipo(e.target.value)} />
                        <label className="form-check-label">Pre Grado</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="tipo" value='Particular' onChange={(e) => setTipo(e.target.value)} />
                        <label className="form-check-label" >Particular</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="tipo" value='Administrativo' onChange={(e) => setTipo(e.target.value)} />
                        <label className="form-check-label" >Administrativo</label>
                    </div>
                </div>
                <div className='mb-3'>
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setModalidad(e.target.value)} required>
                        <option selected>Seleccione la modalidad</option>
                        <option value="Sala">Sala</option>
                        <option value="Domicilio">Domicilio</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="Doc" value='Tesis' onChange={(e) => setDocumento(e.target.value)} />
                        <label className="form-check-label">Tesis</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="Doc" value='Libro' onChange={(e) => setDocumento(e.target.value)} />
                        <label className="form-check-label" >Libro</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="Doc" value='Articulo' onChange={(e) => setDocumento(e.target.value)} />
                        <label className="form-check-label" >Articulo</label>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input"
                        placeholder="Autor"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">Autor</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input"
                        placeholder="Titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">Titulo</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input"
                        placeholder="Codigo"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">Codigo</label>
                </div>
                {error && <p className="error">{error}</p>}
                {showSuccessAlert && (
                    <div className="alert alert-success mt-3" role="alert">
                        Datos insertados correctamente
                    </div>
                )}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </div>
    );
}