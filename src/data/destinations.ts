import { Destination } from '@/types/trek';

export interface StateDestinationGroup {
  state: string;
  slug: string;
  allCount: number;
  places: Destination[];
}

export const STATE_GROUPS: StateDestinationGroup[] = [
  {
    state: 'Andhra Pradesh',
    slug: 'andhra-pradesh',
    allCount: 6,
    places: [
      { slug: 'araku-valley', name: 'Araku Valley', state: 'Andhra Pradesh', count: 2, isState: false, description: 'Lush coffee plantations, tribal culture, and serene Eastern Ghats trails.' },
      { slug: 'lambasingi', name: 'Lambasingi', state: 'Andhra Pradesh', count: 3, isState: false, description: 'Often called the Kashmir of Andhra Pradesh with morning frosts and misty apple orchards.' },
    ],
  },
  {
    state: 'Goa',
    slug: 'goa',
    allCount: 3,
    places: [
      { slug: 'dudhsagar', name: 'Dudhsagar', state: 'Goa', count: 3, isState: false, description: 'Four-tiered milky waterfall trek through lush Bhagwan Mahaveer Sanctuary.' },
    ],
  },
  {
    state: 'Himachal Pradesh',
    slug: 'himachal-pradesh',
    allCount: 16,
    places: [
      { slug: 'jibhi', name: 'Jibhi', state: 'Himachal Pradesh', count: 2, isState: false, description: 'Hidden gem in Tirthan valley with pine forests and freshwater waterfalls.' },
      { slug: 'kasol', name: 'Kasol', state: 'Himachal Pradesh', count: 5, isState: false, description: 'Parvati Valley hub for backpackers and treks to Grahan and Chalal.' },
      { slug: 'kheerganga', name: 'Kheerganga', state: 'Himachal Pradesh', count: 3, isState: false, description: 'Famed natural hot springs trek overlooking snow-capped mountain ranges.' },
      { slug: 'kullu', name: 'Kullu', state: 'Himachal Pradesh', count: 3, isState: false, description: 'Valley of the Gods with dramatic alpine scenery and river expeditions.' },
      { slug: 'manali', name: 'Manali', state: 'Himachal Pradesh', count: 5, isState: false, description: 'Gateway to high-altitude Himalayan passes, Bhrigu Lake and Hampta Pass.' },
      { slug: 'mcleod-ganj', name: 'McLeod Ganj', state: 'Himachal Pradesh', count: 2, isState: false, description: 'Tibetan spiritual retreat and base for the scenic Triund ridge trek.' },
      { slug: 'shimla', name: 'Shimla', state: 'Himachal Pradesh', count: 3, isState: false, description: 'Colonial hill town with scenic forest ridges and Shali Tibba viewpoints.' },
      { slug: 'spiti-valley', name: 'Spiti Valley', state: 'Himachal Pradesh', count: 2, isState: false, description: 'High-altitude cold desert with ancient monasteries and surreal terrain.' },
      { slug: 'triund', name: 'Triund', state: 'Himachal Pradesh', count: 2, isState: false, description: 'Panoramic Dhauladhar ridge trek offering sunrise views above Kangra.' },
    ],
  },
  {
    state: 'Jammu and Kashmir',
    slug: 'jammu-and-kashmir',
    allCount: 4,
    places: [
      { slug: 'gulmarg', name: 'Gulmarg', state: 'Jammu and Kashmir', count: 4, isState: false, description: 'Meadow of Flowers and premier winter snow sports destination in the Pir Panjal range.' },
      { slug: 'pahalgam', name: 'Pahalgam', state: 'Jammu and Kashmir', count: 4, isState: false, description: 'Lidder river valley, base for Kolahoi glacier and alpine meadow hikes.' },
      { slug: 'sonmarg', name: 'Sonmarg', state: 'Jammu and Kashmir', count: 2, isState: false, description: 'Meadow of Gold and stepping stone to Thajiwas glacier and Great Lakes.' },
      { slug: 'srinagar', name: 'Srinagar', state: 'Jammu and Kashmir', count: 4, isState: false, description: 'Dal Lake houseboats, Mughal gardens, and heritage valley exploration.' },
    ],
  },
  {
    state: 'Karnataka',
    slug: 'karnataka',
    allCount: 61,
    places: [
      { slug: 'anthargange', name: 'Anthargange', state: 'Karnataka', count: 2, isState: false, description: 'Volcanic rock formations and thrilling cave exploration night treks.' },
      { slug: 'chikmagalur', name: 'Chikmagalur', state: 'Karnataka', count: 4, isState: false, description: 'Coffee capital with Mullayanagiri, the highest peak in Karnataka.' },
      { slug: 'coorg', name: 'Coorg', state: 'Karnataka', count: 8, isState: false, description: 'Scotland of India featuring Tadiandamol peak and Brahmagiri wildlife sanctuary.' },
      { slug: 'dandeli', name: 'Dandeli', state: 'Karnataka', count: 5, isState: false, description: 'Dense Western Ghats rainforests, Kali river rafting, and jungle walks.' },
      { slug: 'gokarna', name: 'Gokarna', state: 'Karnataka', count: 9, isState: false, description: 'Iconic beach treks hopping along Om, Half Moon, and Paradise beaches.' },
      { slug: 'kalasa', name: 'Kalasa', state: 'Karnataka', count: 2, isState: false, description: 'Temple town tucked amidst tea gardens, waterfalls, and Western Ghat slopes.' },
      { slug: 'kemmanagundi', name: 'Kemmanagundi', state: 'Karnataka', count: 2, isState: false, description: 'Royal hill station with ornamental gardens and Z point trek.' },
      { slug: 'murudeshwar', name: 'Murudeshwar', state: 'Karnataka', count: 6, isState: false, description: 'Arabian sea coastal cliffs, giant Shiva shrine, and Netrani island dive base.' },
      { slug: 'mysore', name: 'Mysore', state: 'Karnataka', count: 3, isState: false, description: 'Heritage city with Chamundi Hills steps trail and palace grounds.' },
      { slug: 'nandi-hills', name: 'Nandi Hills', state: 'Karnataka', count: 2, isState: false, description: 'Bangalore weekend favorite for sunrise cliff views and Tipu Sultan fort.' },
      { slug: 'shivagange', name: 'Shivagange', state: 'Karnataka', count: 1, isState: false, description: 'Distinct hillock resembling a Shivalinga with rock-cut pilgrim routes.' },
      { slug: 'udupi', name: 'Udupi', state: 'Karnataka', count: 3, isState: false, description: 'Coastal temples, virgin beaches, and nearby Western Ghat foothills.' },
    ],
  },
  {
    state: 'Kerala',
    slug: 'kerala',
    allCount: 11,
    places: [
      { slug: 'alleppey', name: 'Alleppey', state: 'Kerala', count: 2, isState: false, description: 'Backwater canals, paddy field walks, and canoe explorations.' },
      { slug: 'munnar', name: 'Munnar', state: 'Kerala', count: 4, isState: false, description: 'Rolling tea estates and Anamudi peak in the high ranges of Western Ghats.' },
      { slug: 'varkala', name: 'Varkala', state: 'Kerala', count: 2, isState: false, description: 'Red laterite sea cliffs, natural springs, and sunset coastal hikes.' },
      { slug: 'wayanad', name: 'Wayanad', state: 'Kerala', count: 4, isState: false, description: 'Chembra Peak heart-shaped lake, caves, and bamboo forest reserves.' },
    ],
  },
  {
    state: 'Maharashtra',
    slug: 'maharashtra',
    allCount: 21,
    places: [
      { slug: 'andharban', name: 'Andharban', state: 'Maharashtra', count: 2, isState: false, description: 'The dark forest trail descending into Bhira dam through Sahyadri mist.' },
      { slug: 'devkund', name: 'Devkund', state: 'Maharashtra', count: 2, isState: false, description: 'Hidden pond waterfall trek deep inside Tamhini ghat forest.' },
      { slug: 'lonavala', name: 'Lonavala', state: 'Maharashtra', count: 6, isState: false, description: 'Sahyadri monsoon paradise with Rajmachi, Lohagad, and Duke’s Nose.' },
      { slug: 'matheran', name: 'Matheran', state: 'Maharashtra', count: 2, isState: false, description: 'Automobile-free hill station with red mud trails and cliff-edge panoramas.' },
      { slug: 'rajgad', name: 'Rajgad', state: 'Maharashtra', count: 2, isState: false, description: 'Historic capital of the Maratha Empire with dramatic machis and steep stairs.' },
      { slug: 'visapur', name: 'Visapur', state: 'Maharashtra', count: 2, isState: false, description: 'Ancient fortress trek famous for ascending through active monsoon waterfalls.' },
    ],
  },
  {
    state: 'Puducherry',
    slug: 'puducherry',
    allCount: 3,
    places: [
      { slug: 'pondicherry', name: 'Pondicherry', state: 'Puducherry', count: 3, isState: false, description: 'French Quarter promenade, Auroville forest walks, and beachside tours.' },
    ],
  },
  {
    state: 'Rajasthan',
    slug: 'rajasthan',
    allCount: 5,
    places: [
      { slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan', count: 2, isState: false, description: 'Aravalli ridge hikes around Nahargarh and Jaigarh fortifications.' },
      { slug: 'jaisalmer', name: 'Jaisalmer', state: 'Rajasthan', count: 3, isState: false, description: 'Thar golden sand dunes safari and starlit desert camping.' },
      { slug: 'mount-abu', name: 'Mount Abu', state: 'Rajasthan', count: 2, isState: false, description: 'Rajasthan’s only hill station featuring Guru Shikhar and Trevor’s Tank trails.' },
      { slug: 'udaipur', name: 'Udaipur', state: 'Rajasthan', count: 4, isState: false, description: 'City of Lakes surrounded by Aravalli hiking trails and Tiger Lake views.' },
    ],
  },
  {
    state: 'Sikkim',
    slug: 'sikkim',
    allCount: 2,
    places: [
      { slug: 'gangtok', name: 'Gangtok', state: 'Sikkim', count: 2, isState: false, description: 'Himalayan wonderland with views of Mt. Kanchenjunga, Tsomgo Lake, and Nathula.' },
    ],
  },
  {
    state: 'Tamil Nadu',
    slug: 'tamil-nadu',
    allCount: 8,
    places: [
      { slug: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', count: 3, isState: false, description: 'Western Ghats gateway, Velliangiri hills spiritual climbs, and waterfalls.' },
      { slug: 'coonoor', name: 'Coonoor', state: 'Tamil Nadu', count: 2, isState: false, description: 'Nilgiri tea plantations, Sim’s Park, and Droog fort ridge trails.' },
      { slug: 'mahabalipuram', name: 'Mahabalipuram', state: 'Tamil Nadu', count: 2, isState: false, description: 'Rock-cut coastal monolithic architecture and Coromandel beach paths.' },
      { slug: 'ooty', name: 'Ooty', state: 'Tamil Nadu', count: 5, isState: false, description: 'Queen of Hill Stations with Doddabetta peak and Glenmorgan shola treks.' },
    ],
  },
  {
    state: 'Telangana',
    slug: 'telangana',
    allCount: 3,
    places: [
      { slug: 'hyderabad-trails', name: 'Hyderabad & Environs', state: 'Telangana', count: 3, isState: false, description: 'Ananthagiri hills forest hikes, Khajaguda rock bouldering, and Bhongir fort.' },
    ],
  },
  {
    state: 'Uttar Pradesh',
    slug: 'uttar-pradesh',
    allCount: 7,
    places: [
      { slug: 'agra', name: 'Agra', state: 'Uttar Pradesh', count: 3, isState: false, description: 'Yamuna riverfront trails, Taj sunrise walks, and Chambal sanctuary trips.' },
      { slug: 'ayodhya', name: 'Ayodhya', state: 'Uttar Pradesh', count: 2, isState: false, description: 'Saryu river ghat trails and historic spiritual circuit exploration.' },
      { slug: 'mathura', name: 'Mathura', state: 'Uttar Pradesh', count: 2, isState: false, description: 'Govardhan Parikrama circuit trail and Braj heritage routes.' },
    ],
  },
  {
    state: 'Uttarakhand',
    slug: 'uttarakhand',
    allCount: 11,
    places: [
      { slug: 'badrinath', name: 'Badrinath', state: 'Uttarakhand', count: 4, isState: false, description: 'Mana village, Vasudhara falls, and Alaknanda headwater treks.' },
      { slug: 'chopta', name: 'Chopta', state: 'Uttarakhand', count: 2, isState: false, description: 'Mini Switzerland of India, base for Tungnath temple and Chandrashila peak.' },
      { slug: 'gangotri', name: 'Gangotri', state: 'Uttarakhand', count: 2, isState: false, description: 'Gaumukh glacier trail and high-altitude Bhagirathi valley.' },
      { slug: 'haridwar', name: 'Haridwar', state: 'Uttarakhand', count: 3, isState: false, description: 'Mansa Devi and Chandi Devi ridge trails overlooking the Ganges.' },
      { slug: 'kedarkantha', name: 'Kedarkantha', state: 'Uttarakhand', count: 1, isState: false, description: 'India’s most celebrated winter summit trek with 360-degree Himalayan views.' },
      { slug: 'kedarnath', name: 'Kedarnath', state: 'Uttarakhand', count: 4, isState: false, description: 'Mandakini river gorge trail to the sacred Himalayan sanctuary.' },
      { slug: 'rudraprayag', name: 'Rudraprayag', state: 'Uttarakhand', count: 2, isState: false, description: 'Confluence of Alaknanda and Mandakini rivers with scenic valley hikes.' },
      { slug: 'yamunotri', name: 'Yamunotri', state: 'Uttarakhand', count: 2, isState: false, description: 'Janki Chatti to Yamuna source hot springs canyon trek.' },
    ],
  },
];

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    slug: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    count: 5,
    isState: false,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    description: 'Snow-clad peaks, pine forests, and high Himalayan passes.',
  },
  {
    slug: 'kedarkantha',
    name: 'Kedarkantha',
    state: 'Uttarakhand',
    count: 1,
    isState: false,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    description: 'The quintessential winter wonderland summit trek in the Garhwal Himalayas.',
  },
  {
    slug: 'gulmarg',
    name: 'Gulmarg',
    state: 'Jammu and Kashmir',
    count: 4,
    isState: false,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    description: 'Powder snow slopes, world’s highest gondola, and pine meadows.',
  },
  {
    slug: 'gokarna',
    name: 'Gokarna',
    state: 'Karnataka',
    count: 9,
    isState: false,
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
    description: 'Cliffside coastal trails connecting pristine Arabian Sea beaches.',
  },
  {
    slug: 'chopta',
    name: 'Chopta - Chandrashila',
    state: 'Uttarakhand',
    count: 2,
    isState: false,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Highest Shiva temple in the world with breathtaking Chandrashila peak.',
  },
  {
    slug: 'coorg',
    name: 'Coorg',
    state: 'Karnataka',
    count: 8,
    isState: false,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Coffee-scented hills, Tadiandamol summit, and misty waterfalls.',
  },
];

export const WINTER_DESTINATION_CHIPS = [
  { name: 'Gulmarg', count: 4, slug: 'gulmarg' },
  { name: 'Pahalgam', count: 4, slug: 'pahalgam' },
  { name: 'Srinagar', count: 4, slug: 'srinagar' },
  { name: 'Manali', count: 3, slug: 'manali' },
  { name: 'Gangtok', count: 2, slug: 'gangtok' },
  { name: 'Kasol', count: 2, slug: 'kasol' },
  { name: 'Kullu', count: 2, slug: 'kullu' },
  { name: 'Shimla', count: 2, slug: 'shimla' },
  { name: 'Sonmarg', count: 2, slug: 'sonmarg' },
  { name: 'Chopta', count: 1, slug: 'chopta' },
  { name: 'Kedarkantha', count: 1, slug: 'kedarkantha' },
];

