import water from "../images/water.png";
const ImageDisplay = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alighnItems: "center",
                flexDirection: "column",
            }}
        >
            <img src={water} alt="Water mask picture" height={400} width={350} />
        </div>
    );
};
export default ImageDisplay;
