const ImageDisplay = ({picture}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alighnItems: "center",
                flexDirection: "column",
            }}
        >
            <img src={picture} alt="My picture" height={400} width={350} />
        </div>
    );
};
export default ImageDisplay;

