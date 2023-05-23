import Wrapper from "@/components/Wrapper";

export default function About() {
    return (
        <Wrapper className="text-center h-[70vh] flex items-center flex-col justify-center">
            <h1 className="font-bold text-4xl mb-7 underline">About Box Water</h1>
            <p className="text-justify mb-4 text-black/[0.8]">
                Box Water is a revolutionary approach to sustainable hydration.
                We believe in providing an eco-friendly alternative to
                single-use plastic bottles while delivering refreshing, premium
                quality water.
            </p>
            <p className="text-justify mb-6 text-black/[0.8]">
                Our mission is to make a positive impact on the environment by
                offering a sustainable solution that helps reduce plastic waste.
                By choosing Box Water, you are contributing to the preservation
                of our planet for future generations.
            </p>
            <h2 className="font-bold text-2xl mb-5">Why Choose Box Water?</h2>
            <ul className="text-justify">
                <li className="text-black/[0.8]">
                    <strong className="text-black">Sustainability:</strong> Our water is packaged in
                    recyclable paper boxes, significantly reducing the use of
                    single-use plastic bottles and their harmful effects on the
                    environment.
                </li>
                <li className="text-black/[0.8]">
                    <strong className="text-black">Premium Quality:</strong> We prioritize the quality
                    of our water, ensuring it is purified, filtered, and free
                    from contaminants. Each sip provides a refreshing and
                    satisfying experience.
                </li>
                <li className="text-black/[0.8]">
                    <strong className="text-black">Convenience:</strong> Our innovative packaging is
                    designed to be easily transported, making it ideal for
                    on-the-go hydration. Whether you're at work, traveling, or
                    exercising, Box Water is the perfect companion.
                </li>
                <li className="text-black/[0.8]">
                    <strong className="text-black">Freshness:</strong> The paper box keeps the water
                    fresher for longer, maintaining its taste and quality, so
                    you can enjoy a crisp and refreshing drink every time.
                </li>
            </ul>
            <p className="text-black/[0.3] font-bold mt-14">
                Join us in our mission to create a more sustainable future.
                Together, we can make a difference, one box at a time.
            </p>
        </Wrapper>
    );
}
