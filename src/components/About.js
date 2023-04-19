import ImageDisplay from "./mypic";
import aboutpic from "../images/picture.webp";
import anotherPic from "../images/photography.jpg";
/*imported pictures we need from gallery and define it*/
const Home = () => {
    return (
        <><><div className="container"><div className="secondpageContainer-left">
            <h2 className="secondpage_container-title">WHY FRONT END</h2>
            <p className="secondpage_container-info">As a Front End Developer, I love working
                in this field because it allows me to combine my passion for creativity and problem-solving.
                I enjoy the challenge of taking a design concept and turning it into a fully functional and visually stunning website or application. Moreover, the constantly evolving nature of the field means that there is always something new to learn and explore, which keeps me engaged and motivated.
            </p>
        </div><ImageDisplay picture={anotherPic} /></div>
        </><><div className="container"><div className="secondpageContainer-left">
            <h2 className="secondpage_container-title">WHAT I CAN OFFER</h2>
            <p className="secondpage_container-info">As a Front End Developer, I bring a unique combination of technical expertise and creative problem-solving skills to the table. I am proficient in HTML, CSS, and JavaScript, and have experience working with a variety of frameworks and libraries.But my value to the company goes beyond just technical skills. I am also passionate about creating visually appealing and user-friendly interfaces that deliver a seamless user experience. Additionally, my strong attention to detail and ability to collaborate effectively with designers and back-end developers allow me to deliver high-quality work that meets the needs of both the client and end-users.
                Furthermore, I am committed to staying up-to-date with the latest front-end development trends and techniques, and I am always looking for ways to improve my skills and knowledge.
                Overall, as a Front End Developer, I can offer the company my technical expertise, creative problem-solving skills, and commitment to delivering high-quality work that meets the needs of both the client and end-users.
            </p>
        </div><ImageDisplay picture={aboutpic} /></div></></>
    );
};
export default Home;