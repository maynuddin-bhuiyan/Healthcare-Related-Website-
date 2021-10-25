

const deparmantData = [
    {
        name: 'Alexander Fleming',
        id: 1,
        title: 'FRS FRSE FRCS',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Synthetic_Production_of_Penicillin_TR1468.jpg/1200px-Synthetic_Production_of_Penicillin_TR1468.jpg',
        Industrysupport: '24',
        degeneration: "Alexander Fleming FRS FRSE FRCS (6 August 1881 – 11 March 1955) was a Scottish physician and microbiologist, best known for discovering the world's"
    },
    {
        name: 'Virginia Apgar',
        id: 2,
        title: 'Anesthesiology, ‎teratology',
        img:'https://cdn.britannica.com/49/129949-050-5FB8CEDD/Virginia-Apgar-1966.jpg',
        Industrysupport: '24',
        degeneration: " Virginia Apgar (June 7, 1909 – August 7, 1974) was an American physician, obstetrical anesthesiologist and medical researcher, best known as the inventor of"
    },

    {
        name: 'Hippocrates',
        id: 3,
        title: 'Physician',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4QTdD9JvkK-TWi5Ahj5Hx4WDgVwOaAp2Vw&usqp=CAU',
        Industrysupport: '24',
        degeneration: "Hippocrates of Kos also known as Hippocrates II, was a Greek physician of the Age of Pericles (Classical Greece), who is considered one of the most"
    },

    {
        name: 'Joseph Lister',
        id: 4,
        title: ' Surgical sterile techniques',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RcOUXoCo7sw9qMLhR8oZSaHE0RpIo8gtZqZ4kCJI&usqp=CAE&s',
        Industrysupport: '24',
        degeneration: "oseph Lister, Baron Lister of Lyme Regis OM, PC, PRS, FRCSE, FFPS was a British surgeon, experimental pathologist and a pioneer of antiseptic surgery."
    },


    {
        name: 'Robert Koch',
        id: 5,
        title: 'Biographical',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RobertKoch_cropped.jpg/1200px-RobertKoch_cropped.jpg',
        Industrysupport: '24',
        degeneration: " Robert Koch, who had conducted a range of important studies on illnesses caused by microorganisms, discovered and described the TB bacterium in 1882."
    },


    {
        name: 'Elizabeth Blackwell',
        id: 6,
        title: 'Physician',
        img:'https://healthmatters.nyp.org/wp-content/uploads/2018/03/NYP-Blackwell-portrait-inset.jpg',
        Industrysupport: '24',
        degeneration: "Elizabeth Blackwell (February 3, 1821 – May 31, 1910) was a British physician, notable as the first woman to receive a medical degree in the United States."
    },

    {
        name: 'Edward Jenner',
        id: 7,
        title: 'smallpox and vaccination',
        img:'https://cdn.britannica.com/w:400,h:300,c:crop/65/10665-004-8E393D23/Edward-Jenner-detail-oil-painting-James-Northcote-1803.jpg',
        Industrysupport: '24',
        degeneration: "by S Riedel · 2005 · Cited by 740 — In 1757, an 8-year-old boy was inoculated with smallpox in Gloucester (4); he was one of thousands of children inoculated that year in England."
    },

    {
        name: 'John Snow',
        id: 8,
        title: ' ‎Legacy and honours',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Barker--John_Snow--1847.jpg/330px-Barker--John_Snow--1847.jpg',
        Industrysupport: '24',
        degeneration: "A physician/ medical doctor who specialises in pathology, which is the diagnosing of disease using organs, tissue, and body fluids"
    },
    {
        name: 'Howard Florey',
        id: 9,
        title: 'Biographical',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBYrcjHcewx8VvJvNMoHOB14COHIuMn_XMsVPjZa1&usqp=CAE&s',
        Industrysupport: '24',
        degeneration: "Sir Howard Walter Florey was born on September 24, 1898, at Adelaide, South Australia, the son of Joseph and Bertha Mary Florey."
    },
    {
        name: 'Ignaz Semmelweis',
        id: 10,
        title: 'Oberdöbling‎‎',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ignaz_Semmelweis_1860.jpg/220px-Ignaz_Semmelweis_1860.jpg',
        Industrysupport: '24',
        degeneration: "Ignaz Philipp Semmelweis (German: [ˈɪɡnaːts ˈzɛml̩vaɪs]; Hungarian: Semmelweis Ignác Fülöp [ˈsɛmmɛlvɛjs ˈiɡnaːts ˈfyløp]; 1 July 1818 – 13 August 1865) was "
    },
    {
        name: 'Galen',
        id: 11,
        title: 'Greek physician',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknjm5Tl8tDAfhWyzBDzHUPPreISeinJy1dg&usqp=CAU',
        Industrysupport: '24',
        degeneration: "Aelius Galenus or Claudius Galenus often Anglicized as Galen or Galen of Pergamon, was a Greek physician, surgeon and philosopher in the Roman Empire."
    },
    {
        name: 'James Parkinson',
        id: 12,
        title: 'English surgeon',
        img:'https://www.researchgate.net/profile/Jonathan-Carr-4/publication/5335582/figure/fig1/AS:720787690516480@1548860585065/Photograph-of-Dr-James-Parkinson-1755-1825.jpg',
        Industrysupport: '24',
        degeneration: "He is best known for his 1817 work An Essay on the Shaking Palsy, in which he was the first to describe paralysis agitans"
    },
    {
        name: 'Pran Gopal Datta',
        id: 13,
        title: 'MBBS (DMC), DDV (DU), FCPS (Skin & Sex)',
        img:'https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg',
        Industrysupport: '24',
        degeneration: "Expert Dermatologist, Sexologist & Venereologist Dhaka Medical College & Hospital"
    },

    {
        name: 'Dr. Shamim Boksha',
        id: 14,
        title: 'MBBS, FCPS (Medicine), MD (Gastroenterology)',
        img:'https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg',
        Industrysupport: '24',
        degeneration: "Gastroenterology, Medicine & Liver Diseases Specialist National Hospital, Chittagong"
    },
    {
        name: 'Prof. Dr. Syed Atiqul Haq',
        id: 15,
        title: 'MBBS, FCPS (Medicine), FRCP, MD (Rheumatology)',
        img:'https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg',
        Industrysupport: '24',
        degeneration: "Rheumatology & Medicine Specialist   Bangabandhu Sheikh Mujib Medical University Hospital"
    },
    {
        name: 'Prof. Dr. Quazi Deen Mohammad',
        id: 16,
        title: 'MBBS, MD (Neurology), FCPS (Medicine), Fellow in Neurology (USA)',
        img:'https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg',
        Industrysupport: '24',
        degeneration: "Neurology & Medicine Specialist        National Institute of Neurosciences & Hospital"
    },
    {
        name: 'Dr. Md. Hasanuzzaman',
        id: 17,
        title: 'MBBS, FCPS (Medicine), MD (Neurology)',
        img:'https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg',
        Industrysupport: '24',
        degeneration: "Brain, Stroke, Nerve, Medicine & Neuromedicine Specialist Chittagong Medical College & Hospital"
    },
    {
        name: 'Prof. Dr. Mansurul Alam',
        id: 18,
        title: 'MBBS, FCPS, MD, PHD, FRCP (GLASGOW)',
        img:'https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg',
        Industrysupport: '24',
        degeneration: "Skin & Sexual Diseases Specialist Chittagong Medical College & Hospital"
    },
    {
        name: 'Prof. Dr. Mamun Al Mahtab Shwapnil',
        id: 19,
        title: 'MBBS, MSc (Gastro), MD (Hepatology), FACG (USA), FICP (India), FRCP (Ireland), FRCP (UK)',
        img:'https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg',
        Industrysupport: '24',
        degeneration: "Hepatologist & Gastroenterologist Bangabandhu Sheikh Mujib Medical University Hospital"
    },
    {
        name: 'Prof. Dr. Md. Hafizur Rahman',
        id: 20,
        title: 'MBBS (DMC), DEM (BIRDEM), MD (Endocrinology), MACE (USA)',
        img:'https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg',
        Industrysupport: '24',
        degeneration: "Diabetes, Thyroid & Hormone Specialist Dhaka Medical College & Hospital"
    },
    {
        name: 'Prof. Dr. M. U. Kabir Chowdhury',
        id: 21,
        title: 'MBBS, DDV (Vienna), AFICA (USA), FRCP (Glasgow)',
        img:'https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg',
        Industrysupport: '24',
        degeneration: "Skin, Allergy & Sexual Diseases Specialist Holy Family Red Crescent Medical College & Hospital"
    },
    
    

];