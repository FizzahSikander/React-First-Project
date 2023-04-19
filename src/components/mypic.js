/*define properties of image to be displayed here*/
{/*this image is used in main home page*/}
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

