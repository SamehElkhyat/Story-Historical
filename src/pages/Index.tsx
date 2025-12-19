import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { IntroSection } from '@/components/IntroSection';
import { EraSection } from '@/components/EraSection';
import { TimelineEntry } from '@/components/TimelineEntry';
import { ReferencesSection } from '@/components/ReferencesSection';
import { Footer } from '@/components/Footer';

// Import era background images
import prehistoricBg from '@/assets/prehistoric-cave.jpg';
import medievalBg from '@/assets/medieval-cathedral.jpg';
import eighteenthBg from '@/assets/victorian-photography.jpg';
import twentiethBg from '@/assets/twentieth-century-tv.jpg';
import twentyfirstBg from '@/assets/digital-future.jpg';

// Import content images
import egyptianImg from '@/assets/egyptian-hieroglyphics.jpg';
import renaissanceImg from '@/assets/renaissance-workshop.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <IntroSection />

      {/* Prehistoric and Ancient Era */}
      <EraSection
        id="prehistoric"
        title="Prehistoric and Ancient"
        subtitle="From cave paintings to the foundations of written communication"
        dateRange="~45,000 BCE to ~400 BCE"
        backgroundImage={prehistoricBg}
      >
        <TimelineEntry
          title="Warty Pigs"
          date="~ 51,200 BCE"
          description="Members of the same archaeological team who discovered the 'warty pig' painting in Sulawesi, Indonesia, recently found an even earlier example on the same island. It shows human figures around a wild pig. 'There is something happening between these figures,' says Griffith University archaeologist Adam Brumm, 'a story is being told.'"
          image={prehistoricBg}
          imageCaption="Cave painting in Sulawesi, Indonesia"
        />

        <TimelineEntry
          title="Cuneiform"
          date="~ 3200 BCE"
          description="Cuneiform is the earliest known form of writing. Used by the Sumerians in Uruq, today Iraq, it is a series of cone-shaped arrows pressed into clay. It was mostly used to tally things like grain transactions, though discoveries made in 2016 suggest cuneiform was also used by Babylonian astronomers."
          imagePosition="left"
        />

        <TimelineEntry
          title="Egyptian Hieroglyphics"
          date="~ 3100 BCE"
          description="This writing system uses images that each represent a single word. The Ancient Egyptians called them 'Gods' Words', which translates to 'sacred carvings' by the Ancient Greeks, giving us 'Hiero glyphs'. The earliest examples found remain undeciphered; however, between 2650 and 2575 BCE, they are regularised, with around 700 signs that would be used for 2000 years."
          image={egyptianImg}
          imageCaption="Ancient Egyptian hieroglyphics carved into temple walls"
        />

        <TimelineEntry
          title="Ancient Greece"
          date="~480-323 BCE"
          description="The Ancient Greeks are inspired by Plato's idea that art imitates things and events from life, and Aristotle's view that art seeks to represent the inner essence of its subject. Artists and sculptors take a methodical approach in their works — working with things like balance, symmetry and proportion — and achieve an unprecedented realism in their painting, sculpture, pottery and craft."
          imagePosition="left"
        />

        <TimelineEntry
          title="Camera Obscura"
          date="~400 BCE"
          description="Chinese philosopher Mo-tzu writes about light passing from an illuminated object through a pinhole into a dark room, creating an inverted image of the object. It's the earliest record of a 'camera obscura', which later gives us the concept for the pinhole camera and all of photography."
        />
      </EraSection>

      {/* Middle Ages and Renaissance */}
      <EraSection
        id="medieval"
        title="Middle Ages and Renaissance"
        subtitle="Gothic cathedrals, illuminated manuscripts, and the rebirth of classical ideals"
        dateRange="476 CE to 1493"
        backgroundImage={medievalBg}
      >
        <TimelineEntry
          title="The Middle Ages"
          date="500 CE - 1300 CE"
          description="The 'dark ages' misnomer fails to recognise the many creative and intricate visual works that are created in this period in the West. Pagan worshippers tell their stories with ornate stone works, jewellery, wood carvings, and tapestries. All the while, Christianity is growing its wealth and influence, and the Gothic cathedrals, with their stained glass, decadent decor and illuminated texts, pay tribute to their saints, their gods, and their kings and queens."
          image={medievalBg}
          imageCaption="Medieval stained glass windows in a Gothic cathedral"
        />

        <TimelineEntry
          title="The Renaissance"
          date="~1300 - ~1527"
          description="The Renaissance marks a departure from the tenets of mediaeval life. Beginning in Florence and spreading through Europe, the Renaissance is driven in part by an obsession with the wisdom and creativity of antiquity. There's a return to a focus on form, balance and realism, similar to the art of the Ancient Greeks and Romans, with an added emphasis on perspective."
          image={renaissanceImg}
          imageCaption="Renaissance workshop with anatomical drawings"
          imagePosition="left"
        />

        <TimelineEntry
          title="Before Gutenberg"
          date="1377"
          description="Gutenberg is credited with the invention of the printing press around 1440. The oldest preserved piece of storytelling made with metal movable type, however, is the Korean book Jikji, printed in 1377. Mass printing has existed in the region for centuries, with China and Korea recording their histories on wood block type."
        />

        <TimelineEntry
          title="The Nuremberg Chronicle"
          date="1493"
          description="This German text is a history of the world as it is known at the time, from the Garden of Eden and Noah's Ark, right through to the bustling Renaissance cities of Europe. It is one of the earliest books to mass publish illustrations with text. With more than 1800 woodcut illustrations, and a large print run, it is no surprise that copies have been treasured and preserved."
          imagePosition="left"
        />
      </EraSection>

      {/* 18th and 19th Century */}
      <EraSection
        id="eighteenth"
        title="18th and 19th Century"
        subtitle="The birth of photography, cinema, and mass media"
        dateRange="1775 to 1898"
        backgroundImage={eighteenthBg}
      >
        <TimelineEntry
          title="Kibyōshi"
          date="1775"
          description="Japanese books from the Edo period, kibyōshi are considered to be one of the original forms of graphic novels or comic books. Peaking as a genre between 1775 and 1806, the short booklets are written and printed by authors and woodblock artists. They feature black and white cartoons and text, often of a satirical nature."
        />

        <TimelineEntry
          title="Heliography"
          date="~1822"
          description="Joseph Nicéphore Niépce applies lavender oil and bitumen to lithographic stone. After exposure to sunlight, areas on the sketch dry quicker than areas left plain, and the solution can be wiped away to reveal the reproduced image."
          image={eighteenthBg}
          imageCaption="Victorian photography studio"
        />

        <TimelineEntry
          title="First Photograph"
          date="~1826"
          description="Niépce takes the first successful photo, 'View from the Window at Le Gras', by projecting onto pewter plates using a camera obscura. The exposure time is eight hours."
          imagePosition="left"
        />

        <TimelineEntry
          title="Daguerreotype"
          date="1835"
          description="Louis-Jacques-Mandé Daguerre invents the first effective method of photography, in partnership with Niépce. The Daguerreotype generates a direct positive image on a sheet of copper plated with a thin layer of silver. The process reduces exposure time to 30 minutes."
        />

        <TimelineEntry
          title="Cinématographe"
          date="~1894"
          description="The Lumière brothers, Louis and Auguste, debut the Cinématographe, a camera, projector and film printer all in one. It shows films to paying audiences in Paris — the birth of cinema."
          imagePosition="left"
        />
      </EraSection>

      {/* 20th Century */}
      <EraSection
        id="twentieth"
        title="20th Century"
        subtitle="Television, color photography, and the digital revolution begins"
        dateRange="1926 to 1999"
        backgroundImage={twentiethBg}
      >
        <TimelineEntry
          title="Mechanical and Electronic Television"
          date="1926-1928"
          description="John Logie Baird successfully demonstrates mechanical television, to an audience of 40 in London. A Times journalist reports, 'Through the Televisor... it is possible to transmit and reproduce instantly the details of movement, and such things as the play of expression on the face.'"
          image={twentiethBg}
          imageCaption="Family watching television in the 1950s"
        />

        <TimelineEntry
          title="Colour Photography"
          date="1935-1936"
          description="Leopold Mannes and Leopold Godowsky complete the Kodachrome colour photography method. It's a 28-stage process, and photographers need to post their negatives to the Kodak laboratories for development. In 1936, Agfa makes colour photography much easier with its own colour film."
          imagePosition="left"
        />

        <TimelineEntry
          title="Comic Books"
          date="1936"
          description="The golden age of comic books begins. Publishing illustrations coupled with text is not new, but the practice explodes in popularity in the US during World War II, as superheroes battling Nazis become popular entertainment. After the war, superhero comics drop in popularity again, but this time new genres and titles emerge."
        />

        <TimelineEntry
          title="PowerPoint"
          date="1987"
          description="Microsoft makes its first big acquisition of the virtual presentation software developed by Robert Gaskins, Thomas Rudkin and Dennis Austin called PowerPoint. The slideshow option debuts in 1992, and PowerPoint enters the Microsoft Office suite in 2003."
          imagePosition="left"
        />
      </EraSection>

      {/* 21st Century and Beyond */}
      <EraSection
        id="twentyfirst"
        title="21st Century and Beyond"
        subtitle="Digital storytelling, social media, and the age of AI"
        dateRange="2000 to Present"
        backgroundImage={twentyfirstBg}
      >
        <TimelineEntry
          title="Social Media Revolution"
          date="2004-2010"
          description="Platforms like Facebook, YouTube, and Twitter transform how stories are shared and consumed. Visual storytelling becomes democratized, with billions of people able to share their narratives through images, videos, and graphics."
          image={twentyfirstBg}
          imageCaption="Digital storytelling in the modern age"
        />

        <TimelineEntry
          title="Smartphone Photography"
          date="2007-Present"
          description="The introduction of the iPhone and subsequent smartphones puts a high-quality camera in everyone's pocket. Instagram, Snapchat, and TikTok emerge as platforms optimized for visual storytelling, changing how we document and share our lives."
          imagePosition="left"
        />

        <TimelineEntry
          title="Virtual and Augmented Reality"
          date="2010s-Present"
          description="New technologies enable immersive storytelling experiences. VR headsets transport viewers into 360-degree narratives, while AR overlays digital stories onto the physical world, creating new possibilities for visual communication."
        />

        <TimelineEntry
          title="AI-Generated Art"
          date="2020s"
          description="Artificial intelligence systems like DALL-E, Midjourney, and Stable Diffusion can generate images from text descriptions, opening new frontiers in visual storytelling. The democratization of image creation raises questions about authorship, creativity, and the future of visual arts."
          imagePosition="left"
        />
      </EraSection>

      <ReferencesSection />
      <Footer />
    </div>
  );
};

export default Index;
