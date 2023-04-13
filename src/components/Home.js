import ImageDisplay from "./water";
import Button from "./Button";

const Home = () => {
    return (
        <><div className="container"><div className="secondpageContainer-left">
            <h2 className="secondpage_container-title">Hello</h2>
            <p className="secondpage_container-info">I'm Fizzah Sikander, a junior Front End Developer currently enrolled in
                a comprehensive program at Sundsgården Folkhögskolan. With a background in engineering and teaching, I
                bring a methodical approach to problem-solving and effective communication to my work. I am passionate
                about designing and coding, and always eager to collaborate with fellow developers to enhance my skills.As of June 5th, 2023, I am seeking an internship opportunity with a
                company where I can continue to grow and learn in a professional setting. I invite you to review my
                profile and consider me as a valuable addition to your team. You can download my CV for a comprehensive
                overview of my qualifications.
                Thank you for your time and consideration, and I look forward to discussing any potential internship
                opportunities with you soon!
            </p>
            <a href="About"><Button /></a>
        </div><ImageDisplay /></div></>
    );
};
export default Home;