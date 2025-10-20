import { Listing, ListingDetail, Review } from '../types';

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Knoxville, Tennessee',
    location: 'Knoxville, Tennessee',
    description: 'Mountain and lake views',
    price: 388,
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    dates: 'Apr 16 – 21'
  },
  {
    id: '2',
    title: 'Chicago, Illinois',
    location: 'Chicago, Illinois',
    description: 'Lake and city views',
    price: 349,
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    dates: 'Mar 4 – 9'
  },
  {
    id: '3',
    title: 'Sevierville, Tennessee',
    location: 'Sevierville, Tennessee',
    description: 'Mountain and park views',
    price: 229,
    rating: 4.94,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    dates: 'Mar 18 – 23'
  },
  {
    id: '4',
    title: 'Sevierville, Tennessee',
    location: 'Sevierville, Tennessee',
    description: 'Mountain and lake views',
    price: 585,
    rating: 4.98,
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    dates: 'Apr 2 – 7'
  },
  {
    id: '5',
    title: 'Sevierville, Tennessee',
    location: 'Sevierville, Tennessee',
    description: 'Mountain views',
    price: 343,
    rating: 4.93,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    dates: 'Jun 5 – 10'
  },
  {
    id: '6',
    title: 'Sevierville, Tennessee',
    location: 'Sevierville, Tennessee',
    description: 'Mountain and lake views',
    price: 255,
    rating: 4.82,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    dates: 'Mar 5 – 10'
  },
  {
    id: '7',
    title: 'Sevierville, Tennessee',
    location: 'Sevierville, Tennessee',
    description: 'Mountain views',
    price: 199,
    rating: 4.93,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    dates: 'Apr 21 – 26'
  },
  {
    id: '8',
    title: 'Sevierville, Tennessee',
    location: 'Sevierville, Tennessee',
    description: 'Mountain and lake views',
    price: 669,
    rating: 4.82,
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    dates: 'Mar 27 – Apr 1'
  },
  {
    id: '9',
    title: 'Branson, Missouri',
    location: 'Branson, Missouri',
    description: 'Mountain views',
    price: 388,
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
    dates: 'Apr 30 – May 5'
  },
  {
    id: '10',
    title: 'Cassopolis, Michigan',
    location: 'Cassopolis, Michigan',
    description: 'Lake views',
    price: 595,
    rating: 4.96,
    imageUrl: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099',
    dates: 'Mar 5 – 10'
  },
  {
    id: '11',
    title: 'Osage Beach, Missouri',
    location: 'Osage Beach, Missouri',
    description: 'Lake and pool views',
    price: 850,
    rating: 4.85,
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b',
    dates: 'Mar 3 – 8'
  },
  {
    id: '12',
    title: 'Pigeon Forge, Tennessee',
    location: 'Pigeon Forge, Tennessee',
    description: 'Mountain views',
    price: 439,
    rating: 4.95,
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4',
    dates: 'Mar 5 – 10'
  },
  {
    id: '13',
    title: 'Chicago, Illinois',
    location: 'Chicago, Illinois',
    description: 'City views',
    price: 326,
    rating: 4.72,
    imageUrl: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
    dates: 'Apr 4 – 9'
  },
  {
    id: '14',
    title: 'Tofte, Minnesota',
    location: 'Tofte, Minnesota',
    description: 'Beach and lake views',
    price: 170,
    rating: 4.89,
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    dates: 'Mar 19 – 24'
  },
  {
    id: '15',
    title: 'Sevierville, Tennessee',
    location: 'Sevierville, Tennessee',
    description: 'Mountain views',
    price: 428,
    rating: 4.96,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    dates: 'Mar 7 – 12'
  },
  {
    id: '16',
    title: 'Sevierville, Tennessee',
    location: 'Sevierville, Tennessee',
    description: 'Mountain and lake views',
    price: 325,
    rating: 4.86,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    dates: 'Mar 3 – 8'
  }
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    author: {
      name: 'Shayna',
      avatarUrl: 'https://i.pravatar.cc/150?img=1'
    },
    date: 'December 2021',
    rating: 5.0,
    comment: 'Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...'
  },
  {
    id: 'r2',
    author: {
      name: 'Josh',
      avatarUrl: 'https://i.pravatar.cc/150?img=2'
    },
    date: 'November 2021',
    rating: 5.0,
    comment: 'Well designed and fun space, neighborhood has lots of energy and amenities.'
  },
  {
    id: 'r3',
    author: {
      name: 'Vladko',
      avatarUrl: 'https://i.pravatar.cc/150?img=3'
    },
    date: 'November 2020',
    rating: 5.0,
    comment: 'This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.'
  },
  {
    id: 'r4',
    author: {
      name: 'Jennifer',
      avatarUrl: 'https://i.pravatar.cc/150?img=4'
    },
    date: 'January 2022',
    rating: 5.0,
    comment: 'A centric place, near of a sub station and a supermarket with everything you need...'
  }
];

export const mockListingDetail: ListingDetail = {
  id: '1',
  title: 'Bordeaux Getaway',
  location: 'Bordeaux, France',
  description: 'Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.\n\nSpacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.\n\n...',
  price: 75,
  rating: 5.0,
  imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
  dates: 'Feb 19 – 26, 2022',
  views: 'Mountain and lake views',
  host: {
    name: 'Ghazal',
    avatarUrl: 'https://i.pravatar.cc/150?img=10',
    isSuperhost: true,
    joinedDate: '2019'
  },
  propertyDetails: {
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1
  },
  amenities: [
    'Entire home',
    'Enhanced Clean',
    'Self check-in',
    'Free cancellation before Feb 14'
  ],
  images: [
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    'https://images.unsplash.com/photo-1600047509358-9dc75507daeb',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d'
  ],
  reviews: mockReviews,
  totalReviews: 7,
  checkIn: '2/19/2022',
  checkOut: '2/26/2022',
  priceBreakdown: {
    basePrice: 79,
    nights: 7,
    discount: -28,
    cleaningFee: 62,
    serviceFee: 83,
    taxes: 29,
    total: 701
  },
  reviewCategories: {
    cleanliness: 5.0,
    communication: 5.0,
    checkIn: 5.0,
    accuracy: 5.0,
    location: 4.9,
    value: 4.7
  }
};
