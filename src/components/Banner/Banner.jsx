
const Banner = () => {
    return (
        <div className="container mx-auto mt-4">
            <div className="hero font-lexend rounded-xl" style={{ backgroundImage: 'url(banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-center text-white items-center lg:w-8/12 md:h-[550px] ">
                    <div className="space-y-6">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold lg:leading-relaxed ">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5 text-lg leading-relaxed">Welcome to Chef&apos;s Table, where culinary creativity meets culinary convenience! Explore our vast selection of premium ingredients, innovative kitchen tools</p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-accent rounded-3xl">Explore Now</button>
                            <button className="btn btn-ghost rounded-3xl">Our Feedback</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;