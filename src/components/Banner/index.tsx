import './banner.css';

interface BannerProps{
    enderecoImagem : string,
    textoAlternativo?: string
}

function Banner({enderecoImagem, textoAlternativo} : BannerProps) {
    return (
        <header className="banner">
            {/* <img src="/assets/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImagem} alt={textoAlternativo} />
        </header>
    )
}

export default Banner;