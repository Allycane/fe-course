
export default function Image({img, alt, w, h, className}) {
    return (
        <>
            <img src={img} alt={alt} className={className} style={{width:w, height:h}}/>
        </>
    );
}