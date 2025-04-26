import './LPHero.css'


const LPHero = () => {

    const HeroImages = [
        'src/assets/hero_images/arabic_food_hero.jpg',
        'src/assets/hero_images/chinese_food_hero.jpg',
        'src/assets/hero_images/kerala_food_hero.jpg',
        'src/assets/hero_images/north_indian_food_hero.jpg',
    ]


    return (
        <section className="landingpage_hero">
        {HeroImages.map((image, index) => (
            // <img key={index} src={image} alt={`Hero ${index + 1}`} className={`hero_image hero_image_${index + 1}`} loading="lazy" />
            <div key={index} id={index} className={`hero_image_holder`} style={{ backgroundImage: `url(${image})`}}>
                
            </div>
        ))}
        </section>
    )
}

export default LPHero