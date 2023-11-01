export default function Receta({ recetas }) {
    return (
        <>
            {recetas.map((receta, index) => (
                <section key={index} id={receta.nombre} className='receta'>
                    <h2>{receta.nombre}</h2>

                    <section className='ingredientes'>
                        <p>Ingredientes:</p>
                        {receta.ingredientes.map((ingrediente, index) => (
                            <p key={index}>{`${ingrediente.nombre} - ${ingrediente.cantidad}${ingrediente.medida}`}</p>
                        ))}
                    </section>

                    <section className='instrucciones'>
                        <h1>Instrucciones</h1>
                        {receta.instrucciones.map((instruccion, index) => (
                            <p key={index}>{instruccion}</p>
                        ))}
                        <br></br>
                    </section>
                </section>
            ))}
        </>
    )
}