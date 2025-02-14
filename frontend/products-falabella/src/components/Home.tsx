import falabellaLogo from '../assets/falabella.png'

export default function Home() {

    return (
        <>
            <div>
            <a href="https://falabella.com" target="_blank">
                <img src={falabellaLogo} className="logo" alt="Falabella logo" />
            </a>
            </div>
        </>
    )
}