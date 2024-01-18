import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'USER_EXPERIMENT';
const COOKIE_MAX_AGE = 24 * 60 * 60; // 1 day in seconds

export const config = {
};

export function middleware(req: NextRequest) {
    const cookie = req.cookies.get(COOKIE_NAME);

    // Check if cookie exists and is a string
    if (cookie && typeof cookie === 'string') {
        const [value, timestamp] = (cookie as string).split('.');
        if (timestamp && !isCookieExpired(timestamp)) {
            return NextResponse.next(); // Cookie is valid, do nothing
        }
    }

    // Assign a new cookie if not present or expired
    const newCookieValue = getRandomCookieValue();
    const res = NextResponse.next();
    res.cookies.set(COOKIE_NAME, newCookieValue, { maxAge: COOKIE_MAX_AGE });
    return res;
}

// Helper function to determine if the cookie is expired
function isCookieExpired(timestamp) {
    const cookieAge = Date.now() / 1000 - parseInt(timestamp, 10);
    return cookieAge > COOKIE_MAX_AGE;
}

// Helper function to get a random cookie value with a timestamp
function getRandomCookieValue() {
    const variants = ['A', 'B', 'C'];
    const randomIndex = Math.floor(Math.random() * variants.length);
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return variants[randomIndex] + '.' + currentTimestamp;
}

// Add these functions to the export if you want to use them externally
export { isCookieExpired, getRandomCookieValue };
