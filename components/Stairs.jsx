import { motion } from "framer-motion";

// Variantes de animação
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calcula o índice reverso para aplicar atraso escalonado
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* 
        Renderiza 6 motion.divs, cada um representando um degrau da escada.
        Cada div usa a mesma animação definida no objeto stairAnimation.
        O delay é calculado dinamicamente com base no índice reverso, criando um efeito escalonado com atraso decrescente para os degraus seguintes.
      */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
