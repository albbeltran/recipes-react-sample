
export default function Menu({ titulo, children }) {
    return (
        <>
            <h1>{titulo}</h1>
            {children}
        </>
    )
}