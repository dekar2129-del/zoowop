import React from 'react';
import { Shirt, Home, User, Calendar, CheckCircle2, Star, Truck, Leaf, ShieldCheck, Clock, Scissors, Dumbbell, Utensils, Stethoscope, Building2, Briefcase, Bed, MapPin, Play, FileText, Camera, BedDouble, Bath, ChefHat, Layers, Zap, Heart, Smile } from 'lucide-react';
import { PricingPlan, Testimonial, BusinessType, FAQ, MetroArea, BlogPost, ServiceCardItem, Step, Benefit } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic Bliss",
    price: 169,
    features: [
      "1 Deep Cleaning (up to 4 hrs)",
      "2 Laundry Loads (delicate + color care)",
      "3. Priority Pickup & Delivery"
    ]
  },
  {
    name: "Comfort Plus",
    price: 169,
    highlight: true,
    features: [
      "1 Deep Cleaning (up to 4 hrs)",
      "2 Laundry Loads (delicate + color care)",
      "3. Priority Pickup & Delivery"
    ]
  },
  {
    name: "Premium Ease",
    price: 199,
    features: [
      "1 Deep Cleaning (up to 4 hrs)",
      "2 Laundry Loads (delicate + color care)",
      "3. Priority Pickup & Delivery"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Miranda",
    location: "Wilston QLD",
    text: "I arrived home after my clean to find my apartment sparkling clean and looking fabulous.",
    rating: 5,
    image: "https://picsum.photos/seed/miranda/100/100"
  },
  {
    name: "Rubin",
    location: "Albert Park Victoria",
    text: "I use Whizz for a regular weekly clean of my family home. Always arrives on time and completes all cleaning to a great standard.",
    rating: 5,
    image: "https://picsum.photos/seed/rubin/100/100"
  },
  {
    name: "Sarah-Louise",
    location: "Rose Bay Tasmania",
    text: "I couldn't believe how amazing my apartment looked after the clean! They went above and beyond.",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/100/100"
  },
   {
    name: "John Doe",
    location: "Gold Coast",
    text: "Absolutely transformative service. Saved me hours every week.",
    rating: 5,
    image: "https://picsum.photos/seed/john/100/100"
  }
];

export const BUSINESS_TYPES: BusinessType[] = [
  { iconName: 'Scissors', title: 'Salons & Spas', description: 'Clean, soft towels and robes delivered on schedule.' },
  { iconName: 'Dumbbell', title: 'Gyms & Fitness Studios', description: 'Fresh towel and uniform pickup so your members always have what they need.' },
  { iconName: 'Utensils', title: 'Restaurants & Cafes', description: 'Aprons, rags, and uniforms washed and returned, fast.' },
  { iconName: 'Stethoscope', title: 'Medical & Wellness Offices', description: 'Reliable cleaning for scrubs, coats, and treatment linens.' },
  { iconName: 'Building2', title: 'Residential Buildings', description: 'Offer residents laundry pickup as a standout amenity.' },
  { iconName: 'Briefcase', title: 'Offices & Co-working Spaces', description: 'Light laundry needs, fully handled—no distractions.' },
  { iconName: 'Bed', title: 'Short-Term Rentals', description: 'We handle guest laundry so you can focus on 5-star stays.' },
  { iconName: 'Shirt', title: 'Employee Laundry Perks', description: 'Give your team time back with weekly wash & fold service.' },
];

export const BUSINESS_FAQS: FAQ[] = [
  { iconName: 'Calendar', question: 'What days do you provide service?', answer: 'Our team is on the road 7 days a week, performing both daytime and evening laundry deliveries to ensure we’re there whenever you need us. We offer flexible service options for all your business laundry needs.' },
  { iconName: 'MapPin', question: 'In what cities do you operate?', answer: 'Rinse currently serves the following major metro areas for professional laundry and dry cleaning services: San Francisco, New York, Los Angeles, Washington DC, Chicago, Boston, Austin, Dallas, New Jersey, Seattle, and Toronto. Enjoy convenient laundry pickup' },
  { iconName: 'Play', question: 'How soon can I start service?', answer: 'Once we confirm a few service details, your first laundry pickup can be scheduled as soon as the same day, providing fast and efficient service for your business.' },
  { iconName: 'FileText', question: 'Do I need a contract?', answer: 'No contracts required to partner with Rinse—our flexible laundry and cleaning services adapt as your needs change. Enjoy custom-tailored solutions available without long-term commitments.' },
  { iconName: 'User', question: 'How do you support partners?', answer: 'Our Customer Success team is here to answer your questions and assist with any updates to your cleaning services. We offer dedicated support to help you manage all your commercial laundry needs.' },
  { iconName: 'Truck', question: 'Can I change my service schedule?', answer: 'Absolutely! You can adjust your service days and frequency anytime to fit your current cleaning schedule and evolving business needs.' },
];

export const METRO_AREAS: MetroArea[] = [
  { name: 'San Francisco', image: 'https://picsum.photos/seed/sf/300/200' },
  { name: 'New York', image: 'https://picsum.photos/seed/ny/300/200' },
  { name: 'Los Angeles', image: 'https://picsum.photos/seed/la/300/200' },
  { name: 'Washington DC', image: 'https://picsum.photos/seed/dc/300/200' },
  { name: 'Chicago', image: 'https://picsum.photos/seed/chi/300/200' },
  { name: 'Boston', image: 'https://picsum.photos/seed/bos/300/200' },
  { name: 'Austin', image: 'https://picsum.photos/seed/aus/300/200' },
  { name: 'Dallas', image: 'https://picsum.photos/seed/dal/300/200' },
];

export const BLOG_POSTS: BlogPost[] = [
  { title: 'Gym Towel Service: How to Choose the Right One', image: 'https://picsum.photos/seed/gymtowel/400/300', author: 'The Rinse Team', year: '2023' },
  { title: 'How to Clean Your Airbnb', image: 'https://picsum.photos/seed/airbnb/400/300', author: 'The Rinse Team', year: '2023' },
  { title: 'Washing Uniforms: All You Need to Know for Your Business', image: 'https://picsum.photos/seed/uniforms/400/300', author: 'The Rinse Team', year: '2023' },
];

// Services Page Data
export const LAUNDRY_SERVICES: ServiceCardItem[] = [
  { iconName: 'Camera', title: 'Clean & Press', description: 'Clean & Press keeps your clothes safe from shrinkage. Perfect for office wear and formal occasions—washed and professionally steam pressed for a flawless finish.' },
  { iconName: 'BedDouble', title: 'Bed & Bath', description: 'Fill the Bed & Bath bag with maximum 15 home items that need cleaning and perfect pressing. The whole bag costs only $95' },
  { iconName: 'Layers', title: 'Wash & Fold', description: 'Perfect for your daily wear—washed, dried & neatly folded. Fill the bag for just $79!' },
  { iconName: 'Shirt', title: 'Press Only', description: 'Perfect for your daily wear—washed, dried & neatly folded. Fill the bag for just $79!' },
];

export const CLEANING_SERVICES: ServiceCardItem[] = [
  { iconName: 'Home', title: 'Clean my Home / Airbnb Property', description: 'Clean & Press keeps your clothes safe from shrinkage. Perfect for office wear and formal occasions—washed and professionally steam pressed for a flawless finish.' },
  { iconName: 'Bed', title: 'Clean my Bedroom', description: 'Clean & Press keeps your clothes safe from shrinkage. Perfect for office wear and formal occasions—washed and professionally steam pressed for a flawless finish.' },
  { iconName: 'Bath', title: 'Clean my Bath', description: 'Clean & Press keeps your clothes safe from shrinkage. Perfect for office wear and formal occasions—washed and professionally steam pressed for a flawless finish.' },
  { iconName: 'ChefHat', title: 'Clean my Kitchen', description: 'Clean & Press keeps your clothes safe from shrinkage. Perfect for office wear and formal occasions—washed and professionally steam pressed for a flawless finish.' },
];

// How It Works Page Data
export const HIW_STEPS: Step[] = [
  { 
    id: 1, 
    title: 'We Match You with a Trusted Zowooper', 
    description: 'Your friendly, background-checked Zowooper (our cleaning and laundry expert) gets your booking details instantly. Every Zowooper is trained, professional, and dedicated to delivering quality with care',
    icon: <Layers className="w-8 h-8 text-white" />
  },
  { 
    id: 2, 
    title: 'We arrive at Your Doorstep', 
    description: 'For Laundry, your Zowooper picks up your clothes right from your doorstep. For Home Cleaning, they arrive at your location with all the essentials — ready to sparkle your space.',
    icon: <Home className="w-8 h-8 text-white" />
  },
  { 
    id: 3, 
    title: 'We Clean, Press & Refresh', 
    description: 'Laundry Zowooper: Takes your clothes to our professional facility for a premium wash, press, and fold, using top-quality, eco-friendly detergents. Cleaning Zowooper: Cleans every corner of your home with care, using safe, effective products for a spotless finish.',
    icon: <Shirt className="w-8 h-8 text-white" />
  },
  { 
    id: 4, 
    title: 'Delivered Clean. Lived In Happy.', 
    description: 'Laundry is delivered back fresh, folded, and on time. Homes are left shining, peaceful, and guest-ready. Either way — you win back your time, energy, and peace of mind.',
    icon: <CheckCircle2 className="w-8 h-8 text-white" />
  }
];

export const HIW_BENEFITS: Benefit[] = [
  { iconName: 'Zap', title: 'Your mind declutters.', description: 'A clean space clears the fog. You think sharper, feel calmer, and move through your day with clarity and intention.' },
  { iconName: 'Layers', title: 'Your productivity flows.', description: 'No distractions. No piles of "I\'ll do it later." Just a refreshed environment that fuels focus, creativity, and results.' },
  { iconName: 'Heart', title: 'Your relationships thrive.', description: 'When your surroundings feel peaceful, you do too. You show up with more patience, presence, and joy for the people you love.' },
  { iconName: 'Smile', title: 'Your life feels balanced.', description: 'Weekly cleaning isn\'t a chore — it\'s a self-care ritual for modern living. It gives you back your time, your energy, and your peace of mind.' },
];
