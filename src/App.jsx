import danielImg from "/images/image-daniel.jpg";
import jeanetteImg from "/images/image-jeanette.jpg";
import jonathanImg from "/images/image-jonathan.jpg";
import kiraImg from "/images/image-kira.jpg";
import patrickImg from "/images/image-patrick.jpg";
import quotationBg from "/images/bg-pattern-quotation.svg";
import Testimonial from "./components/Testimonial";

const App = () => {
    return (
        <div className="px-9 py-18 sm:px-12 sm:py-24 grid gap-8.5 sm:gap-6 lg:gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:pt-57 max-w-[1110px] lg:mx-auto lg:px-0">
            <Testimonial
                bgColor="bg-p-p-3"
                borderColor="border-p-p-2"
                img={danielImg}
                name="Daniel Clifford"
                nameColor="text-n-g-1"
                position="Verified Graduate"
                positionColor="text-n-g-2"
                heading="I received a job offer mid-course, and the subjects
                            I learned were current, if not more so, in the
                            company I joined. I honestly feel I got every
                            penny’s worth."
                headingColor="text-n-g-1"
                description="“ I was an EMT for many years before I joined the
                            bootcamp. I’ve been looking to make a transition and
                            have heard some people who had an amazing experience
                            here. I signed up for the free intro course and
                            found it incredibly fun! I enrolled shortly
                            thereafter. The next 12 weeks was the best - and
                            most grueling - time of my life. Since completing
                            the course, I’ve successfully switched careers,
                            working as a Software Engineer at a VR startup. ”"
                desColor="text-n-g-2"
                className="sm:col-start-1 lg:col-start-1 lg:col-span-2"
                pattern={quotationBg}
            />

            <Testimonial
                bgColor="bg-n-g-4"
                borderColor="border-p-p-1"
                img={jonathanImg}
                name="Jonathan Walters"
                nameColor="text-n-g-1"
                position="Verified Graduate"
                positionColor="text-n-g-2"
                heading="The team was very supportive and kept me motivated"
                headingColor="text-n-g-1"
                description="“ I started as a total newbie with virtually no
                            coding skills. I now work as a mobile engineer for a
                            big company. This was one of the best investments
                            I’ve made in myself. ”"
                desColor="text-n-g-2"
            />

            <Testimonial
                bgColor="bg-n-w"
                borderColor="border-p-p-1"
                img={jeanetteImg}
                name="Jeanette Harmon"
                nameColor="text-n-g-4"
                position="Verified Graduate"
                positionColor="text-n-g-3"
                heading="An overall wonderful and rewarding experience"
                headingColor="text-n-g-4"
                description="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”"
                desColor="text-n-g-3"
                className="lg:col-start-1 lg:row-start-2"
            />

            <Testimonial
                bgColor="bg-n-b"
                borderColor="border-p-p-3"
                img={patrickImg}
                name="Patrick Abrams"
                nameColor="text-n-g-1"
                position="Verified Graduate"
                positionColor="text-n-g-1"
                heading="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
                headingColor="text-n-g-2"
                description="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”"
                desColor="text-n-g-2"
                className="sm:col-span-2 lg:row-start-2 lg:col-start-2 lg:col-span-2"
            />

            <Testimonial
                bgColor="bg-n-w"
                borderColor="border-n-g-1"
                img={kiraImg}
                name="Kira Whittle"
                nameColor="text-n-g-4"
                position="Verified Graduate"
                positionColor="text-n-g-2"
                heading="Such a life-changing experience. Highly recommended!"
                headingColor="text-n-g-4"
                description="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”"
                desColor="text-n-g-3"
                className="sm:col-start-2 sm:row-start-1 lg:row-start-1 lg:col-start-4 lg:row-span-2"
            />
        </div>
    );
};

export default App;
