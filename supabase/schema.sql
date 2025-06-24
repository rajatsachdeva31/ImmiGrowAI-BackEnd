-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE work_type AS ENUM ('BROKERAGE', 'INDEPENDENT');

-- Create tables (converted from Prisma schema)

-- Roles table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users table (main user table)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    role_id INTEGER REFERENCES roles(id),
    dob DATE,
    full_name VARCHAR(255),
    phone_no VARCHAR(50) UNIQUE,
    user_verified BOOLEAN DEFAULT FALSE,
    background_verification BOOLEAN DEFAULT FALSE,
    terms_condition_check BOOLEAN DEFAULT FALSE,
    status_in_canada VARCHAR(255),
    already_in_canada BOOLEAN,
    country_of_origin VARCHAR(255),
    current_location VARCHAR(255),
    
    -- Add indexes for better performance
    CONSTRAINT users_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT users_phone_check CHECK (phone_no ~ '^[+]?[0-9\s\-\(\)]+$')
);

-- Realtors table
CREATE TABLE realtors (
    id SERIAL PRIMARY KEY,
    user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    business_name VARCHAR(255) NOT NULL,
    business_address TEXT,
    real_estate_license_number VARCHAR(255) NOT NULL,
    affiliated_associations TEXT,
    areas_covered TEXT NOT NULL,
    specialties TEXT,
    portfolio_website VARCHAR(255),
    business_registration VARCHAR(255) NOT NULL,
    work_type work_type NOT NULL,
    brokerage_name VARCHAR(255),
    office_location_available BOOLEAN NOT NULL,
    team_members INTEGER NOT NULL,
    virtual_property_tour BOOLEAN NOT NULL,
    years_of_experience VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Car Dealerships table
CREATE TABLE car_dealerships (
    id SERIAL PRIMARY KEY,
    user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    showroom_locations TEXT NOT NULL,
    test_drive_policy TEXT NOT NULL,
    financing_options TEXT NOT NULL,
    trade_in_available BOOLEAN NOT NULL,
    service_warranty_info TEXT NOT NULL,
    business_registration VARCHAR(255) NOT NULL,
    business_name VARCHAR(255) NOT NULL,
    dealership_license_number VARCHAR(255) NOT NULL,
    car_brands_sold TEXT NOT NULL,
    new_or_used_cars VARCHAR(100) NOT NULL,
    years_in_business VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Immigration Consultants table
CREATE TABLE immigration_consultants (
    id SERIAL PRIMARY KEY,
    user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    countries_served TEXT NOT NULL,
    consultation_fee DECIMAL(10,2),
    business_registration VARCHAR(255) NOT NULL,
    partnered_legal_firms TEXT,
    website_or_social_media VARCHAR(255),
    business_name VARCHAR(255) NOT NULL,
    business_address TEXT NOT NULL,
    license_number VARCHAR(255) NOT NULL,
    services_offered TEXT NOT NULL,
    languages_spoken TEXT NOT NULL,
    years_of_experience VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- House Listings table
CREATE TABLE house_listings (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(12,2) NOT NULL,
    location VARCHAR(255) NOT NULL,
    landlord_id UUID NOT NULL REFERENCES users(id),
    end_date TIMESTAMP WITH TIME ZONE,
    end_time VARCHAR(20),
    openhouse BOOLEAN DEFAULT FALSE,
    start_time VARCHAR(20),
    start_date TIMESTAMP WITH TIME ZONE,
    bathrooms INTEGER,
    bedrooms INTEGER,
    square_feet INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT house_listings_price_positive CHECK (price > 0),
    CONSTRAINT house_listings_rooms_positive CHECK (bathrooms >= 0 AND bedrooms >= 0)
);

-- Car Listings table
CREATE TABLE car_listings (
    id SERIAL PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    make VARCHAR(255) NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    dealership_id UUID NOT NULL REFERENCES users(id),
    exterior_color VARCHAR(100),
    fuel_type VARCHAR(100),
    interior_color VARCHAR(100),
    mileage INTEGER,
    no_of_seats INTEGER,
    status VARCHAR(100),
    transmission VARCHAR(100),
    vehicle_type VARCHAR(100),
    vin VARCHAR(255),
    year INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT car_listings_price_positive CHECK (price > 0),
    CONSTRAINT car_listings_year_valid CHECK (year >= 1900 AND year <= EXTRACT(YEAR FROM NOW()) + 2),
    CONSTRAINT car_listings_mileage_positive CHECK (mileage >= 0)
);

-- Availability table
CREATE TABLE availability (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT availability_valid_time CHECK (end_time > start_time)
);

-- House Bookings table
CREATE TABLE house_bookings (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    listing_id INTEGER NOT NULL REFERENCES house_listings(id),
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(100) NOT NULL,
    meet_link VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT house_bookings_valid_dates CHECK (end_date > start_date)
);

-- Car Bookings table
CREATE TABLE car_bookings (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    listing_id INTEGER NOT NULL REFERENCES car_listings(id),
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(100) NOT NULL,
    meet_link VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT car_bookings_valid_dates CHECK (end_date > start_date)
);

-- Consultation Bookings table
CREATE TABLE consultation_bookings (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    consultant_id UUID NOT NULL REFERENCES users(id),
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(100) NOT NULL,
    meet_link VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT consultation_bookings_valid_dates CHECK (end_date > start_date),
    CONSTRAINT consultation_bookings_different_users CHECK (user_id != consultant_id)
);

-- User Documents table (files will be stored in Supabase Storage)
CREATE TABLE user_documents (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    document_type VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL, -- Path to file in Supabase Storage
    file_name VARCHAR(255) NOT NULL,
    file_size BIGINT,
    mime_type VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Property Documents table
CREATE TABLE property_documents (
    id SERIAL PRIMARY KEY,
    listing_id INTEGER NOT NULL REFERENCES house_listings(id),
    document_type VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_size BIGINT,
    mime_type VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Car Documents table
CREATE TABLE car_documents (
    id SERIAL PRIMARY KEY,
    listing_id INTEGER NOT NULL REFERENCES car_listings(id),
    document_type VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_size BIGINT,
    mime_type VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    amount DECIMAL(12,2) NOT NULL,
    transaction_type VARCHAR(255) NOT NULL,
    stripe_payment_intent_id VARCHAR(255),
    status VARCHAR(100) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT payments_amount_positive CHECK (amount > 0)
);

-- House Images table (images will be stored in Supabase Storage)
CREATE TABLE house_images (
    id SERIAL PRIMARY KEY,
    listing_id INTEGER NOT NULL REFERENCES house_listings(id),
    image_path VARCHAR(255) NOT NULL, -- Path to image in Supabase Storage
    image_url VARCHAR(255), -- Public URL for the image
    alt_text VARCHAR(255),
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Car Images table
CREATE TABLE car_images (
    id SERIAL PRIMARY KEY,
    listing_id INTEGER NOT NULL REFERENCES car_listings(id),
    image_path VARCHAR(255) NOT NULL,
    image_url VARCHAR(255),
    alt_text VARCHAR(255),
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Favourite Cars table
CREATE TABLE favourite_cars (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    listing_id INTEGER NOT NULL REFERENCES car_listings(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(user_id, listing_id)
);

-- Favourite Houses table
CREATE TABLE favourite_houses (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    listing_id INTEGER NOT NULL REFERENCES house_listings(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(user_id, listing_id)
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role_id ON users(role_id);
CREATE INDEX idx_house_listings_landlord_id ON house_listings(landlord_id);
CREATE INDEX idx_house_listings_location ON house_listings(location);
CREATE INDEX idx_house_listings_price ON house_listings(price);
CREATE INDEX idx_car_listings_dealership_id ON car_listings(dealership_id);
CREATE INDEX idx_car_listings_make_model ON car_listings(make, model);
CREATE INDEX idx_car_listings_price ON car_listings(price);
CREATE INDEX idx_availability_user_id ON availability(user_id);
CREATE INDEX idx_availability_start_time ON availability(start_time);
CREATE INDEX idx_house_bookings_user_id ON house_bookings(user_id);
CREATE INDEX idx_house_bookings_listing_id ON house_bookings(listing_id);
CREATE INDEX idx_car_bookings_user_id ON car_bookings(user_id);
CREATE INDEX idx_car_bookings_listing_id ON car_bookings(listing_id);
CREATE INDEX idx_consultation_bookings_user_id ON consultation_bookings(user_id);
CREATE INDEX idx_consultation_bookings_consultant_id ON consultation_bookings(consultant_id);

-- Insert default roles
INSERT INTO roles (name) VALUES 
    ('Admin'),
    ('Immigrant'),
    ('Realtor'),
    ('Car Dealership'),
    ('Immigration Consultant')
ON CONFLICT (name) DO NOTHING; 