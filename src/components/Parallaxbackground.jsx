//import { useScroll } from 'motion/react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';


const ParallaxBackground = () => {
   const { scrollYProgress } = useScroll(); 
   const x=useSpring(scrollYProgress,{damping:50});
    const mountain3Y = useTransform(x, [0, 0.5], [0, 200]);
    const planetsX   = useTransform(x, [0, 0.5], [0, 150]);
    const mountain2Y = useTransform(x, [0, 0.5], [0, 100]);
    const mountain1Y = useTransform(x, [0, 0.5], [0, 50]);
     return (
    <section className='absolute inset-0 bg-black/40'> 

      <div className='relative h-screen overflow-hidden'>
        <motion.div 
          className='absolute inset-0 w-full h-screen -z-50'
          style={{
            backgroundImage: "url('/assets/sky.jpg')",
            backgroundPosition: "bottom",
            backgroundSize: "cover"
          }}
        />
        <motion.div 
          className='absolute inset-0 w-full h-screen -z-40'
          style={{
            backgroundImage: "url('/assets/mountain-3.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        <motion.div 
          className='absolute inset-0 w-full h-screen -z-30'
          style={{
            backgroundImage: "url('/assets/planets.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        <motion.div 
          className='absolute inset-0 w-full h-screen -z-20'
          style={{
            backgroundImage: "url('/assets/mountain-2.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        <motion.div 
          className='absolute inset-0 w-full h-screen -z-10'
          style={{
            backgroundImage: "url('/assets/mountain-1.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    
    </section>

  );
};

export default ParallaxBackground;