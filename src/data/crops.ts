import cropTomatoes from "@/assets/crop-tomatoes.jpg";
import cropBeans from "@/assets/crop-french-beans.jpg";
import cropAvocados from "@/assets/crop-avocados.jpg";
import cropGreenhouse from "@/assets/crop-greenhouse.jpg";

export interface PaidContentSections {
  soilPreparation: string;
  irrigationSystem: string;
  pestControl: string;
  harvesting: string;
}

export interface JourneyStep {
  title: string;
  description: string;
}

export interface Crop {
  id: string;
  name: string;
  image: string;
  price: number;
  duration: string;
  stage: string;
  desc: string;
  journey: JourneyStep[];
  freeContent: {
    intro: string;
    overview: string;
  };
  paidContent: PaidContentSections;
}

export const crops: Crop[] = [
  {
    id: "tomatoes",
    name: "Tomatoes",
    image: cropTomatoes,
    price: 499,
    duration: "90 days",
    stage: "Vegetative",
    desc: "Tomatoes require controlled irrigation, nutrient management, and sunlight monitoring throughout their growth cycle.",
    journey: [
      { title: "Seed & nursery", description: "Quality seed selection and nursery raising under protected conditions for healthy transplants." },
      { title: "Transplanting", description: "Transplant into prepared beds at correct spacing when seedlings have 4–6 true leaves." },
      { title: "Vegetative growth", description: "Staking, pruning, and nutrient management to build strong plants and fruit-bearing trusses." },
      { title: "Flowering & fruit set", description: "Pollination support and balanced irrigation to maximise fruit set and reduce blossom drop." },
      { title: "Ripening & harvest", description: "Monitor colour break and harvest at the right stage for market and post-harvest handling." },
    ],
    freeContent: {
      intro: "Tomatoes are one of the most widely grown and economically important vegetable crops. Understanding their lifecycle helps investors and farmers make informed decisions about inputs, timing, and expected yields.",
      overview: "From seedling to harvest, tomato plants go through distinct vegetative and reproductive stages. Optimal management at each stage directly impacts fruit quality and marketable yield.",
    },
    paidContent: {
      soilPreparation:
        "Tomatoes require well-drained, fertile soil with pH 6.0–6.8. Conduct soil tests for NPK and organic matter. Incorporate compost and balanced fertiliser before planting. Use raised beds or ridges to improve drainage and reduce disease. Pre-plant fumigation or solarisation can reduce soil-borne pathogens in intensive systems.",
      irrigationSystem:
        "Drip irrigation is recommended for water efficiency and reduced foliar disease. Schedule irrigation based on growth stage: lighter during early vegetative, increased during flowering and fruit set. Avoid overhead watering to minimise blight and fruit cracking. Mulching conserves moisture and suppresses weeds.",
      pestControl:
        "Monitor for aphids, whiteflies, thrips, and tomato hornworm. Use integrated pest management: beneficial insects, sticky traps, and selective pesticides. Rotate chemistries to prevent resistance. Bacterial and fungal diseases (early blight, late blight) require preventive fungicide programmes and resistant varieties where available.",
      harvesting:
        "Harvest at breaker stage for long-distance transport or full colour for local markets. Grade by size and quality; remove culls. Handle gently to avoid bruising. Cool quickly and store at 12–15°C. Record yields by grade for financial and agronomic analysis.",
    },
  },
  {
    id: "french-beans",
    name: "French Beans",
    image: cropBeans,
    price: 349,
    duration: "60 days",
    stage: "Flowering",
    desc: "French beans are a fast-growing legume crop that fixes nitrogen in the soil and thrives in warm, well-drained conditions.",
    journey: [
      { title: "Land prep & sowing", description: "Fine tilth, inoculated seed, and direct sowing at recommended spacing and depth." },
      { title: "Emergence & early growth", description: "Weed and moisture management; protect from bean fly and early pests." },
      { title: "Flowering", description: "Consistent moisture and nutrition to support flower formation and pod set." },
      { title: "Pod development", description: "Regular picking starts when pods are pencil-thick; multiple harvests over the season." },
      { title: "End of cycle", description: "Final pick, residue management, and optional green manure or seed harvest." },
    ],
    freeContent: {
      intro: "French beans offer a relatively short cycle from planting to harvest, making them attractive for rotation and quick returns. They also improve soil nitrogen through rhizobium association.",
      overview: "Beans progress from germination through vegetative growth, flowering, and pod development. Picking at the right stage ensures tender pods and encourages further flowering for multiple harvests.",
    },
    paidContent: {
      soilPreparation:
        "French beans prefer light, well-drained soils with good aeration. Avoid heavy clay or waterlogged sites. Inoculate seed with appropriate rhizobium for nitrogen fixation. Prepare a fine tilth; beans are sensitive to soil compaction. Apply phosphorus at planting; limit nitrogen to avoid excessive vegetative growth.",
      irrigationSystem:
        "Maintain consistent moisture from flowering through pod fill. Drip or furrow irrigation works well; avoid wetting foliage to reduce disease. Deficit stress during flowering reduces pod set. Mulch after emergence to conserve moisture and keep pods clean.",
      pestControl:
        "Watch for bean fly, aphids, and pod borers. Use pheromone traps and scouting. Apply biopesticides or selective insecticides when thresholds are met. Fungal diseases (rust, anthracnose) are managed with resistant varieties and fungicide sprays. Rotate with non-legumes to break pest and disease cycles.",
      harvesting:
        "Pick pods when they are pencil-thick and before seeds bulge. Harvest every 2–3 days to maintain quality and extend production. Handle carefully to avoid scarring. Cool and pack promptly; beans lose quality quickly. Record pick counts and weights per plot for yield analysis.",
    },
  },
  {
    id: "avocados",
    name: "Avocados",
    image: cropAvocados,
    price: 799,
    duration: "12–18 months",
    stage: "Fruiting",
    desc: "Avocado trees require patience—a long maturation period—but yield high-value fruit with consistent care and climate control.",
    journey: [
      { title: "Nursery & planting", description: "Grafted trees from certified sources; plant in prepared pits with good drainage." },
      { title: "Young tree establishment", description: "Irrigation, mulch, and light feeding to build canopy and root system." },
      { title: "First flowering", description: "Flowering may take several years; manage nutrition and water for consistent bloom." },
      { title: "Fruit set & development", description: "Thin if needed; maintain irrigation and nutrition through the long fruit growth period." },
      { title: "Maturity & harvest", description: "Harvest by dry matter or calendar; handle carefully and cool for storage." },
    ],
    freeContent: {
      intro: "Avocado is a high-value perennial crop with a long investment horizon. Understanding tree growth, flowering, and fruit development is essential for yield forecasting and resource allocation.",
      overview: "Trees go through vegetative flushes, flowering, fruit set, and fruit development over many months. Climate, nutrition, and water management in each phase influence final yield and quality.",
    },
    paidContent: {
      soilPreparation:
        "Avocados need deep, well-drained soil; they are sensitive to waterlogging and root rot (Phytophthora). Conduct soil and water tests. Improve drainage with mounds or terraces if needed. Incorporate organic matter and ensure good structure before planting. Choose rootstocks suited to soil type and disease pressure.",
      irrigationSystem:
        "Schedule irrigation to avoid waterlogging while meeting evapotranspiration demand. Use soil moisture sensors and deficit strategies where appropriate. Micro-sprinklers or drip are common. Overhead irrigation can increase disease risk. Mulch to conserve moisture and protect feeder roots.",
      pestControl:
        "Monitor for thrips, mites, and fruit fly. Use integrated approaches: sanitation, traps, and targeted sprays. Phytophthora root rot is managed with resistant rootstocks and careful water management. Scale and sooty mould are controlled with horticultural oils and ant management. Keep records of pest and disease incidence.",
      harvesting:
        "Harvest based on dry matter content or calendar dates for the variety and region. Use clippers or poles; avoid dropping fruit. Grade by size and defects. Cool quickly and store at 5–7°C for extended shelf life. Document harvest dates and volumes per tree or block for yield and financial tracking.",
    },
  },
  {
    id: "greenhouse-vegetables",
    name: "Greenhouse Vegetables",
    image: cropGreenhouse,
    price: 599,
    duration: "Continuous",
    stage: "Year-round",
    desc: "Controlled-environment agriculture enables continuous production cycles with precision water, light, and nutrient delivery.",
    journey: [
      { title: "Structure & systems", description: "Greenhouse setup, climate control, irrigation, and fertigation systems in place." },
      { title: "Media & planting", description: "Sterilised or soilless media; transplanting or sowing according to crop plan." },
      { title: "Vegetative phase", description: "Temperature, light, and EC managed for strong growth and uniformity." },
      { title: "Flowering & fruiting", description: "Pollination, nutrition, and environment tuned for yield and quality." },
      { title: "Harvest & turnover", description: "Picking cycles, hygiene, and succession planting for continuous production." },
    ],
    freeContent: {
      intro: "Greenhouse production allows year-round supply and protection from weather extremes. It requires investment in structure, climate control, and irrigation systems.",
      overview: "Crops in greenhouses are managed in cycles—transplanting, vegetative growth, flowering, harvest, and turnover. Environmental control is key to consistent quality and yield.",
    },
    paidContent: {
      soilPreparation:
        "Greenhouse soils or media must be free of pathogens and well structured. Many operations use soilless media (coco coir, peat, perlite) or sterilised soil. Test and amend for pH and EC. Implement crop rotation or media replacement to prevent build-up of pests and diseases. Pre-plant steam or chemical sterilisation may be used where applicable.",
      irrigationSystem:
        "Drip or fertigation systems deliver water and nutrients precisely. Monitor EC and pH of feed solution. Adjust irrigation frequency and volume by growth stage and climate. Automated systems improve consistency. Drainage and leachate management are critical to avoid salinity build-up.",
      pestControl:
        "Scout regularly for aphids, whiteflies, spider mites, and thrips. Use biological control (beneficial insects, mites) where possible. Maintain hygiene; use insect screens and sticky traps. Apply pesticides only when necessary and choose products safe for biocontrols. Manage humidity and ventilation to reduce fungal disease.",
      harvesting:
        "Harvest at the correct maturity for each crop (e.g. colour, size, firmness). Handle and pack in clean, cool conditions. Record harvest weight and grade per bed or section. Plan succession planting to maintain continuous supply. Use harvest data to refine irrigation and nutrition programmes.",
    },
  },
];

export function getCropById(id: string): Crop | undefined {
  return crops.find((c) => c.id === id);
}
