export const ANIMATION_CONFIG = {
   container: {
      exit: {
         opacity: 0,
         transition: { duration: 0.2 },
      },
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            delayChildren: 0.05,
            staggerChildren: 0.08,
         },
      },
   },
   item: {
      hidden: { opacity: 0, y: 30 },
      visible: {
         opacity: 1,
         transition: { duration: 0.35 },
         y: 0,
      },
   },
};
