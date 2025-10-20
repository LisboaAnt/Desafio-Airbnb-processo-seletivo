export interface Listing {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  dates: string;
  views?: string;
}

export interface ListingDetail extends Listing {
  host: {
    name: string;
    avatarUrl: string;
    isSuperhost: boolean;
    joinedDate: string;
  };
  propertyDetails: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
  };
  amenities: string[];
  images: string[];
  reviews: Review[];
  totalReviews: number;
  checkIn: string;
  checkOut: string;
  priceBreakdown: {
    basePrice: number;
    nights: number;
    discount?: number;
    cleaningFee: number;
    serviceFee: number;
    taxes: number;
    total: number;
  };
  reviewCategories: {
    cleanliness: number;
    communication: number;
    checkIn: number;
    accuracy: number;
    location: number;
    value: number;
  };
}

export interface Review {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  date: string;
  rating: number;
  comment: string;
}
