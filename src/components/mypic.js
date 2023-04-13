import mypic from "../images/pic.png";
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
            <img src={mypic} alt="My picture" height={400} width={350} />
        </div>
    );
};
export default ImageDisplay;
